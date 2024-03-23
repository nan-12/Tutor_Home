import logo from '../img/onlineTUTION (1).png'

import React from 'react'

export default function Header() {
  return (
    <header>
<nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" className="navbar-brand">
                <img src={logo} alt="logo_img" className='logo'></img>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About Us</a>
                    <a href="classes.html" className="nav-item nav-link">Classes</a>
                    <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                </div>
                <a href="" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
</header>
  )
}

