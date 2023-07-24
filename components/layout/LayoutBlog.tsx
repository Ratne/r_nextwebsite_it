import React, {ReactNode} from 'react';
import AsideArticle from "../asideContent/AsideArticle";

const LayoutBlog = ({
                        children,
                        sidebar,
                        breadcrumb,
                    }: { children: ReactNode, sidebar: ReactNode, breadcrumb: ReactNode }) => {
    return (
        <article className="blog-single_blogSingle__xuvEE">
            <div className="blog-single_blogSingleSidebar__XuwQ0 ">
                {sidebar}
            </div>
                <div className="container blog-single_container__6pgEp">
                    {breadcrumb}
                    <div className="blog-single-wrapper">
                        {children}
                    </div>

            </div>
        </article>
    );
};

export default LayoutBlog;
