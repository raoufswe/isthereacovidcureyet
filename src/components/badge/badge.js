import React from "react"
import styles from "./badge.module.css"

const Badge = ({ titleColor, title, numbersColor, numbers }) => (
  <div className={styles.container}>
    <div style={{ backgroundColor: titleColor }} className={styles.title}>
      {title}
    </div>
    <div style={{ backgroundColor: numbersColor }} className={styles.numbers}>
      {numbers}
    </div>
  </div>
)

export default Badge
