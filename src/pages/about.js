import React from 'react';
import Header from '../components/Header';
import navLinks from '../data/navLinks';
import './style.css';

const AboutPage = () => {
    return (
        <main>
            <title>About</title>
            <Header pageTitle="About This Sandbox" navLinks={navLinks}/>
        
            <p>
                This sandbox was built with the guidance of the <a href="https://www.gatsbyjs.com/docs/tutorial/part-2/" target="_blank" rel="noopener noreferrer">Gatsby JS tutorial.</a>
            </p>
        </main>
    );
};

export default AboutPage;
