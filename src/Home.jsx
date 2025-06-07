import React from 'react'
import './App.css'
import './WhyChooseUs'
import WhyChooseUs from './WhyChooseUs'

export const Home = () => {
  return (
    <div>
        <div id="Home">
            <center>
                <h1 id="tit">Play My Games</h1>
                <p style={{fontSize:'18px',marginBottom:'20px'}}>Welcome to my game site! Check out and Play<br></br>some of the games I've created</p>
                <button id="playgames">Play Games</button>
            </center>
        </div>
        <div>
            <center>
                <h1>Feactured Games</h1>
                <div style={{display:'flex',marginBottom:'100px'}}>
                    <div className='feacturedgames'>
                        <div>
                            <button id='memory' className='images'></button>    
                        </div>
                        <div>
                            <center>
                                <h4>Memory Card Game</h4>
                                <button className="homeplay">Play</button>
                            </center>
                        </div>
                    </div>
                    <div className='feacturedgames'>
                        <div>
                            <button id='stone' className='images'></button>
                        </div>
                        <div>
                            <center>
                                <h4>Stone Paper Scrissor</h4>
                                <button className='homeplay'>Play</button>
                            </center>
                        </div>
                    </div>
                    <div className='feacturedgames'>
                        <div>
                            <button id='guess' className='images'></button>
                        </div>
                        <div>
                            <center>
                                <h4>Guess the Number</h4>
                                <button className='homeplay'>Play</button>
                            </center>
                        </div>
                    </div>
                </div>
            </center>
        </div>
        <WhyChooseUs/>
    </div>
  )
}
export default Home;