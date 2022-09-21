
import Axios from 'axios'
import { useState } from 'react';
function Image() {
  const [imageSelected,setImageSelected]=useState("")
  const uploadImage=()=>{
    const formData=new FormData()
    formData.append('file',imageSelected)
    formData.append('upload_preset',"gizlgebs")

    Axios.post("https://api.cloudinary.com/v1_1/dptzubs72/image/upload",formData)
    .then((response)=>console.log(response.data.secure_url))
  }
  return (
    <div className="App">
         <input type="file" onChange={(event)=>setImageSelected(event.target.files[0])}></input>
         <button onClick={()=>uploadImage()}>submit</button>
    </div>
  );
}

export default Image;