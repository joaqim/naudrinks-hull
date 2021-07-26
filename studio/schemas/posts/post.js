export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  // This property says we should have all fields localized,
  // except any field that explicitly says localize: false
  localize: true,

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      localize: false
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      localize: false
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      localize: false
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      },
      localize: false
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',

      options: {
        source: 'description',
        maxLength: 200,
        validation: Rule => Rule.required()
      }
    },
    {
      name: 'body',
      title: 'Body',
      //type: 'blockContent'
      type: 'richText'
    }
  ],

  preview: {
    select: {
      title: 'title',
      //author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
