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
  
  return (
    <div className="Home">
      
      <div className="frontBackground">
        <a href="./" className="mobile-logo">
        <img  data-aos="fade-down"
            className="img"
            src="https://www.dimona.muni.il/content/images/logo.png"
            alt="לוגו דימונה"
          />
        </a>
        <h1 data-aos="zoom-in">מפגעים והצעות ייעול במרחב הציבורי</h1>
        <br />
        <h3 data-aos="zoom-in"> דף ההתקשרות הרשמי </h3>
        <br />
          <Mount></Mount>
      
      </div>
      <SelectNew></SelectNew>
      <Details
        setarrayTodata={setarrayTodata}
        imageChanger={imageChanger}
        setImageChanger={setImageChanger}
      ></Details>
      <Button variant="contained"> דיווח או הצעה</Button>
      <h3> פניות קודמות</h3>
      <Image
        setImageChanger={setImageChanger}
        imageChanger={imageChanger}
      ></Image>
      <DataBase
        imageChanger={imageChanger}
        arrayTodata={arrayTodata}
      ></DataBase>
      <CustomizedSnackbars/>
     <MultiActionAreaCard></MultiActionAreaCard>
      <Footer></Footer>
    </div>
  );
}

export default Home;
