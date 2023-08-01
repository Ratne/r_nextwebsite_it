import React from 'react';

const AsideArticle = () => {
    return (
        <div className="blog_blogSidebarItem"><a
            href="/blog/figma-ui-kit-and-design-system-free">
            <div className="blog_blogSidebarItemImage">
                <img
                    src="https://images.prismic.io/staticmania/b9b5883e-da23-49f6-bc51-fae9da4958dd_thumb-+Figma+UI+Kit+and+Design+System.png?auto=compress,format"
                    className="blog_blogSidebarItemImage" alt="blog-sidebar-img"/></div>
            <div className="blog_blogSidebarItemContent"><h4
                className="blog_blogSidebarItemTitle">Keep- Free Figma UI Kit and Design
                System </h4>
                <div className="blog_blogSidebarItemSummary">Figma is a fantastic tool for ...
                </div>
            </div>
        </a></div>
    );
};

export default AsideArticle;
