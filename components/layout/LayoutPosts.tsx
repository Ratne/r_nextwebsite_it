import React, {ReactNode} from 'react';
import AsideArticle from "../asideContent/AsideArticle";

const LayoutPosts = ({children}: { children: ReactNode }) => {
    return (
        <section className={'blog_layout'}>
            <div className={'container blog_container'}>
                <div className={'blog_blogContentWrapper'}>
                    <div className={'blog_blogItemWrapper'}>
                        {children}
                    </div>
                    <aside className="blog_blogSidebar"><h3>Popular Contents</h3>
                        <AsideArticle/>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default LayoutPosts;
