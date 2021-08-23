import { Meta, Story } from '@storybook/react'
import PostCard, { PostCardProps } from './post-card'

export default {
  component: PostCard,
  title: 'Post Card',
} as Meta

export const DefaultCard: Story<PostCardProps> = (args) => (
  <PostCard {...args} />
)

// DefaultCard.story = { parameters: { nextRouter: {} } }
DefaultCard.args = {
  post: {
    slug: { _type: 'slug', current: 'test-post' },
    description: { _type: 'description', en: 'Description' },
    createdAt: '2021-08-19 10:49',
    title: { _type: 'title', en: 'Title' },
    // @ts-ignore
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
        // @ts-ignore
        title: { en: 'Placeholder Category' },
        // @ts-ignore
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
  },
}
