import React,{useState} from 'react'
import './app.css'

const navbar = () => {
  return (
    <div className="navbar">
      <div>
        
          <img className="navbar_logo" src="../src/assets/rnlogowhite.png" alt="logo" />
        
        
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#aboutus.jsx" className="navbar-link">ABOUT US</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">EVENTS</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">VIDEO AND SERIES</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">TEAM RN</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">OUR ALUMNI</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">GALLERY</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">SPONSERS</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">CONTACT US</a>
        </li>
      </ul>
  
      </div>
     </div> 
  )
}

export default navbar
