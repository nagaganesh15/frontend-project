import React, { useEffect, useState } from 'react'
import Leaderboard from './Leaderboard'
import axios from 'axios'
export const AllLeaderboard = () => {

    const [memorygame,setmemorygame]=useState()
    const [stonegame,setstonegame]=useState()
    const [guessgame,setguessgame]=useState()
    const [watergame,setwatergame]=useState()
    const [brickgame,setbrickgame]=useState()
    useEffect(()=>{
        const gethighestscore=async()=>{
            try{
                const res=await axios.get("http://127.0.0.1:8000/getAllhighestscores/")
                if(res.status==200){
                    setmemorygame(res.data.memorygame)
                    setstonegame(res.data.stonegame)
                    setguessgame(res.data.guessgame)
                    setwatergame(res.data.watergame)
                    setbrickgame(res.data.brickgame)
                    console.log(res.data.memorygame)
                }
            }
            catch(err){
                console.log("error")
            }
        }
        gethighestscore()
    },[])
  return (
    <div style={{fontSize:'20px',backgroundImage:"url('https://wallpaperaccess.com/full/5580634.jpg')",color:'white',backgroundSize:'100% 100%',height:'100vh'}}>
        <Leaderboard/>
        <center>
            <table id='allleader'>
                <tr>
                    <th></th>
                    <th>Game Title</th>
                    <th>Profile</th>
                    <th>Username</th>
                    <th>Highest Score</th>
                </tr>
                {memorygame?
                    <tr>
                        <td>1.</td>
                        <td>Memory Card Game</td>
                        <td> <img
                        src={`http://127.0.0.1:8000${memorygame[0]}`}
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                        /></td>
                        <td>{memorygame[1]}</td>
                        <td>{memorygame[2]}</td>
                    </tr>
                :<p>loading..</p>}
                {stonegame?
                    <tr>
                        <td>2.</td>
                        <td>Stone Paper Scrissor Game</td>
                        <td> <img
                        src={`http://127.0.0.1:8000${stonegame[0]}`}
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                        /></td>
                        <td>{stonegame[1]}</td>
                        <td>{stonegame[2]}</td>
                    </tr>
                :<p>loading..</p>}
                {guessgame?
                    <tr>
                        <td>3.</td>
                        <td>Guess the Number Game</td>
                        <td> <img
                        src={`http://127.0.0.1:8000${guessgame[0]}`}
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                        /></td>
                        <td>{guessgame[1]}</td>
                        <td>{guessgame[2]}</td>
                    </tr>
                :<p>loading..</p>}
                {watergame?
                    <tr>
                        <td>4.</td>
                        <td>Catch the Water Drop</td>
                        <td> <img
                        src={`http://127.0.0.1:8000${watergame[0]}`}
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                        /></td>
                        <td>{watergame[1]}</td>
                        <td>{watergame[2]}</td>
                    </tr>
                :<p>loading..</p>}
                {brickgame?
                    <tr>
                        <td>5.</td>
                        <td>Break the Bricks</td>
                        <td> <img
                        src={`http://127.0.0.1:8000${brickgame[0]}`}
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                        /></td>
                        <td>{brickgame[1]}</td>
                        <td>{brickgame[2]}</td>
                    </tr>
                :<p>loading..</p>}
            </table>
        </center>
    </div>
  )
}
export default AllLeaderboard

