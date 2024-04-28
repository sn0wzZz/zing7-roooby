'use client'
import React from 'react'
import ArticleThumbnail from './AritcleThumbnail'
import useWindowDimensions from '@/app/hooks/useWindowDimensions'
import { useFilterContext } from '../contexts/FilterContext'

export default function Articles({ articlesData, latest, latest2, art2 }: any) {
  const { width } = useWindowDimensions()
  const { filterValue = '*' } = useFilterContext()

  let filteredArticleData

  if (latest) {
    filteredArticleData = articlesData.slice(-2)
  } else if (latest2) {
    filteredArticleData = articlesData.slice(-3)
  } else if (filterValue === '*') {
    filteredArticleData = articlesData
  } else {
    filteredArticleData = articlesData.filter(
      (article: any) => article.tag === filterValue
    )
  }

  if (filteredArticleData.length === 0) {
    return (
      <div>
        <h2 className='text-p-secondary'>No {filterValue} articles</h2>
      </div>
    )
  }

  const renderArticleThumbnails = () => {
    return filteredArticleData.map((article: any, i: number) => (
      <ArticleThumbnail key={i} article={article} art2={art2} />
    ))
  }

  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${
        filteredArticleData.length >= 2 && !latest
          ? 'lg:grid-cols-3 lg:gap-y-32'
          : ''
      }`}
    >
      {width &&
        width > 1024 &&
        !latest &&
        !latest2 &&
        filteredArticleData.map((article: any, i: number) => {
          if (i === 0) {
            return (
              <ArticleThumbnail
                key={i}
                article={article}
                highlight
                art2={art2}
              />
            )
          } else if (i === 7) {
            return (
              <ArticleThumbnail key={i} article={article} subGrid art2={art2}>
                <div className='grid grid-cols-1 gap-10'>
                  {articlesData
                    .slice(8, 11)
                    .map((extraArticle: any, j: number) => (
                      <ArticleThumbnail
                        key={j}
                        article={extraArticle}
                        sub
                        art2={art2}
                      />
                    ))}
                </div>
              </ArticleThumbnail>
            )
          } else if (i >= 11) {
            return <ArticleThumbnail key={i} article={article} art2={art2} />
          } else {
            return <ArticleThumbnail key={i} article={article} art2={art2} />
          }
        })}
      {!width || width <= 1024 || latest || latest2
        ? renderArticleThumbnails()
        : null}
    </div>
  )
}
