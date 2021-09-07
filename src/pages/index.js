import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import navLinks from '../data/navLinks';

const IndexPage = () => {
  return (
    <Layout
      pageTitle="Home"
      navLinks={navLinks}
    >
      {/* https://www.pexels.com/photo/ballpoint-pen-classic-coffee-composition-261510/ */}
      <StaticImage
        src="https://images.pexels.com/photos/261510/pexels-photo-261510.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=960&w=1280"
        alt="Top view of a teal Imperial typewriter" />
    </Layout>
  );
};

export default IndexPage;
