import React from 'react'
import PostCard from './post-card'

const PostGrid = ({ posts }) => {
  return (
    <section className="section py-4">
      <div className="flex flex-wrap mx-0 sm:mx-20 transition-all duration-150">
        {posts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))}
      </div>
    </section>
  )
}

export default PostGrid
