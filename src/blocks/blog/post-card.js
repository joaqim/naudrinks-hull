import React from 'react'
import Photo from '@components/photo'
import { imageBuilder } from '@lib/sanity'

const PostCard = ({ post }) => {
  console.log({ ...post })
  const {
    authorImage,
    body,
    categories,
    description,
    name,
    title,
    date,
    image,
  } = post
  /*
      <div className="flex flex-col justify-between m-2 md:m-6">
      */
  return (
    <div className="flex flex-col max-w-md m-0 my-4 bg-white bg-gray-800 rounded-lg shadow-lg md:m-4 full transition-all duration-150 hover:shadow-2xl">
      <img
        className="rounded-lg rounded-b-none"
        src="https://via.placeholder.com/1024x682"
        alt="thumbnail"
        loading="lazy"
      />
      <div className="flex justify-between px-4 -mt-4">
        {categories ? (
          categories.map((category, key) => (
            <span
              key={key}
              className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
            >
              {category}
            </span>
          ))
        ) : (
          <span />
        )}
        <span className="flex items-center px-2 py-1 text-xs font-medium text-gray-400 bg-gray-800 rounded-full h-min space-x-1">
          {/* Clock Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
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
          <p className="text-xs font-semibold text-blue-500">6 Mins</p>
        </span>
      </div>
      <div className="px-4 py-2">
        <h1 className="text-xl font-medium tracking-wide text-gray-300 cursor-pointer leading-6 hover:text-blue-500">
          <a href="blog/detail">{title}</a>
        </h1>
      </div>
      <div className="px-4 space-y-2">
        <p className="font-normal tracking-wide text-gray-400 leading-5">
          {description ? description : null}
        </p>
        <router-link
          to="blog/detail"
          className="font-bold text-gray-100 hover:text-blue-400"
        >
          read more...
        </router-link>
      </div>
      <div className="flex flex-row items-end w-full h-full px-4 mt-4">
        <div className="flex w-full py-4 border-t border-gray-700">
          <div className="flex items-center w-full border-r border-gray-700 space-x-3">
            <img
              className="object-cover w-8 h-8 border-2 border-white rounded-full"
              src={imageBuilder.image(authorImage)}
              alt="profile users"
              loading="lazy"
            />
            <div className="">
              <p className="text-sm font-semibold tracking-wide text-gray-200">
                {name}
              </p>
              <p className="text-xs font-light tracking-wider text-gray-300">
                {/* 2 hours ago*/}
                {date}
              </p>
            </div>
          </div>
          <div className="flex items-center flex-shrink-0 px-2">
            <div className="flex items-center text-gray-400 space-x-1">
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
