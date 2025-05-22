import React from 'react'
import './App.css'
import {ToastContainer,toast} from 'react-toastify'
import { Link } from 'react-router-dom'
export const Registration=()=>{
    const Register=(e)=>{
        e.preventDefault();
        toast.success("Registration Sucessful");
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
                        <td id="td"><input type="text" id="name" required/></td>
                    </tr>
                    <tr>
                        <td id="col" >Email:</td>
                        <td id="td"><input type="email" id="email" required/></td>
                    </tr>
                    <tr>
                        <td id="col">Password:</td>
                        <td id="td"><input type="password" id="pass" required/></td>
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