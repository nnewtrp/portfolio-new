import { Box, Button } from "@mui/material"
import CustomIcon from "@/components/CustomIcon"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import MapIcon from "@mui/icons-material/Map"
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

// Skill Part Items
const skillItems = [
  {
    title: "Programming Skills",
    description: "See the programming languages, frameworks, and tools I work with",
    link: () => {}
  },
  {
    title: "Personal Projects",
    description: "Look at some of the personal projects I’ve created",
    link: () => {}
  },
  {
    title: "Other Activities",
    description: "Explore my activities on Kaggle, LeetCode, and more",
    link: () => {}
  }
]

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
          <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
            <CustomIcon icon="Email" />
            <CustomIcon icon="Instagram" />
            <CustomIcon icon="Facebook" />
            <CustomIcon icon="GitHub" />
            <CustomIcon icon="LinkedIn" />
          </div>
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
            I’m a software developer based in <b>Bangkok, Thailand</b>.
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

          {/* Programming Skills */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.skillItemContainer}>
              <p className={styles.skillItemDescription}>
                See the programming languages, frameworks, and tools I work with
              </p>
            </div>
          </div>
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
        <div className={[styles.mainContainer, styles.contactContainer].join(' ')} style={{ color: 'white' }}>
          <h1 className={styles.title}>Contact</h1>
          
          <div>
            {/* Email */}
            <div className={styles.contactItem}>
              <EmailIcon className={styles.contactItemIcon} />
              <p className={styles.description}>
                { process.env.NEXT_PUBLIC_EMAIL }
              </p>
            </div>

            {/* Phone No */}
            <div className={styles.contactItem}>
              <PhoneIcon className={styles.contactItemIcon} />
              <p className={styles.description}>
                +66 80-XXX-XXXX
              </p>
            </div>

            {/* Address */}
            <div className={styles.contactItem}>
              <MapIcon className={styles.contactItemIcon} />
              <p className={styles.description}>
                Bangkok, Thailand
              </p>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}