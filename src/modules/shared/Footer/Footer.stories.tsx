import { Meta, Story } from '@storybook/react'
import Footer, { FooterProps } from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta

export const Default: Story<FooterProps> = (args) => <Footer {...args} />
Default.args = {
  data: {
    blocks: [{
        title: "Social",
        social: [
        {url: "#", icon: "Twitter"},
        {url: "#", icon: "Facebook"},
        {url: "#", icon: "Instagram"}
        ],
        paymentMethods: [
        {url: "#", icon: "Visa"},
        {url: "#", icon: "Mastercard"},
        {url: "#", icon: "PayPal"},
        ]
      },
      // {menu: {items: [{title: 'Next', page: {type: "_page"}}]}},
      {title: "Newsletter", newsletter: {}}
      ]
    }
}

