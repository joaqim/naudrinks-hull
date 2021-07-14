export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  /*
  i18n: {
    base: 'en_US',
    messages: {
      loading: 'Loading languages...',
      missing: 'Missing',
      draft: 'Draft',
      publishing: 'Publishing...',
      publish: 'Publish',
      deleteAll: {
        buttonTitle: 'Delete (incl. translations)',
        deleting: 'Deleting...'
      },
      duplicateAll: {
        buttonTitle: 'Duplicate (incl. translations)',
        duplicating: 'Duplicating...'
      },
      translationsMaintenance: {
        title: 'Translation Maintenance',
        selectSchemaPlaceholder: 'Select schema type',
        idStructureMismatch: 'document(s) with mismatched ID structures',
        missingLanguageField: 'document(s) are missing the language field',
        missingDocumentRefs: 'document(s) have missing translation references',
        orphanDocuments: 'orphaned translation document(s)',
        referenceBehaviorMismatch:
          'document(s) with mismatched reference behaviors',
        fix: 'Fix'
      }
    },
    fieldNames: {
      lang: '__i18n_lang',
      references: '__i18n_refs'
    }
  },
  */
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
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
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
      of: [{ type: 'reference', to: { type: 'category' } }]
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
      }
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
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
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
