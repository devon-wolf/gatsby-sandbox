import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import navLinks from '../data/navLinks';

const BlogPage = ({ data }) => {

    const { nodes } = data.allFile;

    return (
        <Layout
            pageTitle="Blog"
            navLinks={navLinks}
        >
            <ul>
                {nodes.map(({ name }) => 
                    <li key={name}>{name}</li>     
                )}
            </ul>
        </Layout>
    );
};

BlogPage.propTypes = {
    data: PropTypes.shape({
        allFile: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string
            }))
        })
    }).isRequired
};

export const query = graphql`
query {
    allFile {
        nodes {
            name
        }
    }
}
`;

export default BlogPage;
