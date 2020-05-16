import React from "react"
import styles from "./card.module.css"
import ShareIcon from "../../assets/share"

const Card = ({ date, content, articalLink }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.date}>{date}</div>
      {articalLink && (
        <a href={articalLink} target="_blank" rel="noopener noreferrer">
          <ShareIcon />
        </a>
      )}
    </div>

    <p>{content}</p>
  </div>
)

export default Card
