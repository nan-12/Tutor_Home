import React, { useRef, useEffect } from 'react';
import CarouselImage1 from '../img/img1.jpg';
import CarouselImage2 from '../img/img2.jpg';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

export default function Body() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;

        const bsCarousel = new window.bootstrap.Carousel(carousel, {
            interval: 5000, // 5 seconds interval
            wrap: true
        });

        return () => {
            // Dispose the carousel when component unmounts
            bsCarousel.dispose();
        };
    }, []);

    return (
        <div className="container-fluid p-0 mb-5">
            <div ref={carouselRef} id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={CarouselImage1} className="d-block w-100" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="display-2 text-white">The Best Kindergarten School For Your Child</h1>
                            <p className="fs-5 fw-medium text-white">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a href="/" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3">Learn More</a>
                            <a href="/" className="btn btn-dark rounded-pill py-sm-3 px-sm-5">Our Classes</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={CarouselImage2} className="d-block w-100" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="display-2 text-white">Make A Brighter Future For Your Child</h1>
                            <p className="fs-5 fw-medium text-white">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a href="/" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3">Learn More</a>
                            <a href="/" className="btn btn-dark rounded-pill py-sm-3 px-sm-5">Our Classes</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
