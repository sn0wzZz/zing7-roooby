import { formatDate } from '@/app/utils/helpers'

export default function ArticleHeading({
  article,
}: {
  article: {
    title: string
    date: string
    publisher: {
      name: string
      position: string
      avatar: any
    }
    tag: string
  }
}) {
  return (
    <div className={`grid grid-cols-12 article `}>
      <div className='flex flex-col col-span-12 gap-5 xl:col-start-2 xl:col-span-10'>
        <p className='text-base font-bold text-p-el w-max tag'>
          {article.tag?.toUpperCase()}
        </p>
        <div className='border-t border-p-el'></div>
        <h2 className=''>{article.title}</h2>
        <p className='text-base'>
          {formatDate(article.date)},{' '}
          <span className='text-base text-p-el'>
            by {article.publisher.name}
          </span>
        </p>
      </div>
    </div>
  )
}
