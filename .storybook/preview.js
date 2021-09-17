import { themes } from '@storybook/theming';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

import './../src/styles/tailwind.css';

import light from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/themes/light.css'
import dark from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/themes/dark.css'

export const decorators = [
  cssVariablesTheme,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light,
  },
  cssVariables: {
    files: {
      light,
      dark
    }
  }
}