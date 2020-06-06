import { parseISO, format } from 'date-fns'

export default function DateFormater({ dateString }) {
  const date = new Date(dateString)
  // return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd HH:mm ，BBBBB EEEE')}</time>
  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>

}
