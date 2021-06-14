import { useState } from 'react'
import axios from 'axios'
//import cloudinary from 'cloudinary'

const Prueba = () => {
  const [ file, setFile ] = useState(null)
  const [ uploadImg, setUploadImg] = useState('')

  const handlePic = (e) => {
    const pic = e.target.files[0];
    setFile(pic)
  }
  const handleUpload = () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'wkuf5yo4')
    fetch('https://api.cloudinary.com/v1_1/five-drive/upload', {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(res => setUploadImg(res.url))
  }
  return (
    <div className="w-100">
      <h1 className="text-center">Cloudinary Upload</h1>
      <div className="w-100 d-flex justify-content-center">
        <input type="file" onChange={handlePic}/>
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
      </div>
      {uploadImg !== null && (<div>
        <img src={uploadImg} alt="" />
      </div>)}
    </div>
  );
};
export default Prueba;
