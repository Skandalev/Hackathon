import "./home.css";
import Button from "@mui/material/Button";
import Footer from "../components/Footer";
import DataBase from "./DataBase";
import TemporaryDrawer from "../components/navbar";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import { useState , useEffect } from "react";
import SelectNew from "../components/SelectNew";
import Details from "./Details";
import Aos from "aos";
import "aos/dist/aos.css";
import MultiActionAreaCard from "../components/Publication";
import CustomizedSnackbars from "../components/successButton";
import Mount from "../components/logo";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [imageChanger, setImageChanger] = useState("");
  const [arrayTodata, setarrayTodata] = useState({
    fullName: "",
    email: "",
    adress: "",
    action: "",
   picture: "",
  });
  
  const [isOpen,setSetIsOpen]= useState(false)
  const [isOpenS,setSetIsOpenS]= useState(false)
  const [imageSelected,setImageSelected]=useState("")
  return (
    <div className="Home">
      <TemporaryDrawer/>
        <a href="./" className='mobile-logo'>
			<img src="https://www.dimona.muni.il/content/images/logo.png" alt="לוגו דימונה"/>
		</a>
        <h1>מפגעים והצעות ייעול במרחב הציבורי</h1>
        <h3> תדווחו על מפגעים, תציעו הצעות ייעול</h3>
        <h3>אנחנו נדאג לשאר</h3>
        <SelectNew setSetIsOpenS={setSetIsOpenS}></SelectNew>
        {isOpenS&&
        <Details setSetIsOpen={setSetIsOpen} setarrayTodata={setarrayTodata} imageChanger={imageChanger} setImageChanger={setImageChanger}></Details>
         }
        {/* <Image imageSelected={imageSelected} setImageSelected={setImageSelected}  setImageChanger={setImageChanger} imageChanger={imageChanger}></Image> */}
        {isOpen&&
        <DataBase imageChanger={imageChanger} arrayTodata={arrayTodata}></DataBase>
        }
        <Footer></Footer>
    </div>
  );
}

export default Home;
