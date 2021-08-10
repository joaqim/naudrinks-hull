import React from 'react'
import Photo from '@components/photo'
import { imageBuilder } from '@lib/sanity'
import Link from 'next/link'

import { useRouter } from 'next/router'

const PostCard = ({ post }) => {
  //console.log({ ...post })
  const router = useRouter()
  const { locale } = router
  const {
    authorImage,
    body,
    categories,
    description,
    name,
    title,
    date,
    slug,
    image,
  } = post
  /* <div className="flex flex-col justify-between m-2 md:m-6"> */
  return (
    <div className="post-card">
      <img
        className="rounded-lg rounded-b-none"
        src={
          image
            ? imageBuilder.image(image.size > 1 ? image[locale] : image['se'])
            : `https://via.placeholder.com/1024x682`
        }
        alt="thumbnail"
        loading="lazy"
      />
      <div className="post-card--categories">
        {categories
          ? categories.map((category, key) => (
              <span key={key} className="post-card--category">
                {category[locale]}
              </span>
            ))
          : null}
        <span className="post-card--pills">
          {/* Clock Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            //className="w-5 h-5 text-blue-500"
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
          <p className="">6 Mins</p>
        </span>
      </div>
      <div className="post-card--title-container">
        <h1>
          <Link href={`blog/${slug.current}`}>{title[locale]}</Link>
        </h1>
      </div>
      <div className="post-card--description">
        <p className="">{description ? description[locale] : null}</p>
        <Link href={`/blog/${slug.current}`} className="post-card--link">
          read more...
        </Link>

        {/*
        <router-link to="blog/detail" className="post-card--link">
          read more...
        </router-link>
        */}
      </div>
      <div className="post-card--bottom">
        <div className="author--content">
          <div className="author--image">
            <img
              className=""
              src={
                authorImage
                  ? imageBuilder.image(authorImage)
                  : 'https://via.placeholder.com/64x64'
              }
              alt="profile users"
              loading="lazy"
            />
            <div className="">
              <p className="">{name}</p>
              <p className="">
                {/*TODO: syntax change to time remaining i.e.:  2 hours ago*/}
                {date}
              </p>
            </div>
          </div>
          <div className="post-card--bottom--content">
            <div className="post-card--bottom--likes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                //className="w-5 h-5"
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
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className="w-full mx-3 overflow-hidden bg-white border rounded lg:w-6/12 md:w-6/12 md:mx-0 lg:mx-0">
      <div className="flex justify-between w-full p-3">
        <div className="flex">
          <div className="flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-500 rounded-full">
            <img src="https://via.placeholder.com/100x100" alt="profilepic" />
          </div>
          <span className="pt-1 ml-2 text-sm font-bold">{post.name}</span>
        </div>
        <span className="px-2 rounded cursor-pointer hover:bg-gray-300">
          <i className="pt-2 text-lg fas fa-ellipsis-h"></i>
        </span>
      </div>
      <img
        className="w-full bg-cover"
        src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
      />
      <div className="px-3 pb-2">
        <div className="pt-2">
          <i className="cursor-pointer far fa-heart"></i>
          <span className="text-sm font-medium text-gray-400">12 likes</span>
        </div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            <span className="mr-2 font-medium">{post.name}</span> Lord of the
            Rings is my favorite film-series. One day I'll make my way to New
            Zealand to visit the Hobbiton set!
          </div>
        </div>
        {/*
        <div className="mb-2 text-sm font-medium text-gray-400 cursor-pointer">
          View all 14 comments
        </div>
        <div className="mb-2">
          <div className="mb-2 text-sm">
            <span className="mr-2 font-medium">razzle_dazzle</span> Dude! How
            cool! I went to New Zealand last summer and had a blast taking the
            tour! So much to see! Make sure you bring a good camera when you go!
          </div>
        </div>
        */}
      </div>
    </div>
  )
  return <div>{post.title}</div>
}
export default PostCard
