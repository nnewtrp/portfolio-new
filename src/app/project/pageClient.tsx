'use client'
import { Divider, Grid } from "@mui/material"
import CustomIcon from "@/components/CustomIcon"
import styles from "./page.module.css"
import projectList from "./projects.json"

export default function ProjectPageClient() {
  return (
    <>
      {projectList.map((header) => (
        <div key={header.title} className={styles.mainContainer}>
          {/* Title */}
          <h1 className={styles.title}>{header.title}</h1>
          <Divider />

          {/* Items */}
          <Grid container sx={{ marginTop: "10px" }} spacing={2}>
            {header.items.map((item) => (
              <Grid key={item.name} size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }} className={styles.item}>
                {/* Project Name */}
                <h1 className={styles.itemTitle}>{item.name}</h1>

                <Divider sx={{ marginY: 1 }} />

                {/* Project Description */}
                <div className={styles.itemDescription}>
                  {item.description}
                </div>

                <div style={{ flex: 1 }} />

                {/* Icons */}
                <div className={styles.itemIconContainer}>
                  {item.web_url ?
                    <CustomIcon icon="Website" onClick={() => {window.open(item.web_url)}} />
                  : null}
                  {item.github_path ?
                    <CustomIcon
                      icon="GitHub"
                      onClick={() => {window.open(process.env.NEXT_PUBLIC_GITHUB_URL + item.github_path)}}
                    />
                  : null}
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </>
  )
}