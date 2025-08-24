'use client'
import { Divider, Box } from "@mui/material"
import CustomIcon from "../CustomIcon"
import styles from "./layout.module.css"

const iconColor = "white"

export default function Footer() {
  return (
    <>
      <div style={{ flex: 1 }} />
      <Divider />
      <div className={styles.bottomBarContainer}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <b className={styles.bottomText}>Designed by Teerapat Satitporn</b>
        </Box>
        <div style={{ flex: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <p className={styles.bottomText}>Follow Me: </p>
        </Box>
        <CustomIcon icon="Email" color={iconColor} />
        <CustomIcon icon="GitHub" color={iconColor} />
        <CustomIcon icon="LinkedIn" color={iconColor} />
        <CustomIcon icon="Instagram" color={iconColor} />
        <CustomIcon icon="Facebook" color={iconColor} />
      </div>
    </>
  )
}