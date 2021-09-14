import { Meta, Story } from '@storybook/react'
import Header, { HeaderProps } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />
/*
Default.args = {
  data: {
    promo: {},
    menuDesktopLeft: {
      items: [
        {
          dropdownItems: [
            // { id: '1', title: "DropDown", items: [{ url: "#", title:"Item One" }] }
          ],
          title: 'Item Left',
        },
      ],
      useMegaNav: true,
    },
    menuDesktopRight: {
      items: [
        { dropdownItems: [], title: 'Item Right', page: { type: '_page' } },
      ],
    },
    menuMobilePrimary: {
      items: [{ dropdownItems: [], title: 'Item Primary' }],
    },
    menuMobileSecondary: {
      items: [{ dropdownItems: [], title: 'Item Secondary' }],
    },
  },
}
*/

Default.args = {
  data: {
    menuDesktopLeft: {
      items: [
          // {dropdownItems: [], title: "1"}
        {
          _key: 'aa457bcd2c41',
          _type: 'navPage',
          dropdownItems: [],
          page: {
            slug: "",
            type: 'homePage',
          },
          title: 'Home',
          url: "",
        },
        {
          _key: '683e02b2a34a',
          _type: 'navPage',
          dropdownItems: [],
          featured: "",
          page: {
            slug: "",
            type: 'shopPage',
          },
          title: 'Shop',
          url: "",
        },
        {
          _key: '16b5354d92dd',
          _type: 'navPage',
          dropdownItems: [],
          featured: "",
          page: {
            slug: "",
            type: 'shopPage',
          },
          title: 'Nau Monthly',
          url: "",
        },
        {
          _key: 'dd7d25dd974c',
          _type: 'navPage',
          dropdownItems: [],
          featured: "",
          page: {
            slug: "",
            type: 'shopPage',
          },
          title: 'Try NAU',
          url: "",
        },
        {
          _key: '1bf8e2180d56',
          _type: 'navPage',
          dropdownItems: [],
          featured: "",
          page: {
            slug: 'about',
            type: 'page',
          },
          title: 'About',
          url: "",
        },
      ],
    },
    menuDesktopRight: {
      items: [ ],
    },
    menuMobilePrimary: {
      items: [
        {
          _key: 'efba303e9ad6',
          _type: 'navPage',
          dropdownItems: [],
          page: {
            slug: "",
            type: 'homePage',
          },
          title: 'Home',
          url: "",
        },
        {
          _key: 'b2d6f0e17dc8',
          _type: 'navPage',
          dropdownItems: [],
          page: {
            slug: "",
            type: 'shopPage',
          },
          title: 'Shop',
          url: "",
        },
        {
          _key: '139f3f8fe5eb',
          _type: 'navPage',
          dropdownItems: [],
          page: {
            slug: "",
            type: 'shopPage',
          },
          title: 'NAU Monthly',
          url: "",
        },
        {
          _key: 'd08788305478',
          _type: 'navPage',
          dropdownItems: [],
          page: {
            slug: "",
            type: 'shopPage',
          },
          title: 'Try NAU',
          url: "",
        },
      ],
    },
    menuMobileSecondary: {
      items: [
        {
          _key: 'fc0da395bb13',
          _type: 'navPage',
          dropdownItems: [],
          page: {
            slug: "",
            type: 'blogPage',
          },
          title: 'Blog',
          url: "",
        },
        {
          _key: 'a12bb94d189b',
          _type: 'navPage',
          dropdownItems: [],
          page: {
            slug: 'about',
            type: 'page',
          },
          title: 'About',
          url: "",
        },
        {
          _key: 'f2a78ab7dc4a',
          _type: 'navPage',
          dropdownItems: [],
          page: {
            slug: 'faq',
            type: 'page',
          },
          title: 'Faq',
          url: "",
        },
      ],
    },
    promo: {
      /*
      display: 'home',
      link: {
        slug: "",
        type: 'blogPage',
      },
      text: 'Check out our new Blog!',
      */
    },
  },
}

export const WithBackground: Story<HeaderProps> = (args) => <Header {...args} />
WithBackground.args = {
  ...Default.args,
  classes: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
}
