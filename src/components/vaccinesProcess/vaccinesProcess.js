import React from "react"
import styles from "./vaccinesProcess.module.css"
import ShareIcon from "../../assets/share"

const VaccinesProcess = () => (
  <div>
    <div className={styles.title}>How are vaccines made?</div>
    <div className={styles.container}>
      <ShareIcon className={styles.shareIcon} />
      <ul>
        <li>
          <span>Exploratory Stage</span>
        </li>
        <li>
          <span>Pre-clinical Stage</span>
        </li>
        <li>
          <span>Clinical Development</span>
        </li>
        <li>
          <span>Regulatory review and approval</span>
        </li>
        <li>
          <span>Manufacturing</span>
        </li>
        <li>
          <span>Quality Control</span>
        </li>
      </ul>
    </div>
  </div>
)

export default VaccinesProcess
