export default {
  title: 'Blog Page',
  name: 'blogPage',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // disable for initial publish
  fields: [
    {
      title: 'Overlay header with transparency?',
      name: 'hasTransparentHeader',
      type: 'boolean',
      description:
        'When toggled on, the header will appear with a transparent background over the first content module and text/logos will be white until scrolling is engaged.'
    },
    {
      title: 'Page Modules',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'grid' },
        { type: 'hero' },
        { type: 'marquee' },
        { type: 'dividerPhoto' }
      ]
    },
    {
      title: 'Featured Posts',
      name: 'featuredPosts',
      description:
        'Show these posts first, before sorting remaining posts by date ', //TODO: Sort by date
      type: 'array',
      of: [
        {
          title: 'Posts',
          type: 'reference',
          to: [{ type: 'post' }]
        }
      ],
      validation: Rule => Rule.unique()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Blog Page'
      }
    }
  }
}
