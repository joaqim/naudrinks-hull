import { Meta, Story } from '@storybook/react'
import PostGrid from './post-grid'
import DefaultCard from './post-card'

export default {
  component: PostGrid,
  title: 'Components/Post Grid',
} as Meta

export const DefaultGrid = (args) => <PostGrid {...args}></PostGrid>

const postMock = () => {
  return {
    slug: { _type: 'slug', current: 'test-post' },
    description: { _type: 'description', en: 'Description' },
    createdAt: '2021-08-19 10:49',
    title: { _type: 'title', en: 'Title' },
    author: {
      name: 'Author Name',
      slug: { current: 'author-name' },
      image: {
        asset: {
          _type: 'reference',
          _ref: 'image-d262062282136f514ec48f6d2f79409827d3ed43-670x870-png',
        },
      },
    },
    categories: [
      {
        title: { en: 'Placeholder Category' },
        slug: { current: 'placeholder-category' },
      },
    ],
    mainImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-ed2c93f17f9243d190f9ececeb8691701e42d04e-3840x2560-jpg',
      },
    },
  }
}

DefaultGrid.args = {
  posts: Array(5).fill(postMock()),
}
