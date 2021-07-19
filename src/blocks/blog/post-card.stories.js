import PostCard from './post-card'

export default { component: PostCard, title: 'Post Card' }

export const DefaultCard = (args) => <PostCard {...args} />
DefaultCard.args = {
  post: {
    slug: { current: 'test-post' },
    description: 'Description',
    name: 'Name',
    title: 'Title',
    date: '2021-07-19 09:40',
  },
}
