import React from "react"
import styled from "styled-components"

const Styled = styled.div`
  padding: 1rem 0;
  text-align: center;
  font-size: 0.9rem;
`

const Badge = () => (
  <Styled>
    Built with{" "}
    <span role="img" aria-labelledby="love">
      ❤️
    </span>
    <span> </span>from home during lockdown by
    <a href="https://www.twitter.com/itsMaadh" target="_blank" rel="noreferrer">
      {" "}
      @Maadh
    </a>
    <a
      href="https://www.linkedin.com/in/satwik-gawand/"
      target="_blank"
      rel="noreferrer"
    >
      , @Satwik{" "}
    </a>
    <a href="https://www.github.com/raoufswe" target="_blank" rel="noreferrer">
      & @Raouf{" "}
    </a>
  </Styled>
)

export default Badge
