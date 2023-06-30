import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return (
        <>
            <span className='skew-bg' ></span>
            <section id='header' className="home" data-aos="zoom-in">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2">
                                <div className="wrapper">
                                    <div className="static-txt"><h1><strong>Learn with</strong></h1></div>
                                    <p className="dynamic-txts"><span>ANJALI</span>  </p>
                                </div>
                                <h1>Grow your knowledge with</h1><h1><strong style={{ color: "rgba(73, 75, 75, 0.67)" }}>Easy To Learn</strong></h1>
                                <h5 className="my-3">We have developed several innovative solutions.</h5>
                                <div className="mt-3">
                                    <Link to='/services' className="btn btn-secondary watch">Get Started</Link>
                                    <Link to='/services' className="btn btn-secondary getstarted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                    </svg>Watch the videos</Link>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img className="book" style={{ height: '450px' }} src='girl.avif' alt=" " />
                        </div>
                    </div>
                </div>
            </section>


        
                <div className="card hcard" data-aos="fade-up" >
                    <div className="row g-0">
                        <div className="col-md-4" >
                            <img src="a4.jpg" style={{ height: '30rem' }} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body hcard2"  >
                                <h1 className="card-title"><strong>The world's largest and best youtube channel</strong></h1>
                                <p className="card-text">Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone.</p>
                                <Link to='/services' className="btn btn-secondary getstarted">Browse Videos</Link>
                            </div>
                        </div>
                    </div>
                </div>


            <div data-aos="fade-right">
                <div className="my-5">
                    <h2 className="text-center services"><strong>Explore Top Vedios</strong> </h2>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row" style={{ marginLeft: '2rem' }} >
                        <div className="col-20 mx-auto">

                            <svg className="left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                            </svg>
                            <iframe style={{ width: "22rem", height: "15rem", padding: '1rem' }} src="https://www.youtube.com/embed/vu2wUZw3yLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe style={{ width: "22rem", height: "15rem", padding: '1rem' }} src="https://www.youtube.com/embed/py2I0oEHqMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe style={{ width: "22rem", height: "15rem", padding: '1rem' }} src="https://www.youtube.com/embed/-YrqyOCzHyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            <iframe style={{ width: "22rem", height: "15rem", padding: '1rem' }} src="https://www.youtube.com/embed/r20uVOASfzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            <svg className="right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

        

        </>
    )
}

export default Home;