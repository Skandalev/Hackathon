import './home.css';
import Button from '@mui/material/Button';
import Footer from './Footer';

function Home() {
  return (
    <div className="Home">
        <a href="./" className='mobile-logo'>
			<img src="https://www.dimona.muni.il/content/images/logo.png" alt="לוגו דימונה"/>
		</a>
        <h1>מפגעים והצעות ייעול במרחב הציבורי</h1>
        <h3> תדווחו על מפגעים, תציעו הצעות ייעול</h3>
        <h3>אנחנו נדאג לשאר</h3>
        <Button variant="contained">דיווח או הצעה</Button>

       
        
        <Footer></Footer>
    </div>
  );
}

export default Home;
