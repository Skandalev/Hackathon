import TemporaryDrawer from './components/navbar';
import './App.css';
import Home from './Pages/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Route, Routes, useRoutes,BrowserRouter } from 'react-router-dom';
import Form from './ReportComponents/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Form/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
