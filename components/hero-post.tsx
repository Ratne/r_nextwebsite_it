import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    author: Author
    slug: string
}

const HeroPost = ({
                      title,
                      coverImage,
                      date,
                      excerpt,
                      author,
                      slug,
                  }: Props) => {
    return (
        <section className={'blog_blog__F5mr_'}>
            <div className={'container blog_container__mfFov'}>
                <div className={'blog_blogContentWrapper__Rg_Bp'}>
                    <div className={'blog_blogItemWrapper__VTxGI'}>


                        <article className={'blog-item_blogItem__fVfgY'}>

                            <Link
                                as={`/posts/${slug}`}
                                href="/posts/[slug]"
                            >

                                <div className={'blog-item_blogItemThumb__RaNoc'}>
                                    <CoverImage title={title} src={coverImage} slug={slug}/>
                                </div>
                                <div className={'blog-item_blogItemContent__CKyNV'}>
                                    <h2 className={'blog-item_blogItemTitle___oNcw'}>
                                        {title}
                                        {/* <Link
                                            as={`/posts/${slug}`}
                                            href="/posts/[slug]"
                                        >
                                        </Link>*/}
                                    </h2>
                                    <div className={'blog-item_blogItemUserDesignation__lHB55'}>
                                        <DateFormatter dateString={date}/>
                                    </div>
                                    <div className={'blog-item_blogItemSummary__Kjij_'}>
                                        <p>{excerpt}</p>

                                    </div>
                                </div>
                            </Link>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPost
