import remark from 'remark'
import html from 'remark-html'
// import javascript from 'highlight.js/lib/languages/javascript';
const hljs = require('highlight.js');


export default async function markdownToHtml(markdown) {
    const result = await remark()
        .use(html)
        .process(markdown)

    return result.toString()

}
