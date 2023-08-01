import React from 'react';

const Logo = () => {
    return (
        <div className="navbarBrand">
            <a href="/">
                <img alt="logo"
                     src="/images/logo.png" width="50"
                     height="50"
                /><span>APP</span></a>
        </div>
    );
};

export default Logo;
