import React from 'react'
import { Link } from 'react-router-dom'
export const Leaderboard = () => {
  return ( 
    <div>
      <div id='leaderboardnavbar'>
        <Link to='/AllLeaderboard' className='leaderboardgames'>ALL</Link>
        <Link to='/MemoryLeaderboard' className='leaderboardgames'>Memory Card Game</Link>
        <Link to='/StoneLeaderboard' className='leaderboardgames'>Stone Paper Scrissor</Link>
        <Link to='/GuessLeaderboard' className='leaderboardgames'>Guess the Number</Link>
        <Link to='/WaterLeaderboard' className='leaderboardgames'>Catch the Water Drop</Link>
        <Link to='/BrickLeaderboard' className='leaderboardgames'>Break the Bricks</Link>
      </div>
    </div>
  )
}
export default Leaderboard