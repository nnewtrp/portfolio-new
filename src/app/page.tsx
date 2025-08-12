import { Box } from "@mui/material";
import styles from "./page.module.css";

var containerStyle = { flexGrow: 1, height: 600, overflow: 'hidden', display: 'flex' }
var reverseStyle = { flexDirection: 'row-reverse', backgroundColor: 'black' }
var imageContainerStyle = { display: { xs: 'none', md: 'block' }, overflow: 'hidden' }

export default function Home() {
  return (
    <>
      {/* Main */}
      <Box sx={containerStyle}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/HomeImage.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer} style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 64 }}>Teerapat Satitporn</h1>
          <p style={{ fontSize: 30, marginTop: 10 }}>Web Developer</p>
        </div>
      </Box>

      {/* Education */}
      <Box sx={[containerStyle, reverseStyle]}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/HomeImage.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer} style={{ color: 'white' }}>
          <h1 className={styles.title}>Education</h1>
        </div>
      </Box>

      {/* Work Experience */}
      <Box sx={containerStyle}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/HomeImage.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Work Experience</h1>
        </div>
      </Box>

      {/* Programming Skill */}

      {/* Contact */}
      
    </>
  );
}