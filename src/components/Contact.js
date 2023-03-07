import React from 'react'

export const Contact = () => {
  return (
    <div id="contact" class="mt-lg-5 p-1" style={{backgroundColor: '#fff'}}>
        <h2 class="mt-lg-5 ms-lg-5" style={{color: '#1C8BD1'}}>Contact</h2>
        <div class="row">
            <div class="col-lg-5 col-sm-12 ms-lg-5">
                <h6><i style={{color:'#1C8BD1'}}class="bi bi-person-circle"></i> Muhammad Arsalan Budhani</h6>
                <h6><i style={{color:'#1C8BD1'}}class="bi bi-tag"></i> Junior Front End Developer</h6>
                <h6><i style={{color:'#1C8BD1'}}class="bi bi-envelope-at"></i> arsalanbudhani43@gmail.com</h6>
                <h6><i style={{color:'#1C8BD1'}}class="bi bi-phone"></i> +92-313-3124925</h6>
                <h6><i style={{color:'#1C8BD1'}}class="bi bi-whatsapp"></i> +92-300-4327985</h6>
                <h6><i style={{color:'#1C8BD1'}}class="bi bi-geo-alt"></i> Hyderabad, Sindh, Pakistan</h6>
                <span class="mt-lg-3">
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/arsalan.budhani43" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="p-1"><i class="bi bi-twitter"></i></a>
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/arsalan.budhani43" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="ms-2 p-1"><i class="bi bi-facebook"></i></a>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/arsalan-budhani-63574b1a0" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="ms-2 p-1"><i class="bi bi-linkedin"></i></a>
                    <a rel="noreferrer" target="_blank" href="https://www.discordapp.com/users/218180910145732609" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="ms-2 p-1"><i class="bi bi-discord"></i></a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/arsalanbudhani" style={{backgroundColor:'#1C8BD1', color: '#fff'}} class="ms-2 p-1"><i class="bi bi-github"></i></a>
                </span>
            </div>
            <div class="col-lg-6 col-sm-12 mb-lg-5">
                <form>
                    <span class="form-floating">
                        <input type="text" id="inpName" class="form-control mb-2" placeholder='Enter Your Name'/>
                        <label style={{color: '#6c757d'}} for="inpName">Full Name:</label>
                    </span>
                    <span class="form-floating">
                        <input type="email" id="inpEmail" class="form-control mb-2" placeholder='Enter Your Email' />
                        <label style={{color: '#6c757d'}} for="inpEmail">Email Address:</label>
                    </span>
                    <span class="form-floating">
                        <input type="text" id="inpSubject" class="form-control mb-2" placeholder='Subject'/>
                        <label style={{color: '#6c757d'}} for="inpSubject">Subject:</label>
                    </span>
                    <textarea id="inpMessage" class="form-control mb-2" rows="3" placeholder='Enter Your Message'></textarea>
                    <button id="btnSend" type="button" class="btn text-light" style={{backgroundColor: '#1C8BD1'}}>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
