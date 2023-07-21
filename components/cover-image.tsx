import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    title: string
    src: string
}

const CoverImage = ({title, src}: Props) => {
    const image = (
        <img
            src={src}
            alt={`Cover Image for ${title}`}
            width="100%" height="100%"
        />
    )
    return (
        <div>
            {image}
        </div>
    )
}

export default CoverImage
