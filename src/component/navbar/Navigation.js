import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'
function Navigation() {
  return (
    <div className='bodynav'>
    <nav className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div class="nav-title">
        
      </div>
    </div>
    <div className="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <ul class="nav-list">
      <li><a href="#"><Link to='/'>Home</Link></a></li>
      <li><a href="#"><Link to='/contact'>Contact</Link></a></li>
      <li><a href="#"><Link to='/add'>Ajout</Link></a></li>
      <li><a href="#"><Link to='/login'>SignIn</Link></a></li>
    </ul>
  </nav>
  </div>
  )
}

export default Navigation
