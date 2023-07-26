import React, {ReactNode} from 'react';
import AsideArticle from "../asideContent/AsideArticle";

const LayoutBlog = ({
                        children,
                        sidebar,
                        breadcrumb,
                        showSidebar
                    }: { children: ReactNode, sidebar: ReactNode, breadcrumb: ReactNode, showSidebar: boolean }) => {
    return (
        <article className="blog-single_blogSingle">
            <div
                className={`blog-single_blogSingleSidebar ${showSidebar ? 'blog-single_blogSingleSidebarIsVisible' : ''}`}>
                {sidebar}
            </div>
            <div className="blog-single_container d-flex">
                <div style={{width: '70%'}}>
                    {breadcrumb}
                    <div className="blog-single-wrapper">
                        {children}
                    </div>
                </div>
                <aside className="blog_blogSidebar"><h3>Popular Contents</h3>
                    <AsideArticle/>
                </aside>
            </div>
        </article>
    );
};

export default LayoutBlog;
