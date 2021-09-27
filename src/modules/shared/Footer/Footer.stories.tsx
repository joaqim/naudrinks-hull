import { Meta, Story } from '@storybook/react'
import Footer, { FooterProps } from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta

export const Default: Story<FooterProps> = (args) => <Footer {...args} />

Default.args = {
  data: {
    blocks: [
      // { title: 'News', newsletter: {terms: [{_key: "0",_type: 'block',children: <><span>I agree to the </span> <span>terms</span></>, style: 'normal', }]} },

      { title: 'News', menu: [] },
      {
        title: 'Learn',
        menu: {
          items: [
          ],
        },
      },
      // { title: 'Help', menu: {slug:'#',items: [{type: 'navLink',title: "Try NAU", url: "#"}]} },
      // { title: 'Help', menu: {slug:'#',items: [{title: "Try NAU", url: "#"}]} },
      { title: 'Help', menu: [] },
      {
        title: 'Social',
        social: [
          { url: '#', icon: 'Twitter' },
          { url: '#', icon: 'Facebook' },
          { url: '#', icon: 'Instagram' },
        ],
      },
      {
        paymentMethods: [
          { url: '#', icon: 'Visa' },
          { url: '#', icon: 'Mastercard' },
          { url: '#', icon: 'PayPal' },
        ],
      },
      // {menu: {items: [{title: 'Next', page: {type: "_page"}}]}},
    ],
  },
}
