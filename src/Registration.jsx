import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import {ToastContainer,toast} from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
export const Registration=()=>{
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate=useNavigate()
    const Register=async(e)=>{
        e.preventDefault();
        console.log(username)
        // const formdata=new FormData()
        // formdata.append('username',username)
        // formdata.append('email',email)
        // formdata.append('password',password)
        // formdata.append('profileimage',profileimage)
        try{
            const res=await axios.post("http://127.0.0.1:8000/register/",{
                username,
                email,
                password,
                // headers:{
                //     'Content-Type':'multipart/form-data'
                // }
            })
            if(res.status==200){
                toast.success("Registration Sucessful");
                setTimeout(() => {
                    navigate("/Login")
                }, 1000);
            }
        }
        catch(err){
            if(err.status==300){
                alert("Username is already exists.Can you Please change the name")
            }
            else if(err.status==400){
                toast.success("Already Register,Please Login");
            }
            else{
                toast.error("Something Went Wrong,Try Again");
            }
        }
        
    }
  return(
    <div id="reg">
      <center>
            <form onSubmit={Register}>
                <table id="table">
                    <tr>
                        <td colspan="2" id="td"><h1 id="h1">Registration From</h1></td>
                    </tr>
                    <tr>
                        <td id="col">Name:</td>
                        <td id="td"><input type="text" id="name" onChange={(e)=>setusername(e.target.value)} required/></td>
                    </tr>
                    <tr>
                        <td id="col" >Email:</td>
                        <td id="td"><input type="email" id="email" onChange={(e)=>setemail(e.target.value)} required/></td>
                    </tr>
                    <tr>
                        <td id="col">Password:</td>
                        <td id="td"><input type="password" onChange={(e)=>setpassword(e.target.value)} id="pass" required/></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center" id="td"><p id="p">If Already Registered,please Login <Link to='/Login' id="link">login</Link></p></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center" id="td"><button type="submit" id="button">Register</button></td>
                    </tr>
                </table>
            </form>
            <ToastContainer/>
        </center>
    </div>
  )
}
export default Registration;