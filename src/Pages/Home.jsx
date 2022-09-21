import './home.css';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';
import DataBase from './DataBase';
import TemporaryDrawer from '../components/navbar';
import { Link } from "react-router-dom";
import Image from '../components/Image';
import { useState } from 'react';
function Home() {
  const [imageChanger,setImageChanger]= useState("")
  return (

    <div className="Home">
      <TemporaryDrawer/>
        <a href="./" className='mobile-logo'>
			<img src="https://www.dimona.muni.il/content/images/logo.png" alt="לוגו דימונה"/>
		</a>
        <h1>מפגעים והצעות ייעול במרחב הציבורי</h1>
        <h3> תדווחו על מפגעים, תציעו הצעות ייעול</h3>
        <h3>אנחנו נדאג לשאר</h3>
        <Link to="/Form"><Button variant="contained" > דיווח או הצעה</Button></Link>
        
       

        <h3> פניות קודמות</h3>
        <Image setImageChanger={setImageChanger} imageChanger={imageChanger}></Image>
        <DataBase imageChanger={imageChanger}></DataBase>
        
        
        <Footer></Footer>
    </div>
  );
}

export default Home;
