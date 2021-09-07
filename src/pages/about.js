import React from 'react';
import Layout from '../components/Layout';
import navLinks from '../data/navLinks';

const AboutPage = () => {
    return (
        <Layout
            pageTitle="About"
            navLinks={navLinks}
        >
            <p>
                This sandbox was built with the guidance of the <a href="https://www.gatsbyjs.com/docs/tutorial/part-2/" target="_blank" rel="noopener noreferrer">Gatsby JS tutorial.</a>
            </p>
        </Layout>
    );
};

export default AboutPage;
