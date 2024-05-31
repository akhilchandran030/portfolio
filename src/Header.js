import React from "react";
import './header.css';
import About from "./About";

const Header = () => {
    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <header id="header" className="header">
            <div className="tophead">
                <button ><a href="#home" onClick={handleScroll}>Home</a></button>
                <button><a href='#about' onClick={handleScroll}>About</a></button>
                <button ><a href='#skills' onClick={handleScroll}>Skills</a></button>
                <button ><a href='#projects' onClick={handleScroll}>Projects</a></button>
                <button ><a href='#contact' onClick={handleScroll}>Contact</a></button>
            </div>
        </header >
    );
}

export default Header;