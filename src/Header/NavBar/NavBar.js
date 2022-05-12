import React from 'react'
import Logo from "../../images/logo.jpg"
import "./NavBar.css"

export default function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
  <a className="navbar-brand" href="#"><img src={Logo} className="Logo1"  alt='Loading '/> <h1>Ebenezer Cross Church</h1></a>
  <button className="navbar-toggler" Type="button" dataToggle="collapse"  dataTarget="#navbarNavDropdown" ariaControls="navbarNavDropdown" ariaExpanded="false" ariaLabel="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active ">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Extensions</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Construction</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Online</a>
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
        <a className="nav-link" id='btn' href="#">Donation</a>
    </li>
    </ul>
  </div>
  
</nav>
  )
}
