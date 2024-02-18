import React from 'react'
import img from "./arsalan.jpg"
import img2 from "./imagePlaceholder.jpg"
import pdf from "./Muhammad_Arsalan_Resume.pdf"

export const Home = () => {
  return (
    <div id="home" style={{backgroundColor: '#ffffff'}}>
            <div class="home row">
                <div class="col-9 my-5 px-5 desktop-text">
                    <h5 style={{color:'#1C8BD1'}}>I am</h5>
                    <h4>Muhammad Arsalan Budhani</h4>
                    <h5>Front End Developer</h5>
                </div>
                <div class="home-image col-lg-3 col-sm-12" >
                {/* <span class="nav-icons sticky-top" style={{zIndex: '1', position: 'sticky'}}>
                    <a href="#" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="p-1"><i class="bi bi-twitter"></i></a>
                    <a href="#" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="ms-2 p-1"><i class="bi bi-facebook"></i></a>
                    <a href="#" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="ms-2 p-1"><i class="bi bi-linkedin"></i></a>
                    <a href="#" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="ms-2 p-1"><i class="bi bi-discord"></i></a>
                    <a href="#" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="ms-2 p-1"><i class="bi bi-github"></i></a>
                </span> */}
                    <img class="col-12 w-100" src={img2} alt="" loading='lazy'></img>
                    {/* <div class="hamburger-menu" style={{position: 'absolute', top: '16px', left: '16px'}}>
                      <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i style={{color: '#222222', fontSize: '28px'}} class="bi bi-list"></i>
                      </a>
                    </div>
                    <div class="collapse" id="collapseExample">
                        ABC
                    </div> */}
                    <div class="mobile-text text-start">
                      <h6 style={{color:'#1C8BD1'}}>I am</h6>
                      <h5 style={{color: '#fff'}}>Muhammad Arsalan Budhani</h5>
                      <h6 style={{color: '#fff'}}>Front End Developer</h6>
                    </div>
                    <div class="col-12 mobile-buttons">
                        <a target="_blank" rel='noreferrer' href={pdf} class="col-6 px-4 py-2" style={{backgroundColor:'rgba(255, 255, 255, 0.6)', color: '#222222', border: '2px solid #222222', borderRadius: '20px', textDecoration: 'none', fontWeight: '500', margin: '0px 10px'}}><i class="bi bi-download"></i> Resume</a>
                        <a href="#contact" class="col-6 px-3 py-2" style={{backgroundColor:'rgba(255, 255, 255, 0.6)', color: '#1C8BD1', border: '2px solid #1C8BD1', borderRadius: '20px', textDecoration: 'none', fontWeight: '500', margin: '0px 10px'}}><i class="bi bi-telephone"></i> Contact Me</a>
                    </div>
                </div>
            </div>
            <div class="btn-group col-12 desktop-buttons">
                <a target="_blank" rel='noreferrer' href={pdf} class="col-6 p-2 btn" style={{backgroundColor:'#222222', color: '#ffffff'}}><i class="bi bi-download"></i> Resume</a>
                <a href="#contact" class="col-6 p-2 btn" style={{backgroundColor: '#1C8BD1', color: '#ffffff'}}><i class="bi bi-telephone"></i> Contact Me</a>
            </div>
    </div>
  )
}
