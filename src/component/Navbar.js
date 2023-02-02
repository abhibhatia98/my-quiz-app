import React from 'react'
import './Navbar.css'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
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
                        <li className="nav-item">
                            <a className="nav-link" href="/">About Us</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Conatct Us</a>
                        </li>
                    </ul>
                </div>


            </nav>

        </div>
    )
}

export default Navbar
