import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './log.css'
export const Nav = () => {
  const[login,setlogin]=useState(1)
  return (
    <div>
        <div id="navbar">
            <Link to='/Home' className='dec'>Home</Link>
            {/* <Link to='/Help' className='dec'>About</Link> */}
            <Link to='/AllGames' id="about" className='dec'>All Games</Link>
            <Link to='/' className='dec'>Leaderboard</Link>
            <Link to='/Contact' className='dec'>Contact</Link>
            {login>0?<div><Link to='/Login'><button id="login">Login</button></Link></div>:<Link to='/Login'><button id="login">Logout</button></Link>}
            {/* <Link to='/Login'><button id="login">Login</button></Link> */}
            <Link to='/Registration'><button id="signup">Sign Up</button></Link>
        </div>
    </div>
  )
}
export default Nav;