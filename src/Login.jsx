import React from 'react'
import {Link} from 'react-router-dom'
import './Log.css'
export const Login = () => {
  return (
    <div id="log">
        <center>
            <form>
                <table id="table">
                    <tr>
                        <td colspan="2" align="center" id="td"><h1 id="h1">Login From</h1></td>
                    </tr>
                    <tr>
                        <td id="col">Email:</td>
                        <td id="td"><input type="email" id="email" required/></td>
                    </tr>
                    <tr>
                        <td id="col">Password:</td>
                        <td id="td"><input type="password" id="pass" required/></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center" id="td"><p id="p">If You Didn't Register,please Register <Link to='/Registration' id="link">Register</Link></p></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center" id="td"><button type="submit" id="button">Login</button></td>
                    </tr>
                </table>
                <br></br>
            </form>
        </center>
    </div>
  )
}
export default Login;