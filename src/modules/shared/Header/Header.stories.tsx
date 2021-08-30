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
    menuDesktopLeft: {},
    menuDesktopRight: {},
    menuMobilePrimary: {},
    menuMobileSecondary: {},
  },
}

export const WithBackground: Story<HeaderProps> = (args) => <Header {...args} />
WithBackground.args = {
  ...Default.args,
  classes: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
}
