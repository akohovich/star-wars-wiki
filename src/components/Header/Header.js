import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <h1>Star Wars Wiki</h1>
            <ul className="d-flex main_nav">
                <li>
                    <a href="asdf">People</a>
                </li>
                <li>
                    <a href="asdf">Planets</a>
                </li>
                <li>
                    <a href="asdf">Ships</a>
                </li>
            </ul>

        </div>
    );
}

export default Header;