import React from 'react';
import '../../Styles.css';

const NavBar = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;