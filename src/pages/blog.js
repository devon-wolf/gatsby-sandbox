import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import navLinks from '../data/navLinks';

const BlogPage = ({ data }) => {

    const { nodes } = data.allMdx;

    return (
        <Layout
            pageTitle="Blog"
            navLinks={navLinks}
        >
            <ul>
                {nodes.map(({ id, frontmatter }) => 
                    <li key={id}>
                        {frontmatter.title}
                        <br />
                        {frontmatter.date}
                    </li>     
                )}
            </ul>
        </Layout>
    );
};

BlogPage.propTypes = {
    data: PropTypes.shape({
        allMdx: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({
                frontmatter: PropTypes.shape({
                    title: PropTypes.string,
                    date: PropTypes.string
                })
            }))
        })
    }).isRequired
};

export const query = graphql`
query {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
      }
    }
  }
`;

export default BlogPage;
