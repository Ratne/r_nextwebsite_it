import React, {useState} from 'react';
import Logo from "./Logo";
import HamburgerBtn from "./HamburgerBtn";
import Menu from "./Menu";

const Navbar = () => {
    const [showMobile, setShowMobile] = useState(false)

    const sampleMenu = [
        {
            href: '/',
            title: 'Home',
            children: []
        },
        {
            href: '/blog',
            title: 'Blog',
            children: [
                {
                    href: '/blog/post1',
                    title: 'Post1',
                },
            ]
        },
        {
            href: '/about',
            title: 'About',
            children: []
        },
    ]

    return (
        <nav className="navigation_navbar">
            <div className="navbarWrapper">
                <Logo/>
                <HamburgerBtn showMobile={showMobile} setShowMobile={setShowMobile}/>
                <Menu showMobile={showMobile} listMenu={sampleMenu}/>
            </div>
        </nav>
    );
};

export default Navbar;
