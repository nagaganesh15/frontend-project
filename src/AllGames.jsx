import React from 'react'
import './App.css'
import memory from './assets/Memorycardphoto.png'
import stone from './assets/StonePaper.png'
import guess from './assets/Guessthenumber.png'
import breakgame from './assets/breakthebricks.png'
import tic from './assets/TicTacToe.png'
import water from './assets/waterdrop.png'

export const AllGames = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div src="" className="d-block w-100" id="img1">
                        <center>
                            <img id='stone' style={{width:'300px',height:'400px',backgroundSize:'100% 100%',marginBottom:'5px',marginTop:'5px'}}/>
                            <br></br>
                            <button className='but'>Play Game</button>
                        </center>
                    </div>
                </div>
                <div class="carousel-item">
                    <div src="" className="d-block w-100" id="img1">
                        <center>
                            <img id="memory" style={{width:'300px',height:'400px',backgroundSize:'100% 100%',marginBottom:'5px',marginTop:'5px'}}/>
                            <br></br>
                            <button className='but'>Play Game</button>
                        </center>
                    </div>
                </div>
                <div class="carousel-item">
                    <div src="" className="d-block w-100" id="img1">
                        <center>
                            <img id="guess" style={{width:'300px',height:'400px',backgroundSize:'100% 100%',marginBottom:'5px',marginTop:'5px'}}/>
                            <br></br>
                            <button className='but'>Play Game</button>
                        </center>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.G3TExzQ6CRzQhnvJzJBpaAHaEv?rs=1&pid=ImgDetMain')",backgroundSize:'100% 100%',paddingTop:'1px'}}>
        <div style={{display:'flex',marginTop:'50px'}}>
            <div className="card" style={{backgroundColor:'linen'}}>
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src={memory} class="img-fluid" style={{height:'450px',width:'350px'}}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Memory Card Game</h5>
                    <p className="card-text">Test your memory and concentration! Flip the cards and match all the pairs in the fewest moves possible. The faster you finish, the higher your score. Fun for all ages and a great brain workout!</p>
                    <a href="https://nagaganesh15.github.io/Memory-Card-Game/" target='_blank' class="btn btn-primary">Play Game</a>
                </div>
            </div>
            <div className="card" style={{backgroundColor:'lightcyan',color:'black'}}>
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src={stone} class="img-fluid" style={{height:'450px'}}/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Stone Paper Scrissor</h5>
                    <p className="card-text">Put your decision-making skills to the test! Choose stone, paper, or scissors and outsmart your opponent to win the round. Quick to play, easy to learn, and fun for all ages — a timeless game of strategy and luck!</p>
                    <a href="https://nagaganesh15.github.io/Stone-Paper-Scissor/" target='_blank' class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
            <div className="card" style={{backgroundColor:'lightyellow'}}>
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src={guess} class="img-fluid" style={{height:'450px'}}/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Guess the Number</h5>
                    <p className="card-text">Challenge your brain with this number guessing game! Select a level, guess the number, and follow clever hints to find the correct answer. The quicker you guess, the higher your score. Fun, addictive, and perfect for all ages!
</p>
                    <a href="https://nagaganesh15.github.io/Guess-the-number/" target='_blank' class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
        </div>
        <div style={{display:'flex',marginTop:'50px'}}>
            <div className="card" style={{backgroundColor:'cornsilk'}}>
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src={tic} class="img-fluid" style={{height:'450px'}}/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Tic Tac Toe</h5>
                    <p className="card-text">TicTacToe is a classic two-player game where players take turns marking X or O on a 3x3 grid to get three in a row. Enter player names, play by clicking the grid, and see who wins or if it’s a draw!</p>
                    <a href="https://nagaganesh15.github.io/TicTacToe/" target='_blank' class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
            <div className="card" style={{backgroundColor:'Azure'}}>
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src={water} class="img-fluid" style={{height:'450px'}}/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Catch the Water Drop</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://nagaganesh15.github.io/Catch-the-Water-Drops/" target='_blank' class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
            <div className="card" style={{backgroundColor:'Beige'}}>
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src={breakgame} class="img-fluid" style={{height:'450px'}}/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Break the Bricks</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://nagaganesh15.github.io/Break-the-Bricks/" target='_blank' class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
        </div>
        <div style={{display:'flex',marginTop:'50px'}}>
            <div className="card" style={{backgroundColor:'AliceBlue'}}>
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="vite.svg" class="img-fluid"/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
            <div className="card">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="vite.svg" class="img-fluid"/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
            <div className="card">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="vite.svg" class="img-fluid"/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
        </div>
        <div style={{display:'flex',marginTop:'50px'}}>
            <div className="card">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="vite.svg" class="img-fluid"/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
            <div className="card">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="vite.svg" class="img-fluid"/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
            <div className="card">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="vite.svg" class="img-fluid"/>
                     
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default AllGames;