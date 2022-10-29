import './App.css';
import Navbar from "./Header/NavBar/NavBar"
import Body from './Body/Body';
import Footer from './Footer/Footer';
import ChurchExtensions from './Body/pages/pages/ChurchExtensions'
import { Programs } from './Body/pages/pages/Programs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Online from './Body/pages/pages/Online'




function App() {
  return (
    <div className="App">
      <Router>
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<Body/>} />
      <Route path='/extension' element={<ChurchExtensions/>}/>
      <Route path='/program' element={<Programs/>}/>
      <Route path='/online' element={<Online/>}/>
       

      </Routes>
      
      <Footer/>

      </Router>

      
   
      
    </div>
  );
}

export default App;
