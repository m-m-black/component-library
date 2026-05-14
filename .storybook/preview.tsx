/// <reference types="vite/client" />
import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  globalTypes: {
    colorScheme: {
      name: 'Color scheme',
      defaultValue: 'light',
      toolbar: {
        icon: 'sun',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const dark = context.globals.colorScheme === 'dark'
      document.documentElement.classList.toggle('dark', dark)
      return <Story />
    },
  ],

  parameters: {
    viewport: {
      options: {
        mobile: { name: 'Mobile', styles: { width: '390px', height: '844px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '900px' } },
      },
      defaultViewport: 'desktop',
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
}

export default preview
