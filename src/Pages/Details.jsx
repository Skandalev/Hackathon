import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux"
import Axios from 'axios'
import { useState } from 'react';

const Details = (props)=>{
  
  const [imageSelected,setImageSelected]=useState("")
  const [imageChanger,setImageChanger]=useState("")
  // function uploadImage(){
    const formData=new FormData()
    formData.append('file',imageSelected)
    formData.append('upload_preset',"xol71jb0")

    Axios.post("https://api.cloudinary.com/v1_1/dumgi49os/image/upload",formData)
    .then((response)=>setImageChanger(response.data.secure_url))
  
  // }

    const professions = [  'פינוי ערימת גזם',
    'פינוי ערימת אשפה',
    'רחוב לא נקי',
    'צואת כלבים',
    'גינה ציבורית מלוכלכת',
    'הדברה',
    'גומה ריקה על המדרכה',
    'פנס רחוב לא תקין',
    'תמרור או סימן כביש חסר',
    'כלי שיתופי  חוסם',
  'אחר'];
    const formik = useFormik({
        
        initialValues: {
          name: '',
          email: '',
          password:'',
          profession: professions[0],
          age: '',
          picture:''
        },
        onSubmit: function (values,{resetForm}) {
          //  uploadImage()
           console.log(imageChanger);
           props.setarrayTodata({fullName:values.name,email:values.email, adress:values.password,action: values.profession, picture:imageChanger})
          alert(`You are registered! Name: ${values.name}. Email: ${values.email}. problem: ${values.profession}. 
             ${values.age}`);
          // resetForm({values: ""})
           
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .required('שם מלא חובה'),
            email: Yup.string()
                    .email('אימייל חובה')
                    .required("אימייל"),
            profession: Yup.string()
                        .oneOf(professions, 'The profession you chose does not exist'),
          
            password: Yup.string()
                  .required('כתובת חובה')     
                      

          })
      })
    return(
        <div className='register'>
            <br /><br /><br />
            
                 <div className="bg-blue-300 min-w-screen min-h-screen overflow-x-hidden">
      <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-brown rounded shadow-lg mt-7 p-3">
      <h1 className='text-3xl mb-3 text-center'>רישום</h1>
        <div className='mb-4'>
          <label for="name">שם מלא</label>
          <input type="text" name="name" id="name" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
           
        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          <br />
          {formik.touched.name && formik.errors.name && (
            <span className='text-red-400'>{formik.errors.name}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="email">אימייל</label>
          <input type="email" name="email" id="email"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          <br />
          {formik.touched.email && formik.errors.email && (
            <span className='text-red-400'>{formik.errors.email}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="password">כתובת</label>
          <input type="text" name="password" id="password"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-gray-300'}`}
           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
          <br />
          {formik.touched.password && formik.errors.password && (
            <span className='text-red-400'>{formik.errors.password}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="profession">סיבה</label>
          <select name="profession" id="profession"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.profession && formik.errors.profession ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.profession} >
            {professions.map((profession, index) => (
              <option value={profession} key={index}>{profession}</option>
            ))}
          </select>
          {formik.touched.profession && formik.errors.profession && (
            <span className='text-red-400'>{formik.errors.profession}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="age">תמונה</label>
          <input type="file" 
          //  ${formik.touched.age && formik.errors.age ? 'border-red-400' : 'border-gray-300'}
            className={`block w-full rounded border py-1 px-2`}
            onChange={(event)=>setImageSelected(event.target.files[0])}  /> <br />
     {/* onBlur={formik.handleBlur} value={formik.values.age} */}
         {/* <input type="file" onChange={formik.handleChange}></input> */}
         {/* <button onClick={()=>uploadImage()}>submit</button> */}

         <img src={imageChanger} alt="" srcset="" style={{width:"10vw"}} />
           
          {formik.touched.age && formik.errors.age && ( 
            <span className='text-red-400'><br />{formik.errors.age}</span>
          )}
        </div>
        <div className='text-center'>
          <Button className='bg-blue-500 rounded p-3 text-white' type='submit'  variant="contained"  onClick={()=>{props.setSetIsOpen(true)}}>שליחה</Button>
        </div>
       
      </form>
    </div>

           
        </div>
    )
}
export default Details 