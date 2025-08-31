'use client'
import Image from "next/image"
import { Divider } from "@mui/material"
import styles from "./page.module.css"
import jobList from "./jobs.json"
import moment from "moment"

// Logo Size
const logoSize = 100

export default function ExperiencePageClient() {
  return (
    <div className={styles.mainContainer}>
      {/* Title */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>💼 Experience</h1>
        <Divider />
      </div>

      {/* Work Experience Timeline */}
      {jobList.map((item) => (
        <div key={item.short_name} className={styles.itemContainer}>
          {/* Image */}
          <div className={styles.imageContainer}>
            <Image
              src={item.logo}
              alt={item.company}
              width={logoSize}
              height={logoSize}
              className={styles.logo}
            />
          </div>

          {/* Divider */}
          <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />

          {/* Text */}
          <div>
            <h3 className={styles.companyName}>{item.company}</h3>
            <p className={styles.position}>{item.position}</p>
            <p className={styles.period}>
              {moment(item.startDate).format("MMM YYYY")} -&nbsp;
              {item.endDate ? moment(item.endDate).format("MMM YYYY") : "Present"}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}