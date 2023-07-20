import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    title: string
    src: string
    slug?: string
}

const CoverImage = ({title, src, slug}: Props) => {
    const image = (
        <img
            src={src}
            alt={`Cover Image for ${title}`}
            width="100%" height="100%"
        />
    )
    return (
        <div>
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    )
}

export default CoverImage
