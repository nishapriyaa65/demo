import React from 'react'
import './Navbar.css'
//import image from "./mountains.png"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
        
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/work"><li>Work</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/todolist"><li>Todolist</li></Link>
            </ul>
        
    </div>
    </div>
  )
}

export default Navbar