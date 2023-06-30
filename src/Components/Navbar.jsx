import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg" style={{borderRadius:"2rem"}} >
                <div className="row" style={{ backgroundColor: "#fff" }} >
                    <div className="col-11 mx-auto"  >
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid" style={{border:'1px solid grey' ,borderRadius:'2rem',boxShadow:"0 0px 10px 0px grey" ,paddingLeft:'5rem',paddingRight:'2rem'}}>
                                <Link className="navbar-brand" to="/" style={{ color: "#eb05b9", fontWeight: "bold", fontSize: "1.5rem", backgroundColor: "white" }} >
                                    <img style={{ height: '3rem', backgroundColor: "white" }} src="topic.png" alt="/" /> EASY TO LEARN</Link>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "44.2rem" }} >
                                    <ul className="navbar-nav navbar-text me-auto mb-2 mb-lg-0" >
                                        <li className="nav-item" >
                                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item" >
                                            <Link className="nav-link" to="/services">Services</Link>
                                        </li>
                                        <li className="nav-item" >
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>
                                        <li className="nav-item" >
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;