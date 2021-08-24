import React from 'react'
import { imageBuilder } from '@lib/sanity'
import Link from 'next/link'
import * as S from '@compiled/schema'
import { useRouter } from 'next/router'
import formatDistance from 'date-fns/distance_in_words'

export interface PostCardProps {
  post: S.Post & {
    categories: S.Category[]
    author: { name: string; slug: { current: string }; image: S.SanityImage }
    createdAt: string
  }
}

const t = {
  Edited: { en: 'Edited', sv: 'Ändrad' },
  ago: { en: 'ago', sv: 'sedan' },
}

const PostCard = ({ post }: PostCardProps) => {
  const router = useRouter()
  // const locale = router.locale || 'en'
  const locale = 'sv'

  const {
    body,
    categories,
    description,
    title,
    createdAt,
    slug,
    mainImage,
    author,
  } = post

  return (
    <div className="post-card">
      <img
        className="rounded-lg rounded-b-none"
        src={imageBuilder.image(mainImage).width(512).url()}
        alt={`${title} - main image`}
        loading="lazy"
      />
      <div className="post-card--categories">
        {categories
          ? categories.map((category: S.Category, key: number) => (
              <span key={key} className="post-card--category">
                <Link href={`category/${category.slug.current}`}>
                  <a>{category.title[locale]}</a>
                </Link>
              </span>
            ))
          : null}
        <span className="post-card--pills">
          {/* Clock Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs font-semibold">6 Mins</p>
        </span>
      </div>
      <div className="post-card--title-container">
        <h1>
          <Link href={`blog/${slug.current}`}>
            <a className="font-bold">{title[locale]}</a>
          </Link>
        </h1>
      </div>
      <div className="post-card--description">
        <p>{description ? description[locale] : null}</p>
        <Link href={`/blog/${slug.current}`}>
          <a className="font-bold">read more...</a>
        </Link>
      </div>
      <div className="post-card--bottom">
        <div className="author--content">
          <div className="author--profile">
            {author.image ? (
              <Link href={`/authors/${author.slug.current}`}>
                <a>
                  <img
                    src={imageBuilder.image(author.image).url()}
                    alt={`${author.name} - profile picture`}
                    loading="lazy"
                  />
                </a>
              </Link>
            ) : (
              <span />
            )}
            <div>
              <p className="author--name">
                <Link href={`/authors/${author.slug.current}`}>
                  <a>{author.name}</a>
                </Link>
              </p>
              <p className="author--date">
                {t['Edited'][locale]}{' '}
                {formatDistance(new Date(createdAt), new Date(), {
                  addSuffix: false,
                  locale: locale,
                })}{' '}
                {t['ago'][locale]}.
              </p>
            </div>
          </div>
          <div className="likes--content">
            <div className="flex items-center text-pageText space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <p className="font-medium">10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
