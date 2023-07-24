import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className={'blog-single_blogSingleTitle__trh8B'}>
      {children}
    </h1>
  )
}

export default PostTitle
