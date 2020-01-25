import React from 'react';
import Socials from '../../Resources/Socials';
import './ContactMe.css';

function ContactMe() {
    return (
        <div id="ContactMe">
            <div id="ContactMe-Card">
                <div id="ContactMe-Card-Top">
                    <div id="ContactMe-Card-Top-Left">
                        <h1>Bhushan Kolhe</h1>
                        <h3>E-mail me at,</h3>
                        <h2>kolhe.bhushan.bk@gmail.com</h2>
                    </div>
                    <div id="ContactMe-Card-Top-Right">
                        <div id="ContactMe-SocialIcons-Container">
                            <div id="ContactMe-SocialIcons-Grid">
                                {
                                   Socials.map( Element => {
                                       const icon = `./img/${Element.icon}`
                                       return (
                                        <a href={Element.link}>
                                            <img src={icon}></img>
                                        </a>
                                       )
                                   }) 
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;
