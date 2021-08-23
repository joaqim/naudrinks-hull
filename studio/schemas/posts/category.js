export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  localize: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96
      },
      localize: false,
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
