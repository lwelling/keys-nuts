import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <span>
            <Link className="footer-link" to="/">Home</Link>
            <Link className="footer-link" to="browse">Browse Inventory</Link>
        </span>
    )
};

export default Footer;
