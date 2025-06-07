import React, { useState } from 'react'
import Registration from './Registration';
import Login from './Login';
import Nav from './Navbar';
import AllGames from './AllGames';
import Home from './Home'
import './WhyChooseUs'
import Contact from './Contact';
import ForgotPassword from './ForgotPassword';
import {Routes,Route} from 'react-router-dom'
import WhyChooseUs from './WhyChooseUs';
import Leaderboard from './Leaderboard';
import AllLeaderboard from './AllLeaderboard';
import Profile from './Profile';
import MemoryLeaderboard from './MemoryLeaderboard';
import StoneLeaderboard from './StoneLeaderboard';
import GuessLeaderboard from './GuessLeaderboard';
import WaterLeaderboard from './WaterLeaderboard';
import BrickLeaderboard from './BrickLeaderboard';
export const App = () => {
  return (
    <div>
      <Nav/>
      {/* <ProfileImageUploader/> */}
      {/* <Profile/> */}
      {/* <ForgotPassword/> */}
      {/* <Home/> */}
      {/* <Leaderboard/> */}
      <Routes>
        <Route path='/Games' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/AllGames' element={<AllGames/>}></Route>
        <Route path='Leaderboard' element={<Leaderboard/>}></Route>
        <Route path='/AllLeaderboard' element={<AllLeaderboard/>}></Route>
        <Route path='/MemoryLeaderboard' element={<MemoryLeaderboard/>}></Route>
        <Route path='/StoneLeaderboard' element={<StoneLeaderboard/>}></Route>
        <Route path='/GuessLeaderboard' element={<GuessLeaderboard/>}></Route>
        <Route path='/WaterLeaderboard' element={<WaterLeaderboard/>}></Route>
        <Route path='/BrickLeaderboard' element={<BrickLeaderboard/>}></Route>
      </Routes>
    </div>
  )
}
export default App;