import React from 'react'

import Layout from '@components/layout'
import { getStaticPage, modules, allPosts } from '@lib/api'

import { Module } from '@modules/index'
import PostGrid from '@blocks/blog/post-grid'

const Blog = ({ data }) => {
  const { site, page } = data

  //console.log({ site, page })
  return (
    <Layout site={site}>
      {page.module
        ? page.modules?.map((module, key) => (
            <Module
              key={key}
              module={module}
              collectionProducts={page.products}
              featuredProducts={page.featuredProducts}
            />
          ))
        : null}
      <PostGrid posts={page.posts} />
    </Layout>
  )
}

export async function getStaticProps({ preview, previewData }) {
  const blogData = await getStaticPage(
    `
    *[_type == "blogPage"] | order(_updatedAt desc)[0]{
      hasTransparentHeader,
      modules[]{
        ${modules}
      },
      "posts": ${allPosts(preview)},
      "featuredProducts": featuredProducts[]->productID,
      seo
    }
  `,
    {
      active: preview,
      token: previewData?.token,
    }
  )

  return {
    props: {
      data: blogData,
    },
  }
}

export default Blog
