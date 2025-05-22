import React, { useState } from 'react'
import Registration from './Registration';
import Login from './login';
import Nav from './Navbar';
import AllGames from './AllGames';
import Home from './Home'
import Contact from './Contact';

import {Routes,Route} from 'react-router-dom'
export const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/AllGames' element={<AllGames/>}></Route>
      </Routes>
    </div>
  )
}
export default App;