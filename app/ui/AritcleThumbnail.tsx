import Image from 'next/image'
import { formatDate } from '../utils/helpers'
import Link from 'next/link'

export default function AritcleThumbnail({
  article,
  highlight,
  subGrid,
  sub,
  art2,
  children,
}: any) {

  if (sub)
    return (
      <Link
        href={`/blog/${article.id}`}
        className={`flex flex-col h-full gap-2 mt-12 hover:cursor-pointer article-sub `}
      >
        <div className='border-t border-p-el'></div>
        <h4 className='h-full'>{article.title}</h4>
        <div className='flex justify-between'>
          <p>
            {formatDate(article.date)},{' '}
            <span className='text-base text-p-el'>
              by {article.publisher.name}
            </span>
          </p>
          <p className='text-lg font-bold text-p-el w-max'>
            {article.tag?.toUpperCase()}
          </p>
        </div>
      </Link>
    )

  if (subGrid)
    return (
      <Link
        href={`/blog/${article.id}`}
        className={`grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-10 hover:cursor-pointer article ${
          art2 ? 'hover:bg-white' : 'hover:bg-background-main'
        } ${highlight || (subGrid && 'lg:col-span-3')}`}
      >
        <div className='flex flex-col h-full gap-5 last:mt-auto'>
          <p className='text-lg font-bold text-p-el w-max'>
            {article.tag?.toUpperCase()}
          </p>
          <div className='border-t border-p-el'></div>
          <Image
            className='w-full h-full'
            src={article.image}
            alt={article.title}
          />
          <h3 className='h-full'>{article.title}</h3>

          <p>
            {formatDate(article.date)},{' '}
            <span className='text-base text-p-el'>
              by {article.publisher.name}
            </span>
          </p>
          <div className='border-t border-p-el'></div>
        </div>

        <div>{children}</div>
      </Link>
    )

  if (highlight)
    return (
      <Link
        href={`/blog/${article.id}`}
        className={`grid grid-cols-1 lg:grid-cols-2   gap-5 md:gap-10 hover:cursor-pointer article ${
          highlight && 'lg:col-span-3'
        } ${art2 ? 'hover:bg-white' : 'hover:bg-background-main'}`}
      >
        <div className='flex flex-col h-full gap-5 last:mt-auto'>
          <div className='border-t border-p-el'></div>
          <p className='text-lg font-bold text-p-el w-max'>
            {article.tag?.toUpperCase()}
          </p>
          <h2 className='h-full'>{article.title}</h2>

          <p>
            {formatDate(article.date)},{' '}
            <span className='text-base text-p-el'>
              by {article.publisher.name}
            </span>
          </p>
          <div className='border-t border-p-el'></div>
        </div>

        <Image
          className='w-full h-full'
          src={article.image}
          alt={article.title}
        />
      </Link>
    )

  return (
    <Link
      href={`/blog/${article.id}`}
      className={`flex flex-col gap-5 hover:cursor-pointer article ${art2? 'hover:bg-white': 'hover:bg-background-main'} `}
    >
      <p className='text-lg font-bold text-p-el w-max'>
        {article.tag?.toUpperCase()}
      </p>
      <div className='border-t border-p-el'></div>
      <Image
        className='w-full h-full'
        src={article.image}
        alt={article.title}
      />
      <h4 className='h-full'>{article.title}</h4>
      <p>
        {formatDate(article.date)},{' '}
        <span className='text-base text-p-el'>by {article.publisher.name}</span>
      </p>
    </Link>
  )
}
