import { Meta, Story } from '@storybook/react'
import Accordion, { AccordionProps } from './Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta

export const Default: Story<AccordionProps> = (args) => <Accordion {...args} />
Default.args = {
  toggle: true,
  id: '1',
  title: 'Accordion 1',
  children: <div>Test</div>,
}
