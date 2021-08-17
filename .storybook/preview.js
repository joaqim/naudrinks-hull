// import { RouterContext } from 'next/dist/shared/lib/router-context'
import { RouterContext } from 'next/dist/next-server/lib/router-context' // next < 11.2
import '../src/styles/tailwind.css'
import '../src/styles/app.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
