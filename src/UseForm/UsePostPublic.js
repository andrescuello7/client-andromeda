import { useState, useEffect } from "react";
import { getBase644, beforeUpload4 } from "../utils/index";
import UseHome from "../UseForm/UseHome";
import axios from "axios";

const UsePostPublic = () => {
  //States of Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  //States
    const { proveedor, usuario, setPublicacionActual, publicacionActual } = UseHome();
    const [validation, setValidation] = useState(false);
    const [ flyer, setFlyer] = useState("")
    const token = localStorage.getItem("token");
    const [base64, setBase64] = useState("");
    const [ file, setFile ] = useState(null)
    const [input, setInput] = useState({});

  //Codigo de imagenes
  const handlePic = async (e) => {
    const pic = e.target.files[0];
    const base64img = await getBase644(pic);
    const changedInput = { ...input, flyer: flyer };
    setInput(changedInput);
    setBase64(base64img);
    setFile(pic)
    
    const formData = new FormData()
    formData.append('file', pic)
    formData.append('upload_preset', 'wkuf5yo4')
    fetch('https://api.cloudinary.com/v1_1/five-drive/upload', {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(res => setFlyer(res.url))
  }
 
  useEffect(() => {
    const changedInput = { ...input, flyer: flyer };
    setInput(changedInput);
  },[flyer])

  const handleUpload = () => {
    handleClose()
  }

  //Funcions
  const HandleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = {
      ...input,
      [name]: value,
      perfil: usuario.imagen,
      proveedor: proveedor,
    };
    setInput(changedInput);
  };


  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(input)
      const headers = { "x-auth-token": token };
      await axios.post("publicacion", input, { headers });
      setPublicacionActual(true);
    } catch (error) {
      console.log(error);
      setValidation(true);
    }
  };

  const onInputClick = (event) => {
    event.target.value = "";
  };

  //Codigo para foto base 64
  /*const onChangeImg = async (e) => {
    const img = e.target.files[0];
    const base64img = await getBase644(img);
    const changedInput = { ...input, imagenPublicada: base64img };
    setBase64(base64img);
    setInput(changedInput);
  };*/

  return {
    publicacionActual,
    onInputClick,
    HandleChange,
    HandleSubmit,
    handleUpload,
    handleClose,
    handleShow,
    validation,
    handlePic,
    base64,
    input,
    show,
  };
};
export default UsePostPublic;
