'use client'
import React from 'react'
import Article from './Aritcle'
import useWindowDimensions from '@/app/utils/useWindowDimensions'
import { useFilterContext } from '../contexts/FilterContext'

export default function Articles({ articlesData }: any) {
  const { width } = useWindowDimensions()
  const { filterValue } = useFilterContext()

  let filteredArticleData

  if (filterValue === '*') {
    filteredArticleData = articlesData
  } else {
    filteredArticleData = articlesData.filter(
      (article: any) => article.tag === filterValue
    )
  }

  console.log(filteredArticleData)

  if (filteredArticleData.length === 0)
    return (
      <div>
        <h2 className='w-full h-full text-black'>No articles</h2>
      </div>
    )

  return (
    <div
      className={`grid grid-cols-1 gap-10 sm:grid-cols-2 ${
        articlesData?.length > 3 && 'lg:grid-cols-3 lg:gap-y-32'
      }`}
    >
      {filteredArticleData.map((article: any, i: number) => {
        if (width && width > 1024) {
          if (i === 0) {
            return <Article key={i} article={article} highlight />
          } else if (i > 0 && i < 7) {
            return <Article key={i} article={article} />
          } else if (i === 7) {
            return (
              <Article key={i} article={article} subGrid>
                {/* Subgrid for additional articles */}
                <div className='grid grid-cols-1 gap-10 '>
                  {/* Assuming articlesData contains at least 3 more articles */}
                  {articlesData
                    .slice(8, 11)
                    .map((extraArticle: any, j: number) => (
                      <Article key={j} article={extraArticle} sub />
                    ))}
                </div>
              </Article>
            )
          } else if (i >= 11) {
            return <Article key={i} article={article} />
          }
        } else {
          return <Article key={i} article={article} />
        }
      })}
    </div>
  )
}
