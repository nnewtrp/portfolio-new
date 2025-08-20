'use client'
import styles from "./page.module.css"
import jobList from "./jobs.json"
import moment from "moment"

export default function Education() {
  return (
    <div className={styles.mainContainer}>
      {/* Title */}
      <h1 className={styles.title}>Work Experience</h1>

      {/* Work Experience Timeline */}
      {jobList.map((item) => {return (
        <div key={item.short_name} className={styles.itemContainer}>
          <div>
            <h3 className={styles.companyName}>{item.company}</h3>
            <p className={styles.position}>{item.position}</p>
            <p className={styles.period}>
              {moment(item.startDate).format("MMM YYYY")} - {item.endDate ? moment(item.endDate).format("MMM YYYY") : "Present"}
            </p>
          </div>
        </div>
      )})}
    </div>
  )
}