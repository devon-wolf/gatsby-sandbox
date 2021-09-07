import React from 'react';
import LinkItem from './LinkItem';
import PropTypes from 'prop-types';

const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
};

const LinkList = ({ links }) => {
    return (
        <ul style={listStyles}>
            {links.map(link => <LinkItem link={link} key={link.url} />)}
        </ul>
    );
};

LinkList.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        badge: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
};

export default LinkList;
