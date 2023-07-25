import React, {ReactNode} from 'react';
import AsideArticle from "../asideContent/AsideArticle";

const LayoutBlog = ({
                        children,
                        sidebar,
                        breadcrumb,
                        showSidebar
                    }: { children: ReactNode, sidebar: ReactNode, breadcrumb: ReactNode, showSidebar: boolean }) => {
    return (
        <article className="blog-single_blogSingle__xuvEE">
            <div
                className={`blog-single_blogSingleSidebar__XuwQ0 ${showSidebar ? 'blog-single_blogSingleSidebarIsVisible__DZbTd' : ''}`}>
                {sidebar}
            </div>
            <div className="container blog-single_container__6pgEp d-flex">
                <div style={{width: '70%'}}>
                    {breadcrumb}
                    <div className="blog-single-wrapper">
                        {children}
                    </div>
                </div>
                <aside className="blog_blogSidebar__3zyME"><h3>Popular Contents</h3>
                    <AsideArticle/>
                </aside>
            </div>
        </article>
    );
};

export default LayoutBlog;
