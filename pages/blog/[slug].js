import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import { getPost, getAllDocSlugs } from '@lib/api'
import Layout from '@components/layout'

function urlFor(source) {
  return 'https://via.placeholder.com/320x240'
  //return imageUrlBuilder(client).image(source)
}

const PostPage = ({ data }) => {
  const { site, page } = data
  console.log({ page })

  return (
    <>
      <Layout site={site}>Post</Layout>
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

/*
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query
  return await client.fetch(query, { slug })
}
  */
export default PostPage
