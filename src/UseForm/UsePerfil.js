import UseHome from "../UseForm/UseHome";
import axios from "axios";

const UsePerfil = () => {
  const token = localStorage.getItem("token");
  const { usuario } = UseHome();

  const exampleImage =
    "https://www.webespacio.com/wp-content/uploads/2010/12/perfil-facebook.jpg";

  //Codigo para foto base 64
  const onChangeImg = async (e) => {
    const headers = { "x-auth-token": token };
    const pic = e.target.files[0];

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
  return {
    exampleImage,
    onChangeImg,
    token,
  };
};
export default UsePerfil;
