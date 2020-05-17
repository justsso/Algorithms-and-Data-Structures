import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
const hljs = require('highlight.js');
const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug
    const suffix =  slug.slice(slug.lastIndexOf('.'))
    const fullPath = join(postsDirectory, `${realSlug}`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    let items = {}
    if(suffix === '.md'){
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
    }else {
        //返回js文件内容

        items.slug = slug
        items.title = slug
        // items.date = new Date()
        const highlightedCode =
         hljs.highlightAuto(  fileContents  ).value
        items.content = highlightedCode

    }

    return items
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs()
    console.log(slugs, 49)
    const posts = slugs
        .map(slug => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    return posts
}

