import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className={'blog-single_blogSingleTitle'}>
      {children}
    </h1>
  )
}

export default PostTitle
