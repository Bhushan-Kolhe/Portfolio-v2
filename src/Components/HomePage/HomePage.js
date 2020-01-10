import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import NavBar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';
import './HomePage.css';

function HomePage() {
    return (
        <div id="HomePage">
            <NavBar />
            <HeroArea />
            <AboutMe />
        </div>
    )
}

export default HomePage;
