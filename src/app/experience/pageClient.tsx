'use client'
import Image from "next/image"
import { Divider, Grid } from "@mui/material"
import styles from "./page.module.css"
import jobList from "./jobs.json"
import moment from "moment"

// Logo Size
const logoSize = 100

// Function to calculate duration between two dates
function getDuration(startDate: string, endDate?: string) {
  const start = moment(startDate)
  const end = endDate ? moment(endDate) : moment()
  end.add(1, "months")
  const years = end.diff(start, "years")
  start.add(years, "years")
  const months = end.diff(start, "months")
  
  let sentence = ""
  if (years > 0) sentence += years + (years === 1 ? " year " : " years ")
  if (months > 0) sentence += months + (months === 1 ? " month" : " months")
  return sentence.trim()
}

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
        <Grid
          key={item.short_name}
          className={styles.itemContainer}
          sx={{
            ':hover': {
              borderColor: item.color,
              transition: "color 0.5s ease",
              [`& .${styles.companyName}`]: { textDecoration: "underline", color: item.color, transition: "color 0.5s ease" }
            }
          }}
          onClick={() => {window.open(item.website)}}
        >
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
              {item.endDate ? moment(item.endDate).format("MMM YYYY") : "Present"}&nbsp;
              ({getDuration(item.startDate, item.endDate || undefined)})
            </p>
          </div>
        </Grid>
      ))}
    </div>
  )
}