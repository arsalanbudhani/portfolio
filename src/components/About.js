import React from 'react'
import img from "./arsalan.jpg"

export const About = () => {
  return (
    <div id="about" class="mt-lg-5 p-1" style={{backgroundColor: "#ffffff"}}>
        <h2 class="mt-lg-5 mt-sm-2 ms-lg-5" style={{color:"#1C8BD1"}}>About Me</h2>
        <div class="row mb-lg-5">
            <img class="col-lg-3 col-sm-12 ms-lg-5" src={img} alt="" loading='lazy' />
            <p class="col-lg-6 align-middle">I am a Front-End Web Developer, based in Pakistan. My professional skill is designing and developing sleek user interfaces, with the best possible user experience. I offer a very unique set of designing skills along with problem solving ability. I also possess knowledge on backend and database aspect as well, which makes me the best candidate to be the solid bridge during development.
            Please take some time to check out my work.</p>
        </div>
    </div>
  )
}
