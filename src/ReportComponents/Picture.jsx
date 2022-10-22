

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import Axios from 'axios'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { updateReport, updateRequest} from "../ReportSlicer"
import {selectReport} from '../ReportSlicer'
function Picture() {
  const [imageSelected,setImageSelected]=useState("")
  const [imageSave,setImageSave]=useState("")
  const dispatch = useDispatch()
  const Data = useSelector(selectReport)
 
  console.log(Data);
  const uploadImage=()=>{
   
    
    //  console.log(Data);
    const formData=new FormData()
    
    formData.append('file',imageSelected)
    formData.append('upload_preset',"xol71jb0")

    Axios.post("https://api.cloudinary.com/v1_1/dumgi49os/image/upload",formData)
    .then((response)=>setImageSave(response.data.secure_url))
    dispatch(updateReport.payload.phone({imageSave}))
    console.log(Data);
  }
  return (
    <div className="App">
         <input type="file" onChange={(event)=>setImageSelected(event.target.files[0])}></input>
         <button onClick={()=>uploadImage()}>submit</button>
         <AddAPhotoIcon sx={{ fontSize: 200}} color="primary"> </AddAPhotoIcon>
         <img src={imageSave} style={{width:"10vw"}} alt="" srcSet="" />
    </div>
  );
}

export default Picture;




