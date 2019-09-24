import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <label>Total Count</label>
            <a href="#" className="navbar-brand">{props.count}</a>
        </nav>
    );
}

export default NavBar;
