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
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
