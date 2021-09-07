import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import navLinks from '../data/navLinks';

const BlogPage = ({ data }) => {

    const { nodes } = data.allMdx;

    return (
        <Layout
            pageTitle="Blog"
            navLinks={navLinks}
        >
            {nodes.map(({ id, frontmatter, body }) => 
                <article key={id}>
                    <h2>
                        {frontmatter.title}
                    </h2>
                    <p>
                        {frontmatter.date}
                    </p>
                    <hr />
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </article>     
            )}
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
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
