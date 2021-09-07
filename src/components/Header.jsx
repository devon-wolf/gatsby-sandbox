import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ pageTitle, navLinks }) => {
    return (
        <header className="pageHeader">
            <h1>
                {pageTitle}
            </h1>
            <nav className="headerNav">
                {navLinks.map(({ text, url }) =>
                    <Link to={url} key={url + text}>{text}</Link>
                )}
            </nav>
        </header>
    );
};

Header.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    navLinks: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })).isRequired
};

export default Header;
