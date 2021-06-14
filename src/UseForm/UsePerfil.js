import { beforeUpload, getBase64 } from "../utils/index";
import UseHome from "../UseForm/UseHome";
import { useState } from "react";
import axios from "axios";

const UsePerfil = () => {
  const token = localStorage.getItem("token");
  const { usuario } = UseHome();

  const [base64, setBase64] = useState("");
  const [flyer, setFlyer] = useState("");
  const [file, setFile] = useState(null);
  const exampleImage =
    "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg";

  //Codigo para foto base 64
  const onChangeImg = async (e) => {
    const headers = { "x-auth-token": token };
    const pic = e.target.files[0];
    const base64img = await getBase64(pic);
    setBase64(base64img);
    setFile(pic);

    const formData = new FormData();
    formData.append("file", pic);
    formData.append("upload_preset", "wkuf5yo4");
    fetch("https://api.cloudinary.com/v1_1/five-drive/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) =>
        axios.put(
          `usuario/${usuario._id}`,
          { imagen: res.url },
          {
            headers,
          }
        )
      )
      .then((response) => console.log(response.data));
  };

  //Codigo de imagenes
  /*const handlePic = async (e) => {
    const pic = e.target.files[0];
    const base64img = await getBase64(pic);
    const changedInput = { ...input, flyer: flyer };
    setInput(changedInput);
    setBase64(base64img);
    setFile(pic)
  }*/

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "wkuf5yo4");
    fetch("https://api.cloudinary.com/v1_1/five-drive/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => setFlyer(res.url));
  };
  return {
    exampleImage,
    onChangeImg,
    token,
  };
};
export default UsePerfil;
