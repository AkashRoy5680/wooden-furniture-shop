import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
