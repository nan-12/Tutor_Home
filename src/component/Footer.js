import React from 'react';


export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 text-start">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2">23 Street, New York, USA</p>
              <p className="mb-2">+012 345 67890</p>
              <p className="mb-2">info@example.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""></a>
                <a className="btn btn-outline-light btn-social" href=""></a>
                <a className="btn btn-outline-light btn-social" href=""></a>
                <a className="btn btn-outline-light btn-social" href=""></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <a className="btn btn-link text-white-50 text-center" href="">About Us</a>
              <a className="btn btn-link text-white-50 text-center" href="">Contact Us</a>
              <a className="btn btn-link text-white-50 text-center" href="">Our Services</a>
              <a className="btn btn-link text-white-50 text-center" href="">Privacy Policy</a>
              <a className="btn btn-link text-white-50 text-center" href="">Terms &amp; Condition</a>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Newsletter</h3>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
