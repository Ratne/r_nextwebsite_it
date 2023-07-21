import React, {ReactNode} from 'react';

const LayoutPosts = ({children}: { children: ReactNode }) => {
    return (
        <section className={'blog_layout'}>
            <div className={'container blog_container'}>
                <div className={'blog_blogContentWrapper'}>
                    <div className={'blog_blogItemWrapper'}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LayoutPosts;
