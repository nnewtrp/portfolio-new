'use client'
import { Divider } from "@mui/material"
import CustomIcon from "../CustomIcon"
import styles from "./layout.module.css"

const iconColor = "white"

export default function Footer() {
  return (
    <>
      <div style={{ flex: 1 }} />
      <Divider />
      <div className={styles.bottomBarContainer}>
        <div style={{ flex: 1 }} />
        <CustomIcon icon="Email" color={iconColor} />
        <CustomIcon icon="Instagram" color={iconColor} />
        <CustomIcon icon="Facebook" color={iconColor} />
        <CustomIcon icon="GitHub" color={iconColor} />
        <CustomIcon icon="LinkedIn" color={iconColor} />
      </div>
    </>
  )
}