import { Box, Button } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import styles from "./page.module.css"

const containerStyle = { flexGrow: 1, height: 600, overflow: 'hidden', display: 'flex' }
const reverseStyle = { flexDirection: 'row-reverse', backgroundColor: 'black' }
const imageContainerStyle = { display: { xs: 'none', md: 'block' }, overflow: 'hidden' }

const buttonStyle = { fontWeight: 'bold', marginTop: 5 }
const buttonBlackStyle = {
  ...buttonStyle,
  color: 'black', border: '2px solid black',
  ':hover': { background: 'black', color: 'white' }
}
const buttonWhiteStyle = {
  ...buttonStyle,
  color: 'white',
  border: '2px solid white',
  ':hover': { background: 'white', color: 'black' }
}

export default function Home() {
  return (
    <>
      {/* Main */}
      <Box sx={[containerStyle, { justifyContent: "center", alignItems: "center" }]}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/me1.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer} style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 64 }}>Teerapat Satitporn</h1>
          <p className={styles.description}>Software Developer</p>
        </div>
        <div style={{ display: "flex" }}>
          <EmailIcon />
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
            I graduated with a degree in <b>Information Technology</b> and
            have over <b>3 years of experience</b> in web and application development.
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
            Degree in <b>Information Technology</b> — see my full academic journey from school to university.
          </p>
          <Button variant="outlined" sx={buttonBlackStyle} suppressHydrationWarning>
            See More {'>>>'}
          </Button>
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
            Over <b>3 years of experience</b> in software development — learn more about
            my professional roles and the companies I’ve worked with.
          </p>
          <Button variant="outlined" sx={buttonWhiteStyle} suppressHydrationWarning>
            See More {'>>>'}
          </Button>
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