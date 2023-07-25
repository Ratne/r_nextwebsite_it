import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import {getPostBySlug, getAllPosts} from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import Navbar from "../../components/navbar/Navbar";
import LayoutBlog from "../../components/layout/LayoutBlog";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import SidebarPost from "../../components/sidebar/SidebarPost";
import {useEffect, useState} from "react";
import useScrollPosition from "../../hook/useScrollPosition";
import useH2elements from "../../hook/useH2elements";

type Props = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

export default function Post({post, morePosts, preview}: Props) {
    const router = useRouter()
    const title = `${post.title} | Next.js Blog Example with `
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>
    }

    const [showSidebar, setShowSidebar] = useState(false);
    const {scrollPosition} = useScrollPosition()
    const {h2Content} = useH2elements({text: post.content})

    useEffect(() => {
        setShowSidebar(scrollPosition > 100 ? true : false)
    }, [scrollPosition]);


    return (
        <Layout preview={preview}>
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>{title}</title>
                                <meta property="og:image" content={post.ogImage.url}/>
                            </Head>
                            <Navbar/>
                            <LayoutBlog
                                breadcrumb={<Breadcrumb/>}
                                sidebar={<SidebarPost list={h2Content}/>}
                                showSidebar={showSidebar}
                            >
                                <>
                                    <PostHeader
                                        title={post.title}
                                        coverImage={post.coverImage}
                                        date={post.date}
                                        author={post.author}
                                    />
                                    <PostBody content={post.content}/>
                                </>
                            </LayoutBlog>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({params}: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
