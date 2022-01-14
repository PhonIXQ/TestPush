import React from 'react';

import logo from '../../assets/img/logo192.png';
import './aside.css';

const Aside = () => {
    return (
        <div className="aside" id="mh_aside">
            <div className="brand" id="mh_aside">
                <a href="/" className="brand-logo">
                    <img alt="logo" src={logo}></img>
                </a>
                <span class="material-icons-outlined">search</span>
            </div>
            <div className="aside-menu-wrapper" id="mh_aside_menu_wrapper">
                <div className="aside-menu" id="mh_aside_menu">
                    <ul clasName="menu-nav">
                        <li className="menu-item">
                            <span className="menu-icon">
                                <span class="material-icons-outlined">grid_view</span>
                            </span>
                            <span className="menu-text">User Mgnt.</span>
                        </li>
                        {/* <li className="menu-item">
                            <span className="menu-icon">

                            </span>
                            <span className="menu-text">Patient Mgnt.</span>
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon">

                            </span>
                            <span className="menu-text">User Partner Mgnt.</span>
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon">

                            </span>
                            <span className="menu-text">Hospital Mgnt.</span>
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon">

                            </span>
                            <span className="menu-text">Article Mgnt.</span>
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon">

                            </span>
                            <span className="menu-text">Post Mgnt.</span>
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon">

                            </span>
                            <span className="menu-text">Reward Mgnt.</span>
                        </li>
                        <li className="menu-item">
                            <span className="menu-icon">

                            </span>
                            <span className="menu-text">Shop Mgnt.</span>
                        </li> */}
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Aside
