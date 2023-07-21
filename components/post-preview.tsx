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

const PostPreview = ({
                         title,
                         coverImage,
                         date,
                         excerpt,
                         author,
                         slug,
                     }: Props) => {
    return (

        <article className={'blog-item_blogItem'}>

            <Link
                as={`/posts/${slug}`}
                href="/posts/[slug]">

                <div className={'blog-item_blogItemThumb'}>
                    <CoverImage title={title} src={coverImage}/>
                </div>
                <div className={'blog-item_blogItemContent'}>
                    <h2 className={'blog-item_blogItemTitle___oNcw'}>
                        {title}
                    </h2>
                    <div className={'blog-item_blogItemUserDesignation'}>
                        <DateFormatter dateString={date}/>
                    </div>
                    <div className={'blog-item_blogItemSummary'}>
                        <p>{excerpt}</p>

                    </div>
                </div>

            </Link>
        </article>

    )
}

export default PostPreview
