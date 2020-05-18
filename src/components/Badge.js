import React from "react"
import styled from "styled-components"

const Styled = styled.div`
  display: flex;
  height: 100%;

  .badge-title {
    width: 60%;
    color: #000;
    font-weight: 500;
    font-size: large;
    border-radius: 15px 0 0 15px;
  }

  .badge-numbers {
    width: 100%;
    font-weight: 600;
    font-size: x-large;
    color: #ffffff;
    border-radius: 0 15px 15px 0;
  }

  .badge-title,
  .badge-numbers {
    padding: 1rem 2rem;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const Badge = ({ titleColor, title, numbersColor, numbers }) => (
  <Styled>
    <div style={{ backgroundColor: titleColor }} className="badge-title">
      {title}
    </div>
    <div style={{ backgroundColor: numbersColor }} className="badge-numbers">
      {numbers}
    </div>
  </Styled>
)

export default Badge
