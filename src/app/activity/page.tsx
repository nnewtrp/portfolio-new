'use client'
import { Divider, Grid } from "@mui/material"
import styles from "./page.module.css"
import activityList from "./activities.json"

const iconSize = 80

interface IconItemProps {
  iconPath: string,
  isDevicon: Boolean
}

const getImageIconPath = (item: IconItemProps) => {
  if (item.isDevicon) return process.env.NEXT_PUBLIC_PROGRAMMING_ICON_URL + item.iconPath
  return item.iconPath
}

export default function ActivityPage() {
  return (
    <div className={styles.mainContainer}>
      {/* Title */}
      <h1 className={styles.title}>Other Projects and Activities</h1>
      <Divider />

      {/* Items */}
      <Grid container sx={{ marginTop: "15px" }} spacing={2}>
        {activityList.map((item) => (
          <Grid
            key={item.title}
            size={{ xs: 12, md: 6, xl: 4 }}
            className={styles.item}
            onClick={() => {window.open(item.link)}}
          >
            {/* Image */}
            <div className={styles.iconContainer}>
              <img src={getImageIconPath(item)} alt={item.title} width={iconSize} />
            </div>
            
            <Divider orientation="vertical" flexItem />

            {/* Text */}
            <div className={styles.textContainer}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.text}>
                Username: <span className={styles.username}>{item.username}</span>
              </p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}