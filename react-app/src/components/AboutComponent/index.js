import React from 'react'
import "./About.css"
import photo from './profpic.jpg'



const About = () => {
    return (
        <div className="about__container--text">
            <h2 className="about__title">About the Developer</h2>
            <img src={photo}></img>
            <p>I am a new developer with a passion for coding and learning. I am excited to have the opportunity to build a meaningful career in the most exciting field.
               My project was made using React, Python, Redux, SQLAlchemy, and Flask.
            </p>
        </div>
        )
}

export default About
