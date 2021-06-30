import React, { Component } from 'react';
import { Link } from 'react-scroll';
import logo from './fprep_logo.png';

import "./Navbar.css"


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() { 
        return ( 
            <nav className="NavbarItems">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="navbar-logo">
                <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-70} duration={500}>FlexPrep</Link>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-links">
                        <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-70} duration={500} onClick={this.handleClick}>
                        Home
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500} onClick={this.handleClick}>
                        About
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link activeClass="active" to="MealPlans" spy={true} smooth={true} offset={-70} duration={500} onClick={this.handleClick}>
                        Meal Plans
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link activeClass="active" to="Reviews" spy={true} smooth={true} offset={-70} duration={500} onClick={this.handleClick}>
                        Reviews
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link activeClass="active" to="ContactUs" spy={true} smooth={true} offset={-70} duration={500} onClick={this.handleClick}>
                        Contact Us
                        </Link>
                    </li>

                </ul>
            </nav>
         )
    }
}
 
export default Navbar;