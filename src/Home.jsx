import React from 'react'

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
                <div style={{display:'flex'}}>
                    <div>
                        <div>
                            <button style={{backgroundImage:"url('Memory card photo.png')"}} className='images'></button>
                        </div>
                        <div>
                            <center>
                                <h4>Memory Card Game</h4>
                                <button className="homeplay">Play</button>
                            </center>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button style={{}} className='images'></button>
                        </div>
                        <div>
                            <center>
                                <h4>IT & SoftWare</h4>
                                <button>Play</button>
                            </center>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button style={{}} className='images'></button>
                        </div>
                        <div>
                            <center>
                                <h4>Business</h4>
                                <button>Play</button>
                            </center>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button style={{}} className='images'></button>
                        </div>
                        <div>
                            <center>
                                <h4>Teaching & Academics</h4>
                                <button>Play</button>

                            </center>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button style={{}} className='images'></button>
                        </div>
                        <div>
                            <center>
                                <h4>Office Productivity</h4>
                                <button>Play</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </center>
        </div>
    </div>
  )
}
export default Home;