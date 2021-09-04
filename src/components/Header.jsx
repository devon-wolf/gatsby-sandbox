import React from 'react';

const headerStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
    backgroundColor: '#FF00FF'
};


const Header = ({ pageTitle, navLinks }) => {
    return (
        <header style={headerStyles}>
            <h1>
                {pageTitle}
            </h1>
            <nav>
                {navLinks.map(({ text, url }) =>
                    <a href={url} key={url + text}>{text}</a>
                )}
            </nav>
        </header>
    );
}

export default Header;
