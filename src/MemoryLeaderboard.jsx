import React, { useEffect, useState } from 'react'
import Leaderboard from './Leaderboard'
import { toast } from 'react-toastify'
import axios from 'axios'
export const MemoryLeaderboard = () => {
    const [memoryuser,setmemoryuser]=useState([])
    useEffect(()=>{
        const memoryboard=async()=>{
            console.log("khkj")
            try{
                const res=await axios.get("http://127.0.0.1:8000/getMemoryscores/")
                if(res.status==200){
                    setmemoryuser(res.data.memoryuser)
                    console.log(res.data.memoryuser)
                }
            }
            catch(e){
                toast.error("Something Went Wrong")
            }
        }
        memoryboard()
    },[])

  return (
    <div id='memorybody'>
        <Leaderboard/>
        <center>
            <table id='allleader'>
                <tr>
                  <th></th>
                  <th>Profile Image</th>
                  <th>User Name</th>
                  <th>Score</th>
                </tr>
                {memoryuser.map((user, index) => (
                <tr key={index}>   
                {/* style={index%2==0?{backgroundColor:'red',borderRadius:'50%'}:{}} */}
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
  )
}
export default MemoryLeaderboard