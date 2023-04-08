import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadImage from './Components/UploadImage';
import Home from './Components/Home';
import Guide from './Components/GuildePage';
import Navbar from './Components/NavBar';
import MedicalReport from './Components/MedicalReport';

function App() {
  return (
    <>

    <Navbar/>
    <div className="App">
       <Routes>
         <Route path="/" exact element={<Guide/>} />
         <Route path="/upload-image" element={<UploadImage/>} />
         <Route path="/guide" element={<Guide/>} />
         <Route path="/medical-report" element={<MedicalReport/>} />
       </Routes>
    </div>
    </>
  );
}

export default App;
