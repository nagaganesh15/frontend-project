import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './log.css'
import Memory from './assets/bg.jpeg'
import './Login'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const Nav = () => {
  // const[login,setlogin]=useState(1)
  // localStorage.setItem("login",0)
  const navigate = useNavigate();

  const email=localStorage.getItem("email")

  const [profileimg,setprofileimg]=useState()
  useEffect(()=>{
    const getprofileimg=async()=>{
      try{
        const res=await axios.post("http://127.0.0.1:8000/getprofileimg/",{email})
        if(res.status==200){
          setprofileimg(res.data.profileimg)
          console.log(res.data.username)
        }
      }
      catch(e){

      }
    }
    getprofileimg()
  },[])

  const handleLogout = () => {
    localStorage.setItem("login", "0");
    navigate("/Login");
  };
  return (
    
   
    <div>
        <div id="navbar">
            <Link to='/frontend-project' className='dec'>Home</Link>
            {/* <Link to='/Help' className='dec'>About</Link> */}
            <Link to='/AllGames' id="about" className='dec'>All Games</Link>
            <Link to='/AllLeaderboard' className='dec'>Leaderboard</Link>
            <Link to='/Contact' className='dec'>Contact</Link>
            {localStorage.getItem("login")=="0"?<div><Link to='/Login'><button id="login">Login</button></Link><Link to='/Registration'><button id="signup">Sign Up</button></Link>
            </div>:<div><button id="login" onClick={handleLogout}>Logout</button><Link to='/profile'><img src={'http://127.0.0.1:8000'+profileimg} style={{width:'50px',height:'50px',borderRadius:'50%',marginLeft:'50px'}}/></Link></div>}
            
            {/* <Link to='/Login'><button id="login">Login</button></Link> */}
            {/* <Link to='/Registration'><button id="signup">Sign Up</button></Link> */}
        </div>
    </div>
  )
}
export default Nav;

// 'https://th.bing.com/th/id/OIP.sdkCAHYXeg0YLtfIz6-FkgAAAA?w=350&h=350&rs=1&pid=ImgDetMain'