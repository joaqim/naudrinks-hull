import React from 'react'
import PostCard from './post-card'

const PostGrid = ({ posts }) => {
  console.log({ posts })
  /*className="flex flex-col justify-between w-full px-2 py-4 m-2 lg:flex-row md:px-4 md:py-6 transition-all duration-150 md:w-full lg:w-1/3"*/
  return (
    <section className="section">
      <div className="post-grid">
        {/*<div className="flex flex-col items-stretch min-h-full pb-4 mb-6 bg-white rounded-lg shadow-lg transition-all duration-150 hover:shadow-2xl">*/}
        {posts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))}
      </div>
    </section>
  )
}

export default PostGrid
