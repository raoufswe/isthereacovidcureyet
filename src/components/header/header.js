import React from "react"
import { Link } from "gatsby"
import DoctorsIllustartion from "../../assets/doctors.jsx"
import styles from "./header.module.css"
import HappyIcon from "../../assets/happyIcon"

const Header = () => (
  <div>
    <div className={styles.header}>
      <Link to="/">isthereacovidcureyet</Link>
    </div>
    <div className={styles.cureStatus}>
      <div>Is there a cure for COVID-19 yet?</div>
      <div className={styles.statusBox}>
        <HappyIcon />
        <span>NO</span>
      </div>
    </div>

    <div className={styles.doctors}>
      <DoctorsIllustartion />
    </div>
  </div>
)

export default Header
