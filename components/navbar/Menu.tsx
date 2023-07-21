import React from 'react';

interface IItemMenu {
    href: string,
    title: string,
    children?: IItemMenu[]
}

interface IMenu {
    showMobile: boolean,
    listMenu: IItemMenu[]
}

const Menu = ({showMobile, listMenu}: IMenu) => {
    return (
        <div
            className={`navbarMenus ${showMobile ? 'navigation_show__4DqFs' : ''}`}>
            <ul className="navbarNav_list">
                {listMenu?.map((ele, key) => (
                    <li key={key} className={`${ele?.children ? 'navigation_dropdown' : ''}`}>
                        <a className="navLink" href={ele?.children ? null : ele.href}>{ele.title}</a>

                        {ele.children && ele.children.length > 0 &&
                            <ul className="navigation_dropdown">
                                {ele?.children?.map((ch, k) => (
                                    <li key={k}><a href={ch.href}>{ch.title}</a></li>
                                ))}
                            </ul>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
