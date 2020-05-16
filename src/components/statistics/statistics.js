import React from "react"
import styles from "./statistics.module.css"
import Badge from "../badge"

const Statistics = () => (
  <div className={styles.sContainer}>
    <div className={styles.title}>COVID-19 Statistics</div>
    <div className={styles.statistics}>
      <Badge
        titleColor="#FAFF08"
        title="Active Cases"
        numbersColor="#CCD00D"
        numbers="100,000,000"
      />
      <Badge
        titleColor="#08FF3F"
        title="Recovered Cases"
        numbersColor="#1CD00D"
        numbers="100,000,000"
      />
    </div>
  </div>
)

export default Statistics
