import React from 'react';

interface IHamburgerBtn {
    showMobile: boolean,
    setShowMobile: (toggle: boolean) => void
}

const HamburgerBtn = ({showMobile, setShowMobile}: IHamburgerBtn) => {
    return (
        <div className="navbarButton" onClick={() => setShowMobile(!showMobile)}>
            <button className={`${showMobile ? 'navigation_collapsed__6SWpy' : ''}`}><span
                className="navbarButtonIcon"></span><span
                className="navbarButtonIcon"></span><span
                className="navbarButtonIcon"></span></button>
        </div>
    );
};

export default HamburgerBtn;
