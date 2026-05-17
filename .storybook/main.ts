import type { StorybookConfig } from '@storybook/react-vite'
import type { InlineConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
  viteFinal: async (config: InlineConfig) => {
    return {
      ...config,
      base: process.env.STORYBOOK_BASE_URL ?? '/',
    }
  },
}

export default config
