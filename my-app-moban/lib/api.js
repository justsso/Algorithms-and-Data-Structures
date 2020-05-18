import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const hljs = require('highlight.js');
const postsDirectory = join(process.cwd(), '_posts')
const data_struturesDirectory = join(process.cwd(), '../data_structures')
const leetcode_jsDirectory = join(process.cwd(), '../leetcode_js')

//返回两类
export function getPostSlugs() {
    // return fs.readdirSync(postsDirectory)
    let files = fs.readdirSync(data_struturesDirectory);
    let files2 = fs.readdirSync(leetcode_jsDirectory);
    files = files.map(item => {
        return `data_structures/${item}`
    })

    files2 = files2.map(item => {
        return `leetcode_js/${item}`
    })

    return {
        data_strutures: files,
        leetcode: files2
    }
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug
    const suffix = slug.slice(slug.lastIndexOf('.'))
    // const fullPath = join(postsDirectory, `${realSlug}`)
    let fileContents;
    const isDirectory = fs.statSync(join(process.cwd(), `../${slug}`)).isDirectory()
    if (!isDirectory) {
        fileContents = fs.readFileSync(join(process.cwd(), `../${slug}`), 'utf8')
    }
    let items = {}
    if (suffix === '.md') {
        const {data, content} = matter(fileContents)
        // Ensure only the minimal needed data is exposed
        fields.forEach(field => {
            if (field === 'slug') {
                items[field] = realSlug
            }
            if (field === 'content') {
                items[field] = content
            }

            if (data[field]) {
                items[field] = data[field]
            }
        })
    } else if (suffix === '.js') {
        //返回js文件内容

        items.slug = slug
        items.title = slug
        // items.date = new Date()
        const highlightedCode =
            hljs.highlightAuto(fileContents).value
        items.content = highlightedCode

    }

    return items
}

export function getAllPosts(fields = []) {
    const {data_strutures, leetcode} = getPostSlugs()
    // console.log(data_strutures, leetcode, 68)
    const posts1 = data_strutures
        .map(slug => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    const posts2 = leetcode
        .map(item => getPostBySlug(item, fields))
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    return {posts1, posts2}
}

