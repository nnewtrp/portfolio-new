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
            src="/home/me1.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer} style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 64 }}>Teerapat Satitporn</h1>
          <p className={styles.description}>Software Developer</p>
        </div>
      </Box>

      {/* About Me */}
      <Box sx={[containerStyle, reverseStyle]}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/me2.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer} style={{ color: 'white' }}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
            I am a software developer based in <b>Bangkok, Thailand</b>.
            I graduated with a degree in <b>Information Technology</b>
            and have over <b>3 years</b> of experience
            in web and application development.
          </p>
        </div>
      </Box>

      {/* Education */}
      <Box sx={containerStyle}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/study.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Education</h1>
          <p className={styles.description}>
            Some description here
          </p>
        </div>
      </Box>

      {/* Work Experience */}
      <Box sx={[containerStyle, reverseStyle]}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/work.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer} style={{ color: 'white' }}>
          <h1 className={styles.title}>Work Experience</h1>
          <p className={styles.description}>
            Some description here
          </p>
        </div>
      </Box>

      {/* Skills */}
      <Box sx={containerStyle}>
        <div className={styles.mainContainer} style={{ textAlign: 'center' }}>
          <h1 className={styles.title}>Skills & Abilities</h1>
        </div>
      </Box>

      {/* Contact */}
      <Box sx={[containerStyle, reverseStyle]}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/me3.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer} style={{ color: 'white' }}>
          <h1 className={styles.title}>Contact</h1>
        </div>
      </Box>
    </>
  );
}