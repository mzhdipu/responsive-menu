import React from 'react';

const Link = ({router}) => {
    return (
        <div>
            <li className='mr-12'>{router.name}</li>
        </div>
    );
};

export default Link;