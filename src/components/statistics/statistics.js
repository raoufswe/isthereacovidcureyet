import React, { useEffect, useState } from "react"
import styles from "./statistics.module.css"
import Badge from "../badge"

const Statistics = () => {
  const [summary, setSummary] = useState(null)

  const fetchSummary = async () => {
    const response = await fetch("https://covid19.mathdro.id/api")

    if (response.ok) {
      let data = await response.json()
      setSummary(data)
    } else {
      console.log("something went wrong")
    }
  }

  useEffect(() => {
    fetchSummary()
  }, [])

  return (
    <div className={styles.sContainer}>
      <div className={styles.title}>COVID-19 Statistics</div>
      <div className={styles.statistics}>
        <Badge
          titleColor="#FAFF08"
          title="Active Cases"
          numbersColor="#CCD00D"
          numbers={summary?.confirmed?.value?.toLocaleString("en")}
        />
        <Badge
          titleColor="#08FF3F"
          title="Recovered Cases"
          numbersColor="#1CD00D"
          numbers={summary?.recovered?.value?.toLocaleString("en")}
        />
      </div>
    </div>
  )
}

export default Statistics
