import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { useRouter } from 'next/router'
import { imageBuilder } from '@lib/sanity'
import Link from 'next/link'
import * as S from '@compiled/schema'

export interface PostCardProps {
  post: S.Post & {
    categories: S.Category[]
    author: { name: string; slug: { current: string }; image: S.SanityImage }
    createdAt: string
  }
}

const PostCard = ({ post }: PostCardProps) => {
  const router = useRouter()
  const locale = router.locale || 'en'

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
    <article className="bg-pageBG text-pageText border-pageText">
      <h1>{title}</h1>
      <span>By {author.name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map((category: S.Category, key: number) => (
            <li key={key}>{category.title[locale]}</li>
          ))}
        </ul>
      )}
      {author.image && (
        <div>
          <img src={imageBuilder.image(author.image).width(50).url()} />
        </div>
      )}

      <BlockContent
        blocks={body[locale]}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    </article>
  )
}
export default PostCard
