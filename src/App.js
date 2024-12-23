// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import {Route , Routes } from "react-router-dom"
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';

function App() {
  
  return (

     <div className='App'>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>

      </Routes>

     </div>
  
  );
}

export default App;
