'use client'
import Articles from '@/app/ui/Articles'
import Container from '@/app/ui/Container'
import { newsData2 } from '@/public/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ArticleHeading from './ArticleHeading'
import Avatar from '@/app/ui/Avatar'
import Links from '@/app/ui/Links'

export default function Article({
  params,
}: {
  params: {
    articleId: string
  }
}) {
  const route = useRouter()
  const article = newsData2.find(
    (article) => article.id === Number(params.articleId)
  )
  if (!article) return <h2>No such article</h2>
  return (
    <>
      <Container bgColor='bg-background-main pt-10 xl:pt-10 xl:px-10' noPadding>
        <div className='relative flex flex-col items-center gap-10'>
          <ArticleHeading article={article} />
          <Image
            className='w-full h-full'
            src={article.image}
            alt={article.title}
          />
        </div>
      </Container>

      <Container noPadding>
        <Container>
          <div className='flex flex-col gap-20'>
            {article.content.main && (
              <div>
                <p className='text-2xl font-medium'>
                  {article.content.main.pre}
                </p>
              </div>
            )}

            {article.content.main && (
              <div className='flex flex-col gap-10'>
                <h2>{article.content.main.heading}</h2>
                {article.content.main.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}

                <div className='flex flex-col gap-5 py-5 border border-y-p-el border-x-0'>
                  <p className='text-2xl font-medium'>
                    {article.content.quote.paragraph}
                  </p>
                  <p className='font-medium textp-el text-p-el'>
                    {article.content.quote.author}
                  </p>
                </div>
              </div>
            )}

            {article.content.image && (
              <div className='bg-red-400 '>
                <Image
                  className='w-full h-full'
                  src={article.content.image}
                  alt={article.title}
                />
              </div>
            )}

            {article.content.sub && (
              <div className='flex flex-col gap-10'>
                <h2>{article.content.sub.heading}</h2>
                <p className='text-lg'>{article.content.sub.pre}</p>
                <h3>{article.content.sub.subheading}</h3>

                {article.content.sub.paragraphs.map((paragraph, i) => (
                  <p key={i} className='text-lg'>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <div className='flex items-center justify-between p-10 border border-y-p-el border-x-0'>
              <Avatar publisher={article.publisher} />
              <Links full />
            </div>
          </div>
        </Container>
      </Container>

      <Container bgColor='bg-background-main'>
        <h1>More from this topic</h1>
        <Articles articlesData={newsData2} latest2 art2 />
      </Container>
    </>
  )
}
