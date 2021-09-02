import { Meta, Story } from '@storybook/react'
import Header, { HeaderProps } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />
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

export const WithBackground: Story<HeaderProps> = (args) => <Header {...args} />
WithBackground.args = {
  ...Default.args,
  classes: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
}
