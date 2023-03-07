import React from 'react'
import img from "./arsalan.jpg"

export const Sidebar = () => {

  return (
      <div class="sidebar sticky-top" style={{height: '100vh', backgroundColor: '#222222', color:'#ffffff'}}>
          <img src={img} alt="profile" class="col-12"/>
          <ul class="mt-3" >
              <li><a href="#home" class="navigation">Home <i class="bi bi-house-door float-end me-3"></i></a><hr /></li>
              <li><a href="#about" class="navigation">About <i class="bi bi-person-vcard float-end me-3"></i></a><hr /></li>
              <li><a href="#skills" class="navigation">Skills <i class="bi bi-lightning float-end me-3"></i></a><hr /></li>
              <li><a href="#experience" class="navigation">Experience <i class="bi bi-stars float-end me-3"></i></a><hr /></li>
              <li><a href="#education" class="navigation">Education <i class="bi bi-mortarboard float-end me-3"></i></a><hr /></li>
              <li><a href="#showcase" class="navigation">Showcase <i class="bi bi-display float-end me-3"></i></a><hr /></li>
              <li><a href="#contact" class="navigation">Contact <i class="bi bi-envelope float-end me-3"></i></a></li>
          </ul>
      </div>
  )
}
