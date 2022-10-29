import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../images/logo.jpg"
import "./NavBar.css"

export default function Navbar () {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='NavBar'>
      
  <a className="navbar-brand" href="#"><img src={Logo} className="Logo1"  alt='Loading '/> <h1>Ebenezer Cross Church</h1></a>
  <button className="navbar-toggler" type="button" datatoggle="collapse"  datatarget="#navbarNavDropdown" ariac-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active ">
  
        <Link className="nav-link" to='/' >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
       
        <Link className="nav-link" to='/extension'>Extensions</Link>
      </li>
      <li className="nav-item">
        
        <Link className="nav-link" to='/program'>Programs</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to='/online'>Online</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Helping</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Media</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item btn btn-primary">
        <a className="nav-link" id='btn' href="#">Offerings</a>
    </li>
    </ul>
  </div>
  
</nav>
  )
}
