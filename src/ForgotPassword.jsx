import React, { useState } from 'react'
import './App.css'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [confirmpass,setconfirmpass]=useState('')
  const reset=async(e)=>{
    console.log(email)
    e.preventDefault()
    if(password==confirmpass){
      try{
        const res=await axios.post("http://127.0.0.1:8000/resetpassword/",{
          email,
          password
        })
        if(res.status==200){
          alert('password Reset Successfully')
          navigate("/Login")
        }
      }
      catch(err){
        if(err.status==400){
          alert('You did not register,please register')
          navigate('/Registration')
        }
        else{
        toast.error("Something went wrong,Try Again")
        }
      }
    }
    else{
      alert("password and confirm password did not match")
    }
  }
  return (
    <div id="forgot">
        <center>
            <div style={{border:'2px solid black',width:'500px',padding:'30px',backgroundColor:'white'}}>
                {/* <p style={{color:'Darkblue',fontSize:'17px'}}>We will send a reset link to this email. Check your spam folder if you don't see it.</p> */}
                <form onSubmit={reset}>
                  {/* <label style={{fontSize:'20px'}}>Email:</label> <input type='email' style={{width:'250px'}} required onChange={(e)=>setemail(e.target.value)}/><br></br><br></br>
                  <button id='resetpass' type='submit'>Reset Password</button> */}

                  <table>
                    <tr>
                     
                      <td colSpan={2}><center><p style={{color:'Darkblue',fontSize:'17px'}}>Give me mail what you give in register</p></center></td>
                      
                    </tr>
                    <tr style={{marginTop:'10px'}}>
                      <td style={{fontSize:'20px',float:'right',}}>Email: </td>
                      <td><input type='email' style={{width:'250px',marginLeft:'10px'}} required onChange={(e)=>setemail(e.target.value)}/></td>
                    </tr>
                    <tr>
                      <td style={{fontSize:'20px',float:'right',marginTop:'10px'}}>Password: </td>
                      <td><input type='password' style={{width:'250px',marginLeft:'10px',marginTop:'10px'}} required onChange={(e)=>setpassword(e.target.value)}/></td>
                    </tr>
                    <tr>
                      <td style={{fontSize:'20px',float:'right',marginTop:'10px'}}>Confirm Password: </td>
                      <td><input type='password' style={{width:'250px',marginLeft:'10px',marginTop:'10px',marginBottom:'10px'}} required onChange={(e)=>setconfirmpass(e.target.value)}/></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                          <center><button id='resetpass' type='submit'>Reset Password</button></center>
                      </td>
                    </tr>
                  </table>
                </form>
            </div>
        </center>
        <ToastContainer/>
        
    </div>
  )
}

export default ForgotPassword