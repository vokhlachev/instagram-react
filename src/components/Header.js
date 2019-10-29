import React, {Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <Link to='/..' className="logo">
                        <img src={logo} alt="logo"></img>
                    </Li>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to='/' className="menu__links">Feed</L>
                            </li>
                            <li>
                                <Link to='/profile/' className="menu__links">Profile</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}