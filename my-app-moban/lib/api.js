import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const hljs = require('highlight.js');
const data_struturesDirectory = join(process.cwd(), '../data_structures/')
const leetcode_jsDirectory = join(process.cwd(), '../leetcode_js/')

//返回两类
export function getPostSlugs() {
    // return fs.readdirSync(postsDirectory)
    let files = fs.readdirSync(data_struturesDirectory);
    let files2 = fs.readdirSync(leetcode_jsDirectory);

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
    const stat =  fs.statSync(leetcode_jsDirectory+slug)
    const isDirectory = stat.isDirectory()
    if (!isDirectory) {
        fileContents = fs.readFileSync(leetcode_jsDirectory+slug, 'utf8')
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

            if (data[field] === 'date') {
                let stat = fs.statSync()
                // items[field] = data[field]
                items[field] = `${stat.birthtime.getFullYear()} / ${stat.birthtime.getMonth()+1} / ${stat.birthtime.getDate()}`
            }
        })
    } else if (suffix === '.js') {
        //返回js文件内容

        fields.forEach(field => {
            if(field === 'slug'){
                items[field] = slug
            }
            if(field === 'content') {
                const highlightedCode =
                    hljs.highlightAuto(fileContents).value
                items[field] = highlightedCode
            }
            if(field === 'date') {
                // items[field] = stat.birthtime.getTime()
                items[field] = `${stat.birthtime.getFullYear()} / ${stat.birthtime.getMonth()+1} / ${stat.birthtime.getDate()}`
            }
        })

    }

    return items
}

export function getAllPosts(fields = []) {
    const {data_strutures, leetcode} = getPostSlugs()
    console.log(data_strutures, leetcode, 68)
    // const posts1 = data_strutures
    //     .map(slug => getPostBySlug(slug, fields))
    //     // sort leetcode by date in descending order
    //     .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    const posts2 = leetcode
        .map(item => getPostBySlug(item, fields))
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    return { posts2}
}

