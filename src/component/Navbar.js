import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg">
                <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                <a className="navbar-brand mx-2" href="/">Scholarshipwala</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Practice Quiz</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blogs</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/">About Us</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Conatct Us</a>
                        </li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-person" viewBox="10 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
                    </ul>

                </div>
            </nav> */}

            <div className='header'>
                <div className='menu-bar'>
                    <nav className="navbar navbar-expand-lg">
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
