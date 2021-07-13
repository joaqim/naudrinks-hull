import { FiGift } from 'react-icons/fi'

export default {
  title: 'Post Card',
  name: 'postCard',
  type: 'object',
  icon: FiGift,
  fields: [
    {
      title: 'Post',
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }]
    }
  ],
  preview: {
    select: {
      title: 'post.title'
    },
    prepare({ title }) {
      return {
        title: title || 'Post Card'
      }
    }
  }
}
