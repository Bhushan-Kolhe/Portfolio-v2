import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import NavBar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';

function HomePage() {
    return (
        <div>
            <NavBar />
            <HeroArea />
            <AboutMe />
        </div>
    )
}

export default HomePage;
