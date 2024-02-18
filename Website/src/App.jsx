import { BrowserRouter, Route, Routes } from "react-router-dom";
import NorthAmerica from './pages/NorthAmerica.jsx';
import Navbar from './components/Navbar.jsx';
import Africa from './pages/Africa.jsx';
import Asia from './pages/Asia.jsx';
import Europe from './pages/Europe.jsx';
import SouthAmerica from './pages/SouthAmerica.jsx';
import Oceania from './pages/Oceania.jsx';
import Home from './pages/home.jsx';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/north-america" element={<NorthAmerica />} />
          <Route path="/south-america" element={<SouthAmerica />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/africa" element={<Africa />} />
          <Route path="/asia" element={<Asia />} />
          <Route path="/oceania" element={<Oceania />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 