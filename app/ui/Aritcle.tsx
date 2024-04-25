import Image from 'next/image'
import { formatDate } from '../utils/helpers'

export default function Aritcle({
  article,
  highlight,
  subGrid,
  sub,
  children,
}: any) {
  if (sub)
    return (
      <div className='flex flex-col h-full gap-5 mt-12 hover:cursor-pointer '>
        <div className='border-t border-p-el'></div>
        <h2 className='h-full'>{article.title}</h2>
        <div className='flex justify-between'>
          <p>
            {formatDate(article.date)},{' '}
            <span className='text-base text-p-el'>by {article.publisher}</span>
          </p>
          <p className='text-lg font-bold text-p-el w-max'>
            {article.tag?.toUpperCase()}
          </p>
        </div>
      </div>
    )

  if (subGrid)
    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 hover:cursor-pointer  ${
          highlight || (subGrid && 'lg:col-span-3')
        }`}
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
          <h2 className='h-full'>{article.title}</h2>

          <p>
            {formatDate(article.date)},{' '}
            <span className='text-base text-p-el'>by {article.publisher}</span>
          </p>
          <div className='border-t border-p-el'></div>
        </div>

        <div>{children}</div>
      </div>
    )

  if (highlight)
    return (
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 hover:cursor-pointer  ${
          highlight && 'lg:col-span-3'
        }`}
      >
        <div className='flex flex-col h-full gap-5 last:mt-auto'>
          <div className='border-t border-p-el'></div>
          <p className='text-lg font-bold text-p-el w-max'>
            {article.tag?.toUpperCase()}
          </p>
          <h2 className='h-full'>{article.title}</h2>

          <p>
            {formatDate(article.date)},{' '}
            <span className='text-base text-p-el'>by {article.publisher}</span>
          </p>
          <div className='border-t border-p-el'></div>
        </div>

        <Image
          className='w-full h-full'
          src={article.image}
          alt={article.title}
        />
      </div>
    )

  return (
    <div className='flex flex-col gap-5 hover:cursor-pointer '>
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
        <span className='text-base text-p-el'>by {article.publisher}</span>
      </p>
    </div>
  )
}
