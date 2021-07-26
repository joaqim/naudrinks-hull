import S from '@sanity/desk-tool/structure-builder'

import * as I18nS from 'sanity-plugin-intl-input/lib/structure'
import { i18n } from './schemas/translation/documentTranslation'

import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'

import {
  GrDocumentText as FieldIcon,
  GrMultiple as DocumentIcon,
  GrTextAlignLeft as PostIcon,
  GrUser as AuthorIcon,
  GrArticle as ArticleIcon
} from 'react-icons/gr'

import {
  FiAnchor,
  FiHome,
  FiSettings,
  FiGlobe,
  FiAlertOctagon,
  FiMenu,
  FiNavigation,
  FiRepeat,
  FiShoppingCart,
  FiGift,
  FiCopy,
  FiTag,
  FiCheckSquare,
  FiFolder,
  FiPaperclip,
  FiCamera
} from 'react-icons/fi'

import SeoPreview from './components/previews/seo/seo-preview'

//TODO: Make sure to change in production
const remoteURL = 'https://naudrinks.joaqim.com'
const localURL = 'http://localhost:3000'
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

const hiddenDocTypes = listItem =>
  ![
    'homePage',
    'shopPage',
    'errorPage',
    'page',
    'product',
    'productVariant',
    'collection',

    'generalSettings',
    'cookieSettings',
    'promoSettings',
    'headerSettings',
    'footerSettings',
    'cartSettings',
    'seoSettings',

    'menu',
    'siteSettings',
    'redirect',

    'post',
    'author',
    'category',
    'blogPage'
  ].includes(listItem.getId())

export const getDefaultDocumentNode = props => {
  if (props.schemaType === 'post') {
    return S.document().views(
      I18nS.getDocumentNodeViewsForSchemaType(props.schemaType)
    )
  }
  return S.document()
}

export default () =>
  S.list()
    .title('Website')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General')
                .child(
                  S.editor()
                    .id('generalSettings')
                    .schemaType('generalSettings')
                    .documentId('generalSettings')
                )
                .icon(FiSettings),
              S.listItem()
                .title('Cookie Consent')
                .child(
                  S.editor()
                    .id('cookieSettings')
                    .schemaType('cookieSettings')
                    .documentId('cookieSettings')
                )
                .icon(FiCheckSquare),
              S.listItem()
                .title('Promo Bar')
                .child(
                  S.editor()
                    .id('promoSettings')
                    .schemaType('promoSettings')
                    .documentId('promoSettings')
                )
                .icon(FiTag),
              S.listItem()
                .title('Header')
                .child(
                  S.editor()
                    .id('headerSettings')
                    .schemaType('headerSettings')
                    .documentId('headerSettings')
                )
                .icon(FiNavigation),
              S.listItem()
                .title('Footer')
                .child(
                  S.editor()
                    .id('footerSettings')
                    .schemaType('footerSettings')
                    .documentId('footerSettings')
                )
                .icon(FiAnchor),
              S.listItem()
                .title('Cart')
                .child(
                  S.editor()
                    .id('cartSettings')
                    .schemaType('cartSettings')
                    .documentId('cartSettings')
                )
                .icon(FiShoppingCart),
              S.listItem()
                .title('Error Page')
                .child(
                  S.editor()
                    .id('errorPage')
                    .schemaType('errorPage')
                    .documentId('errorPage')
                )
                .icon(FiAlertOctagon),
              S.listItem()
                .title('Default SEO / Share')
                .child(
                  S.editor()
                    .id('seoSettings')
                    .schemaType('seoSettings')
                    .documentId('seoSettings')
                )
                .icon(FiGlobe),
              S.listItem()
                .title('Menus')
                .child(S.documentTypeList('menu').title('Menus'))
                .icon(FiMenu),
              S.listItem()
                .title('Redirects')
                .child(S.documentTypeList('redirect').title('Redirects'))
                .icon(FiRepeat)
            ])
        )
        .icon(FiSettings),
      S.divider(),
      S.listItem()
        .title('Home')
        .child(
          S.document()
            .title('Home Page')
            .id('homePage')
            .documentId('homePage')
            .schemaType('homePage')
            .views([
              S.view.form().icon(EditIcon),
              S.view
                .component(SeoPreview)
                .options({ previewURL })
                .icon(EyeIcon)
                .title('SEO Preview')
            ])
        )
        .icon(FiHome),
      S.divider(),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(
          S.documentTypeList('page')
            .title('Pages')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('page')
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(SeoPreview)
                    .options({ previewURL })
                    .icon(EyeIcon)
                    .title('SEO Preview')
                ])
            )
        ),
      S.divider(),
      S.listItem()
        .title('Shop')
        .id('shop')
        .child(
          S.list()
            .title('Shop')
            .items([
              S.listItem()
                .title('Products')
                .icon(FiGift)
                .child(
                  S.documentTypeList('product')
                    .title('Products')
                    .child(documentId =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('product')
                        .views([
                          S.view.form().icon(EditIcon),
                          S.view
                            .component(SeoPreview)
                            .options({ previewURL })
                            .icon(EyeIcon)
                            .title('SEO Preview')
                        ])
                    )
                ),
              S.listItem()
                .title('Product Variants')
                .icon(FiCopy)
                .child(
                  S.documentTypeList('product')
                    .title('By Product')
                    .menuItems(S.documentTypeList('product').getMenuItems())
                    .filter('_type == $type')
                    .params({ type: 'product' })
                    .child(productID =>
                      S.documentList()
                        .title('Variants')
                        .menuItems(
                          S.documentTypeList('productVariant').getMenuItems()
                        )
                        .filter('_type == $type && productID == $id')
                        .params({
                          type: 'productVariant',
                          id: Number(productID.replace('product-', ''))
                        })
                        .child(documentId =>
                          S.document()
                            .documentId(documentId)
                            .schemaType('productVariant')
                            .views([
                              S.view.form().icon(EditIcon),
                              S.view
                                .component(SeoPreview)
                                .options({ previewURL })
                                .icon(EyeIcon)
                                .title('SEO Preview')
                            ])
                        )
                    )
                ),
              S.listItem()
                .title('Collections')
                .schemaType('collection')
                .child(
                  S.documentTypeList('collection')
                    .title('Collections')
                    .child(documentId =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('collection')
                        .views([
                          S.view.form().icon(EditIcon),
                          S.view
                            .component(SeoPreview)
                            .options({ previewURL })
                            .icon(EyeIcon)
                            .title('SEO Preview')
                        ])
                    )
                ),
              S.listItem()
                .title('Shop All Page')
                .icon(FiShoppingCart)
                .child(
                  S.editor()
                    .title('Shop All Page')
                    .id('shopPage')
                    .schemaType('shopPage')
                    .documentId('shopPage')
                )
            ])
        )
        .icon(FiShoppingCart),
      S.divider(),
      S.listItem()
        .title('Blog')
        .child(
          S.document()
            .title('Blog Page')
            .id('blogPage')
            .documentId('blogPage')
            .schemaType('blogPage')
            .views([
              S.view.form().icon(EditIcon),
              S.view
                .component(SeoPreview)
                .options({ previewURL })
                .icon(EyeIcon)
                .title('SEO Preview')
            ])
        )
        .icon(FiCamera),
      S.divider(),
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Posts')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('post')
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(SeoPreview)
                    .options({ previewURL })
                    .icon(EyeIcon)
                    .title('SEO Preview')
                ])
            )
        ),
      S.divider(),
      S.listItem()
        .title('Categories')
        .child(S.documentTypeList('category')),
      S.listItem()
        .title('Authors')
        .child(S.documentTypeList('author')),
      S.listItem()
        .title('Field level')
        .icon(FieldIcon)
        .child(
          S.list()
            .id('field-level')
            .title('Field level translations')
            .items([
              /*S.documentTypeListItem('article').icon(ArticleIcon),*/
              S.documentTypeListItem('author').icon(AuthorIcon)
            ])
        ),
      S.listItem()
        .title('Document level')
        .icon(DocumentIcon)
        .child(
          S.list()
            .id('doc-level')
            .title('Document level translations')
            .items([
              S.listItem()
                .title('Post')
                .id('post-docs')
                .icon(PostIcon)
                .schemaType('post')
                .child(
                  S.documentList()
                    .id('post')
                    .title('Posts')
                    // Use a GROQ filter to get documents.
                    .filter(
                      '_type == "post" && (!defined(_lang) || _lang == $baseLang)'
                    )
                    .params({ baseLang: i18n.base })
                    .canHandleIntent((_name, params, _context) => {
                      // Assume we can handle all intents (actions) regarding post documents
                      return params.type === 'post'
                    })
                )
            ])
        ),
      /*
                .child
                  documentId =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('post')
                    .views([
                      S.view.form().icon(EditIcon),
                      S.view
                        .component(SeoPreview)
                        .options({ previewURL })
                        .icon(EyeIcon)
                        .title('SEO Preview')
                    ])
                    */ /*
                ),
              S.listItem()
                .title('Posts')
                .child(S.documentTypeList('post')),
  */ /*
              S.listItem()
                .title('Categories')
                .child(S.documentTypeList('category')),
              S.listItem()
                .title('Authors')
                .child(S.documentTypeList('author'))
            ])
        ),
  */ /*
      S.listItem()
        .title('Blog')
        .id('blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Posts')
                .icon(FiPaperclip)
                .child(
                  S.documentTypeList('post')
                    .title('Posts')
                    .child(documentId =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('post')
                        .views([
                          S.view.form().icon(EditIcon),
                          S.view
                            .component(SeoPreview)
                            .options({ previewURL })
                            .icon(EyeIcon)
                            .title('SEO Preview')
                        ])
                    )
                )
            ])
        )
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Blog Page')
                .icon(FiFolder)
                .child(
                  S.editor()
                    .title('Blog Page')
                    .id('blogPage')
                    .schemaType('blogPage')
                    .documentId('blogPage')
                  /*
                    .views([
                      S.view.form().icon(EditIcon),
                      S.view
                        .component(SeoPreview)
                        .options({ previewURL })
                        .icon(EyeIcon)
                        .title('SEO Preview')
                    ])
                    */ ...S.documentTypeListItems().filter(
        hiddenDocTypes
      )
    ])
