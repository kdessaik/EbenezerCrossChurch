import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpeg";
import "./NavBar.css";

export default function Navbar() {
  const NavPhone = () => {
    
    
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="NavBar">
      <a className="navbar-brand" href="#">
        <img src={Logo} className="Logo1" alt="Loading " />{" "}
        <h1>
          {" "}
          <span></span> Cross <span>Church</span>{" "}
        </h1>
      </a>
      
      <button
        className="navbar-toggler"
        type="button"
        datatoggle="collapse"
        datatarget="#navbarNavDropdown"
        ariac-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={NavPhone}
      >
        
        
        
        <div class="">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  
  <span className="navbar-toggler-icon" id="navCollapse1">
  
          
  <ul class="dropdown-menu">
  

          <li className="nav-item active ">
            <Link className="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
        
          <li className="nav-item">
         
            <Link className="nav-link" to="/extension">
              
              Extensions
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/program">
              Programs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/online">
              Online
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Helping
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="fb.com">
              Media
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item btn btn-primary" >
            <a className="nav-link" id="btn" href="#">
              Offerings
            </a>
          </li>
        
  </ul>
          </span>
  </button>
  
</div>
          

        

      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active ">
            <Link className="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/extension">
              Extensions
              
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/program">
              Programs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/online">
              Online
              
            </Link>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              Helping
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Media
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item btn btn-primary" id="btn-primary">
            <a className="nav-link" id="btn" href="#" >
              Offerings
            </a>
            
          </li>
        </ul>
      </div>

      
    
    </nav>
    
  );


}
