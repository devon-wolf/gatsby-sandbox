import React from 'react';
import PropTypes from 'prop-types';

const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
};

const linkStyle = {
    color: '#8954A8',
    fontWeight: 'bold',
    fontSize: 16,
    verticalAlign: '5%',
};
  
  const descriptionStyle = {
    color: '#232129',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};

const badgeStyle = {
    color: '#fff',
    backgroundColor: '#088413',
    border: '1px solid #088413',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
    borderRadius: 4,
    padding: '4px 6px',
    display: 'inline-block',
    position: 'relative',
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
};

const LinkItem = ({ link }) => {
    return (
        <li style={{ ...listItemStyles, color: link.color }}>

                <span>
                <a
                    style={linkStyle}
                    href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
                    {link.text}
                </a>
                {link.badge && (
                    <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                    </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
                </span>

        </li>
    );
};

LinkItem.propTypes = {
    link: PropTypes.shape({
        url: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        badge: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};

export default LinkItem;
