import themes from '../packages/darin-ui/src/themes';
import { ThemeProvider } from '@emotion/react';
import { withThemesProvider } from "themeprovider-storybook";


export const decorators = [
  withThemesProvider(themes, {
    CustomThemeProvider: ThemeProvider
  })
];


export const parameters = {
  layout: 'centered',
  backgrounds: {
    values: [
      {
        name: "twitter",
        value: "#00aced",
      },
      {
        name: "facebook",
        value: "#3b5998",
      },
      {
        name: "light",
        value: "#fff",
      },
      {
        name: "dark",
        value: "#22242a",
      },
    ],
  },
}
