import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import { getPost, getAllDocSlugs } from '@lib/api'
import Layout from '@components/layout'
import Post from '@blocks/blog/post'

function urlFor(source) {
  return 'https://via.placeholder.com/320x240'
  //return imageUrlBuilder(client).image(source)
}

const PostPage = ({ data }) => {
  const { site, post } = data

  return (
    <>
      <Layout site={site}>{post && <Post post={post.post} />}</Layout>
    </>
  )

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
  } = props
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {authorImage && (
        <div>
          <img src={urlFor(authorImage).width(50).url()} />
        </div>
      )}
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    </article>
  )
}

export async function getStaticProps({ params, preview, previewData }) {
  const postData = await getPost(params.slug, {
    active: preview,
    token: previewData?.token,
  })

  return { props: { data: postData } }
}

export async function getStaticPaths() {
  const allPosts = await getAllDocSlugs('post')

  return {
    paths:
      allPosts?.map((page) => {
        return {
          params: {
            slug: page.slug,
          },
        }
      }) || [],
    fallback: false,
  }
}

export default PostPage
