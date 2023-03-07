import React from 'react'
import img from "./imgPlaceholder.png"

export const Showcase = () => {
  return (
    <div id="showcase" class="mt-lg-5 p-1" style={{backgroundColor: '#fff'}}>
        <h2 class="mt-lg-5 ms-lg-5" style={{color: '#1C8BD1'}}>Showcase</h2>
        <div class="row mb-lg-5 ms-lg-5 pe-lg-5">
            <img class="col-4 ps-lg-0" src={img} alt="" loading='lazy' />
            <img class="col-4" src={img} alt="" loading='lazy' />
            <img class="col-4" src={img} alt="" loading='lazy' />
            <img class="col-4 ps-lg-0" src={img} alt="" loading='lazy' />
            <img class="col-4" src={img} alt="" loading='lazy' />
            <img class="col-4" src={img} alt="" loading='lazy' />
        </div>
    </div>
  )
}
