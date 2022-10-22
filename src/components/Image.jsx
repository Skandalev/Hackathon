
import Axios from 'axios'
import { useState } from 'react';
function Image() {
  const [imageSelected,setImageSelected]=useState("")
  const [imageChanger,setImageChanger]=useState("")
  const uploadImage=()=>{
    const formData=new FormData()
    formData.append('file',imageSelected)
    formData.append('upload_preset',"xol71jb0")

    Axios.post("https://api.cloudinary.com/v1_1/dumgi49os/image/upload",formData)
    .then((response)=>setImageChanger(response.data.secure_url))
  }
  return (
    <div className="App">
         <input type="file" onChange={(event)=>setImageSelected(event.target.files[0])}></input>
         <button onClick={()=>uploadImage()}>submit</button>
         <img src={imageChanger} alt="" srcSet="" style={{width:"10vw"}} />
    </div>
  );
}

export default Image;





// import Axios from 'axios'
// import { useState } from 'react';
// function Image() {
//   const [imageSelected,setImageSelected]=useState("")
//   const [imageChanger,setImageChanger]=useState("")
//   const uploadImage=()=>{
//     const formData=new FormData()
//     formData.append('file',imageSelected)
//     formData.append('upload_preset',"xol71jb0")

//     Axios.post("https://api.cloudinary.com/v1_1/dumgi49os/image/upload",formData)
//     .then((response)=>setImageChanger(response.data.secure_url))
//   }
//   return (
//     <div className="App">
//          <input type="file" onChange={(event)=>setImageSelected(event.target.files[0])}></input>
//          <button onClick={()=>uploadImage()}>submit</button>
//          <img src={imageChanger} alt="" srcSet="" style={{width:"10vw"}} />
//     </div>
//   );
// }

// export default Image;