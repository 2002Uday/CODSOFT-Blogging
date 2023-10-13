import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className='Header'>
        <a className='logo' href='/'>MyBlogging</a>
        <div className='log'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            
        </div>
    </nav>
  )
}

export default Header