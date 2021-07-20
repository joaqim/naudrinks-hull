import PostGrid from './post-grid'
import { DefaultCard } from './post-card.stories'

export default { component: PostGrid, title: 'Post Grid' }

export const DefaultGrid = (args) => {
  console.log({ ...args })
  return <PostGrid {...args}></PostGrid>
}

DefaultGrid.args = { posts: [{ ...DefaultCard.args }] }
