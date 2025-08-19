import { Box, Button } from "@mui/material"
import styles from "./page.module.css"

// Styles
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

// School Info List
const schoolList = [
  { name: "", period: "", program: "", colors: [] }
]

export default function Education() {
  return (
    <>
      {/* White */}
      <Box sx={containerStyle}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/study.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer} style={{ color: 'white' }}>
          <h1 className={styles.title}>Education</h1>
          <p className={styles.description}>
            Degree in <b>Information Technology</b> — see my full academic journey from school to university.
          </p>
          <Button variant="outlined" sx={buttonBlackStyle} suppressHydrationWarning>
            See More {'>>>'}
          </Button>
        </div>
      </Box>

      {/* Black */}
      <Box sx={[containerStyle, reverseStyle]}>
        <Box sx={imageContainerStyle}>
          <img
            src="/home/work.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer}>
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
    </>
  )
}