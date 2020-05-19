import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-8 font-serif">
      <h3 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 text-green-600">
        LeetCode
      </h3>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        leetcode刷题代码，解题思路写在注释中
      </h4>
    </section>
  )
}
