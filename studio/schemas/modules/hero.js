import { FiStar } from 'react-icons/fi'

import ConditionalFields from '../../components/conditional-field'

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: FiStar,
  fields: [
    {
      title: 'Overlay Content',
      name: 'content',
      type: 'complexPortableText'
    },
    {
      title: 'Force Text Color ( Default:  Black/White depending on Browser dark mode.)',
      name: 'textVariant',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Black', value: 'black' }
        ]
      },
    },
    {
      title: 'Background Type',
      name: 'bgType',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Video', value: 'video' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'photos',
      type: 'object',
      inputComponent: ConditionalFields,
      fields: [
        {
          title: 'Background Photo (mobile)',
          name: 'mobilePhoto',
          type: 'figure'
        },
        {
          title: 'Background Photo (desktop)',
          name: 'desktopPhoto',
          type: 'figure'
        }
      ],
      options: {
        condition: (document, context) => {
          return true
          //if (typeof context == 'function') return context().bgType === 'photo'
        }
      }
    },
    {
      name: 'video',
      type: 'object',
      inputComponent: ConditionalFields,
      fields: [
        {
          title: 'Background Video',
          name: 'id',
          type: 'string',
          description:
            'Alternatively, enter a vimeo ID to show a looping video instead'
        },
        {
          title: 'Background Video Title',
          name: 'title',
          type: 'string',
          description: 'Short title/description of the video'
        }
      ],
      options: {
        condition: (document, context) => {
          // context && context().bgType === 'video'
          if (typeof context == 'function') return context().bgType === 'video'
        }
      }
    }
  ],
  preview: {
    select: {
      photo: 'photo',
      content: 'content.0.children'
    },
    prepare({ photo, content }) {
      return {
        title: 'Hero',
        subtitle: content && content[0]?.text,
        media: photo
      }
    }
  }
}
