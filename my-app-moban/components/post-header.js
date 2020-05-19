import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ slug, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{slug || ''}</PostTitle>
      {/*<div className="hidden md:block md:mb-12">*/}
      {/*    {author && <Avatar name={author.name} picture={author.picture} />}*/}
      {/*</div>*/}
      {/*<div className="mb-8 md:mb-16 -mx-5 sm:mx-0">*/}
      {/*    {coverImage && <CoverImage title={title} src={coverImage} />}*/}
      {/*</div>*/}
      <div className="max-w-2xl">
        {/*<div className="block md:hidden mb-6">*/}
        {/*    {author && <Avatar name={author.name} picture={author.picture} />}*/}
        {/*</div>*/}
        <div className="mb-6 text-lg font-serif  antialiased text-sm">
            {date && <DateFormater dateString={date} />}
            {/*{date &&  <span>{date}</span>  }*/}
        </div>
      </div>
    </>
  )
}
