import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux"


const Details = (props)=>{
  const dispatch = useDispatch()
 


    const professions = [  'פינוי ערימת גזם',
    'פינוי ארימת אשפה',
    'רחוב לא נקי',
    'צואת כלבים',
    'גינה ציבורית מלוכלכת',
    'הדברה',
    'גומה ריקה על המדרכה',
    'פנס רחוב לא תקין',
    'תמרור או סימן כביש חסר',
    'כלי שיתופי  חוסם',];
    const formik = useFormik({
        
        initialValues: {
          name: '',
          email: '',
          password:'',
          profession: professions[0],
          age: '',
        },
        onSubmit: function (values) {
          alert(`You are registered! Name: ${values.name}. Email: ${values.email}. gender: ${values.profession}. 
            Age: ${values.age}`);
            props.setarrayTodata({fullName:values.name,email:values.email, adress:values.password,action: values.profession, picture:props.imageChanger})
       
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .label('Full Name')
                    .required(),
            email: Yup.string()
                    .email()
                    .required(),
            profession: Yup.string()
                        .oneOf(professions, 'The profession you chose does not exist'),
          
            password: Yup.string()
                  .min(7,"password must have more then 7 digits")      
                      

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
          {formik.touched.name && formik.errors.name && (
            <span className='text-red-400'>{formik.errors.name}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="email">אימייל</label>
          <input type="email" name="email" id="email"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email && (
            <span className='text-red-400'>{formik.errors.email}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="password">כתובת</label>
          <input type="text" name="password" id="password"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
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
          <input type="file" name="age" id="age"
          
            className={`block w-full rounded border py-1 px-2 ${formik.touched.age && formik.errors.age ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age} /> <br />
           
          {formik.touched.age && formik.errors.age && ( 
            <span className='text-red-400'><br />{formik.errors.age}</span>
          )}
        </div>
        <div className='text-center'>
          <Button className='bg-blue-500 rounded p-3 text-white' type='submit'  variant="contained"  onClick={()=>{}}>שליחה</Button>
        </div>
      </form>
    </div>
           
        </div>
    )
}
export default Details 