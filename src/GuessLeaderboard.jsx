import React, { useEffect, useState } from 'react'
import Leaderboard from './Leaderboard'
import { toast } from 'react-toastify'
import axios from 'axios'
export const GuessLeaderboard = () => {
    const [guessuser,setguessuser]=useState([])
    useEffect(()=>{
        const guessboard=async()=>{
            console.log("khkj")
            try{
                const res=await axios.get("http://127.0.0.1:8000/getGuessscores/")
                if(res.status==200){
                    setguessuser(res.data.guessuser)
                    console.log(res.data.guessuser)
                }
            }
            catch(e){
                toast.error("Something Went Wrong")
            }
        }
        guessboard()
    },[])

  return (
    <div id='guessbody'>
      <div id='guesscontent' style={{fontSize:'20px'}}>
        <Leaderboard/>
        <center>
            <table id='allleader'>
                <tr>
                  <th></th>
                  <th>Profile Image</th>
                  <th>User Name</th>
                  <th>Score</th>
                </tr>
                {guessuser.map((user, index) => (
                <tr key={index}>
                  <td>{index+1}.</td>
                  <td>
                    {user.profileimage ? (
                      <img src={'http://127.0.0.1:8000'+user.profileimage} alt="Profile" width="40" height="40" style={{borderRadius:'50%'}} />
                    ) : (
                      'No Image'
                    )}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.score}</td>
                </tr>
              ))}
            </table>
        </center>
      </div>
    </div>
  )
}
export default GuessLeaderboard