import React, { useState } from 'react';
import '../common.css'; // Import the CSS file for styling

const SideNav = () => {
    const [isOpen, setIsOpen] = useState({
        home: false,
        about: false,
        services: false,
        contact: false,
    });

    const toggleMenu = (menu) => {
        setIsOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    return (
        <div className="side-navbar">
            <ul className="side-navbar-links">
                <li className="side-navbar-item">
                    <div className="menu-item" onClick={() => toggleMenu('home')}>
                        <span className="toggle-icon">{isOpen.home ? '-' : '+'}</span>
                        <span>Home</span>
                    </div>
                    <ul className={`submenu ${isOpen.home ? 'open' : ''}`}>
                        <li><a href="/home/sub1">Submenu 1</a></li>
                        <li><a href="/home/sub2">Submenu 2</a></li>
                    </ul>
                </li>
                <li className="side-navbar-item">
                    <div className="menu-item" onClick={() => toggleMenu('about')}>
                        <span className="toggle-icon">{isOpen.about ? '-' : '+'}</span>
                        <span>About</span>
                    </div>
                    <ul className={`submenu ${isOpen.about ? 'open' : ''}`}>
                        <li><a href="/about/team">Our Team</a></li>
                        <li><a href="/about/history">Our History</a></li>
                    </ul>
                </li>
                <li className="side-navbar-item">
                    <div className="menu-item" onClick={() => toggleMenu('services')}>
                        <span className="toggle-icon">{isOpen.services ? '-' : '+'}</span>
                        <span>Services</span>
                    </div>
                    <ul className={`submenu ${isOpen.services ? 'open' : ''}`}>
                        <li><a href="/services/consulting">Consulting</a></li>
                        <li><a href="/services/development">Development</a></li>
                    </ul>
                </li>
                <li className="side-navbar-item">
                    <div className="menu-item" onClick={() => toggleMenu('contact')}>
                        <span className="toggle-icon">{isOpen.contact ? '-' : '+'}</span>
                        <span>Contact</span>
                    </div>
                    <ul className={`submenu ${isOpen.contact ? 'open' : ''}`}>
                        <li><a href="/contact/email">Email Us</a></li>
                        <li><a href="/contact/locations">Our Locations</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
