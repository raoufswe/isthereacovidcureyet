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
    from home during lockdown by @Maadh @Satwik @Raouf
  </Styled>
)

export default Badge
