import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About the Pokédex Project</h1>
            <p>This Pokédex is the result of a React-based assignment, for Web 2 Course</p>

            <p>The aim of this project is to build a functional Pokédex from the Pokémon series. Users can view a list of Pokémon and select any of them to discover more detailed information, such as their abilities, stats, and more.</p>
            <p>We invite you to explore the Pokédex, learn about your favorite Pokémon, and perhaps discover something new along the way!</p>
        </div>
    );
};

export default About;
