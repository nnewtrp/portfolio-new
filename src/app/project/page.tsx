'use client'
import { Divider } from "@mui/material"
import CustomIcon from "@/components/CustomIcon"
import styles from "./page.module.css"
import projectList from "./projects.json"

export default function ProjectPage() {
  return (
    <>
      {projectList.map((header) => (
        <div key={header.title} className={styles.mainContainer}>
          {/* Title */}
          <h1 className={styles.title}>{header.title}</h1>
          <Divider />

          {/* Items */}
          <div className={styles.itemContainer}>
            {header.items.map((item) => (
              <div key={item.name} className={styles.item}>
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
                  {item.github_path ? (
                    <CustomIcon
                      icon="GitHub"
                      onClick={() => {window.open(process.env.NEXT_PUBLIC_GITHUB_URL + item.github_path)}}
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}