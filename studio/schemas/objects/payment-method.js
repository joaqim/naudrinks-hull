import {FaCcPaypal, FaCcVisa, FaCcMastercard, FaCcStripe}from 'react-icons/fa'

const getIcon = icon => { 
  switch(icon) {
    case 'Visa': return FaCcVisa;
    case 'Mastercard': return FaCcMastercard;
    case 'Stripe': return FaCcStripe;
    case 'PayPal': return FaCcPaypal;
    default: return false;
  }
}

export default {
  title: 'Payment Method',
  name: 'paymentMethod',
  type: 'object',
  options: {
    columns: 2,
    collapsble: false
  },
  fields: [
    {
      title: 'Provider (Visa,Stripe, PayPal etc...)',
      name: 'icon',
      type: 'string',
      list: [
        {title: 'Mastercard', value: "Mastercard"},
        {title: 'Visa', value: "Visa"},
        {title: 'Stripe', value: "Stripe"},
        {title: 'PayPal', value: "PayPal"}
      ]
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      url: 'url'
    },
    prepare({ icon, url }) {
      return {
        title: icon,
        subtitle: url ? url : '(url not set)',
        media: getIcon(icon)
      }
    }
  }


}
