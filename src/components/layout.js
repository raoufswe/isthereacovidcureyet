import "typeface-fira-sans"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "../themes/theme"

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  background-color: ${props => props.theme.background};
  font-family: 'Fira Sans';
  color: #fff;
  height: 100%;

}

body {
  margin: 0 5vw;
}
a {
  color: #fff;
  text-decoration: none;
}
`

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
