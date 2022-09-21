
import Axios from 'axios'
import { useState } from 'react';
function Image(props) {
  const [imageSelected,setImageSelected]=useState("")
  
  const uploadImage=()=>{
    const formData=new FormData()
    formData.append('file',imageSelected)
    formData.append('upload_preset',"xol71jb0")

    Axios.post("https://api.cloudinary.com/v1_1/dumgi49os/image/upload",formData)
    .then((response)=>props.setImageChanger(response.data.secure_url))
  }
  return (
    <div className="App">
         <input type="file" onChange={(event)=>setImageSelected(event.target.files[0])}></input>
         <button onClick={()=>uploadImage()}>submit</button>
         <img src={props.imageChanger} style={{width:"10vw"}} alt="" srcset="" />
    </div>
  );
}

export default Image;