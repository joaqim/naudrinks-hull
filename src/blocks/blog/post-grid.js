import React from 'react'
import PostCard from './post-card'

const PostGrid = ({ posts }) => {
  return (
    <section className="section py-4">
      <div className="post-grid">
        {posts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))}
      </div>
    </section>
  )
}

export default PostGrid
