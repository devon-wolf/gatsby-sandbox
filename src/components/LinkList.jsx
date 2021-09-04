import React from 'react';
import LinkItem from './LinkItem';

const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
};

const LinkList = ({ links }) => {
    return (
        <ul style={listStyles}>
            {links.map(link => <LinkItem link={link} />)}
        </ul>
    );
}

export default LinkList;
