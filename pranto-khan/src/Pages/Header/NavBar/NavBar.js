import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light pt-4">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand text-light" href="/">Hidden brand</a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 items">
                            {/* <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="/">Home</a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/">Contact with us</a>
                            </li>

                            <button class="login mx-3">Login</button>


                            <button class="ooutline">Singup</button>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;