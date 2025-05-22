import React from 'react'
import './App.css'
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
                            <img src='vite.svg' style={{width:'200px',height:'300px'}}/>
                            <br></br>
                            <button className='but'>Play Game</button>
                        </center>
                    </div>
                </div>
                <div class="carousel-item">
                    <div src="" className="d-block w-100" id="img1">
                        <center>
                            <img src='vite.svg' style={{width:'200px',height:'300px'}}/>
                            <br></br>
                            <button className='but'>Play Game</button>
                        </center>
                    </div>
                </div>
                <div class="carousel-item">
                    <div src="" className="d-block w-100" id="img1">
                        <center>
                            <img src='vite.svg' style={{width:'200px',height:'300px'}}/>
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
        <div style={{display:'flex',marginTop:'50px'}}>
            <div className="card">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <img src="vite.svg" class="img-fluid"/>
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
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
                    <a href="#!">
                    <div className="mask" style={{backgroundColor:"yellow"}}></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Play Game</a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default AllGames;