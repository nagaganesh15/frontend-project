import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import './Log.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const login =async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post("http://127.0.0.1:8000/login/",{
                email,
                password
            })
            if(res.status==200){
                // console.log(res.data.profilename)
                localStorage.setItem("email",res.data.email)
                toast.success("Login Successfull")
                localStorage.setItem("login","1");
                navigate("/frontend-project")
            }
        }
        catch(err){
            if(err.status==404){
                toast("First Register")
            }
            else if(err.status==400){
                toast.error("Invalid Password")
            }
            else{
                toast("Something Went Wrong.Try Again")
            }
        }

    }
    return (
        <div id="log">
            <center>
                <form onSubmit={login}>
                    <table id="table">
                        <tr>
                            <td colspan="2" align="center" id="td"><h1 id="h1">Login From</h1></td>
                        </tr>
                        <tr>
                            <td id="col">Email:</td>
                            <td id="td"><input type="email" id="email" onChange={(e)=>setemail(e.target.value)} required/></td>
                        </tr>
                        <tr>
                            <td id="col">Password:</td>
                            <td id="td"><input type="password" id="pass" onChange={(e)=>setpassword(e.target.value)} required/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{float:'right',marginBottom:'-5px'}}><Link to='/forgotpassword'>forgot password?</Link></td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center" id="td"><p id="p">If You Didn't Register, please <Link to='/Registration' id="link">Register</Link></p></td>
                        </tr>
                        
                        <tr>
                            <td colspan="2" align="center" id="td"><button type="submit" id="button">Login</button></td>
                        </tr>
                    </table>
                    <br></br>
                </form>
            </center>
            <ToastContainer/>
        </div>
    )
}
export default Login;