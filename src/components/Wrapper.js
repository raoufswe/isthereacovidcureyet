import "typeface-fira-sans"
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "../themes/theme"
import "./wrapper.css"

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  background-color: ${props => props.theme.background};
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

.statistics-section {
  display:flex;
  .userLocationSummary {
  margin-left: 1rem
  }
}

@media only screen and (max-width: 1024px) {
  .statistics-section {
flex-direction: column;
.userLocationSummary {
  margin-left: 0
  }
  }
}

`

export default function Wrapper({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
