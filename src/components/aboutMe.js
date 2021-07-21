import React from 'react';
import HeaderNav from './headerNav';
import '../CSS/aboutMe.css';

const AboutMe = () =>{
    return(
        <div className="aboutPage">
            <HeaderNav/>
            <p>About Me</p>
            <p>My story</p>
        </div>
    )
}

export default AboutMe;