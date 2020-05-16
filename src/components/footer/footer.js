import React from "react"
import styles from "./footer.module.css"

const Badge = () => (
  <div className={styles.footer}>
    Built with{" "}
    <span role="img" aria-labelledby="love">
      ❤️
    </span>
    from home during lockdown by @Maadh @Satwik @Raouf
  </div>
)

export default Badge
