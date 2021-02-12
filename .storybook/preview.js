
import React from "react";
import { ThemeProvider } from 'styled-components';



const withThemeProvider=(Story,context)=>{
  const theme = {
    font: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    colors: {
      primary: '#c27',
      secondary: '#2c7'
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];

export const parameters = {
  backgrounds: {
    default: "light",
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
