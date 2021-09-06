import React from 'react';
import { Link } from 'gatsby';
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
}

export default Header;
