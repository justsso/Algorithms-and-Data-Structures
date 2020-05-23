import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getAllPosts} from '../lib/api'
import LeetCodeList from "../components/leetcode-list";
// import Head from 'next/head'
// import {CMS_NAME} from '../lib/constants'

export default function Index({posts1, posts2}) {
    // const heroPost = allPosts[0]
    const heroPost = null;
    // const morePosts = allPosts.slice(1)
    // const morePosts = posts1;
    const leetcodes = posts2;
    return (
        <>
            <Layout>
                {/*<Head>*/}
                {/*    <title>Next.js Blog Example with {CMS_NAME}</title>*/}
                {/*</Head>*/}
                <Container>
                    <Intro/>
                    {/*{heroPost && (*/}
                    {/*    <HeroPost*/}
                    {/*        title={heroPost.title}*/}
                    {/*        coverImage={heroPost.coverImage}*/}
                    {/*        date={heroPost.date}*/}
                    {/*        author={heroPost.author}*/}
                    {/*        slug={heroPost.slug}*/}
                    {/*        excerpt={heroPost.excerpt}*/}
                    {/*    />*/}
                    {/*)}*/}
                    {/*{morePosts.length > 0 && <MoreStories leetcode={morePosts}/>}*/}
                    {/*{leetcodes.length > 0 && <MoreStories leetcode={leetcodes}/>}*/}

                    {/*{morePosts > 0  &&  <h2>数据结构</h2>  }*/}
                    {leetcodes.length > 0 &&  <LeetCodeList posts={leetcodes} />}

                </Container>
            </Layout>
        </>
    )
}

// 静态渲染，可做cdn
// export async function getStaticProps() {
//     console.log('getStaticProps')
//     const {posts1, posts2} = getAllPosts([
//         'date',
//         'slug',
//     ])
//
//     return {
//         props: { posts2  }
//     }
// }

//服务端渲染，不可做cdn
export async function getServerSideProps(context) {
    console.log('getServerSideProps')
    const {posts1, posts2} = getAllPosts([
        'date',
        'slug',
    ])

    return {
        props: { posts2  }
    }
}
