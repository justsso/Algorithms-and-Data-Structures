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
import {CMS_NAME} from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'


export default function Post({post, morePosts, preview}) {
    const router = useRouter()
    console.log(router.query, 'router.query')
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>
    }
    return (
        <Layout preview={preview}>
            <Container>
                <Header/>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article className="mb-32">
                            <Head>
                                <title>
                                    {post.title || post.slug} | Next.js Blog Example with {CMS_NAME}
                                </title>
                                {post.omImage && <meta property="og:image" content={post.ogImage.url}/>}
                            </Head>
                            <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                            />
                            <PostBody content={post.content}/>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    console.log(params, 'params')
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const suffix = params.slug.slice(params.slug.lastIndexOf('.'))
    let content
    if (suffix === '.md') {
        content = await markdownToHtml(post.content || '')
    } else {
        content = `<pre> <code class="hljs" >${post.content}</code> </pre>`
    }

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

// export async function getStaticPaths() {
//     const posts = getAllPosts(['...slug'])
//     //预渲染所有的指定的 js md文件。文件名带有后缀的
//
//     return {
//         paths: posts.map(posts => {
//             return {
//                 params: {
//                     slug: posts.slug,
//                 },
//             }
//         }),
//         fallback: false,
//     }
// }
