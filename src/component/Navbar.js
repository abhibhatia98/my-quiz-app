import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <div className='header'>
                <div className='menu-bar'>
                    <nav className="navbar fixed-top navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand ms-0" href="/">Site Name</a>
                            <ul className="navbar-nav d-flex flex-row me-1">
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="/freeQuiz"><i className="fas fa-envelope mx-1"></i> Free Quiz</a>
                                    {/* <Link className="nav-link" aria-current="page" href="/">Home</Link> */}
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="/blogs"><i className="fas fa-envelope mx-1"></i> Blogs</a>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link " href="/about"><i className="fas fa-cog mx-1"></i> About us</a>
                                </li>
                                {/* <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="/"><i className="fas fa-cog mx-1"></i>Contact Us</a>
                                </li> */}
                                <button className="btn  my-2 my-sm-0 mx-3 btn_login" type="login">Log In</button>
                                <button className="btn  my-2 my-sm-0 btn_signup" type="signup">Sign Up</button>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
