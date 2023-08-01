import React from 'react';

const SidebarPost = ({list, activeSection}: { list: any[], activeSection: string }) => {
    return (
        <div className="blog-single_blogSingleSidebarToc"><h3>Table of Contents</h3>
            <ul className="">
                {list?.map(ele => (
                    <li key={ele.id}
                        className={activeSection === ele.id ? 'blog-single_blogSingleSidebarActive' : ''}><a
                        href={`#${ele.id}`}>{ele?.label}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarPost;
