import './home.css';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';
import DataBase from './DataBase';
import TemporaryDrawer from '../components/navbar';
import { Link } from "react-router-dom";
import Image from '../components/Image';
import { useState } from 'react';
import SelectNew from '../components/SelectNew';
import Details from './Details';
function Home() {
  const [imageChanger,setImageChanger]= useState("")
  const [arrayTodata,setarrayTodata]= useState({fullName:"",email: "", adress:"",action: "", picture:"" })
  return (

    <div className="Home">
      <TemporaryDrawer/>
        <a href="./" className='mobile-logo'>
			<img src="https://www.dimona.muni.il/content/images/logo.png" alt="לוגו דימונה"/>
		</a>
        <h1>מפגעים והצעות ייעול במרחב הציבורי</h1>
        <h3> תדווחו על מפגעים, תציעו הצעות ייעול</h3>
        <h3>אנחנו נדאג לשאר</h3>
        <SelectNew></SelectNew>
        <Details setarrayTodata={setarrayTodata} imageChanger={imageChanger} setImageChanger={setImageChanger}></Details>
        <Button variant="contained" > דיווח או הצעה</Button>
        <h3> פניות קודמות</h3>
        <Image setImageChanger={setImageChanger} imageChanger={imageChanger}></Image>
        <DataBase imageChanger={imageChanger} arrayTodata={arrayTodata}></DataBase>
       
        <Footer></Footer>
    </div>
  );
}

export default Home;
