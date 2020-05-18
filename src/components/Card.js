import React from "react"
import ShareIcon from "../assets/share"
import styled from "styled-components"

const Styled = styled.div`
  width: min(480px, 90%);
  height: 260px;
  background: #353a5e;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5raem;
  }

  .date {
    font-weight: 500;
    font-size: large;
    color: rgba(255, 255, 255, 0.3);
  }

  p {
    font-size: large;
    line-height: 1.5;
  }

  @media only screen and (max-width: 991px) {
    height: 100%;
    min-height: 280px;
  }
`

const Card = ({ date, content, articalLink }) => (
  <Styled>
    <div className="header">
      <div className="date">{date}</div>
      <a href={articalLink} target="_blank" rel="noopener noreferrer">
        <ShareIcon />
      </a>
    </div>
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  </Styled>
)

export default Card
