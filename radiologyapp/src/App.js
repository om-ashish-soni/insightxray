import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadImage from './Components/UploadImage';
import Home from './Components/Home';
import Guide from './Components/GuildePage';
import Navbar from './Components/NavBar';

function App() {
  return (
    <>

    <Navbar/>
    <div className="App">
       <Routes>
         <Route path="/" exact element={<Home/>} />
         <Route path="/upload-image" element={<UploadImage/>} />
         <Route path="/guide" element={<Guide/>} />
       </Routes>
    </div>
    </>
  );
}

export default App;
