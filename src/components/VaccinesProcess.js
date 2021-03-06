import React from "react"
import styles from "./vaccinesProcess.module.css"
import ShareIcon from "../assets/share"

const VaccinesProcess = () => (
  <div className={styles.processWrapper}>
    <div className={styles.processTitle}>How are vaccines made?</div>
    <div className={styles.cardContainer}>
      <a
        href="https://www.webmd.com/lung/covid-19-vaccine#1"
        target="_blank"
        rel="noreferrer"
      >
        <ShareIcon className={styles.shareIcon} />
      </a>
      <ul className={styles.processList}>
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
