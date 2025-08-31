'use client'
import Image from "next/image"
import { Box, Button, Divider } from "@mui/material"
import { useRouter } from 'next/navigation'
import CustomIcon from "@/components/CustomIcon"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import MapIcon from "@mui/icons-material/Map"
import styles from "./page.module.css"
import jobList from "./experience/jobs.json"
import moment from "moment"

// Styles
const containerStyle = { flexGrow: 1, overflow: 'hidden', display: 'flex', minHeight: 600 }
const reverseStyle = { flexDirection: 'row-reverse', backgroundColor: 'black' }
const imageContainerStyle = { display: { xs: 'none', md: 'block' }, overflow: 'hidden', height: 600 }

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
    link: "/programming"
  },
  {
    title: "Personal Projects",
    description: "Look at some of the personal projects I’ve created",
    link: "/project"
  },
  {
    title: "Other Activities",
    description: "Explore my activities on Kaggle, LeetCode, and more",
    link: "/activity"
  }
]

// Methods
const getWorkYear = () => {
  const firstJob = jobList[jobList.length-1]
  const startDate = moment(firstJob.startDate)
  const today = moment()
  
  let workYear = today.year() - startDate.year()
  if (startDate.month() > today.month()) workYear--

  return workYear
}

// Default Image Size
const imgSize = 1000

export default function HomePageClient() {
  const router = useRouter()

  return (
    <>
      {/* Main */}
      <Box sx={[containerStyle, { justifyContent: "center", alignItems: "center", height: 600 }]}>
        <Box sx={[imageContainerStyle, { height: 720 }]}>
          <Image
            src="/home/me1.jpg"
            alt="Picture of the author"
            height={imgSize}
            width={imgSize}
            className={styles.mainImage}
          />
        </Box>
        <div className={styles.mainContainer} style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 64 }}>Teerapat Satitporn</h1>
          <p className={styles.description}>Software Developer</p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
            <CustomIcon icon="Email" />
            <CustomIcon icon="GitHub" />
            <CustomIcon icon="LinkedIn" />
            <CustomIcon icon="Instagram" />
            <CustomIcon icon="Facebook" />
          </div>
        </div>
      </Box>

      {/* About Me */}
      <Box sx={[containerStyle, reverseStyle]}>
        <Box sx={imageContainerStyle}>
          <Image
            src="/home/me2.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
            height={imgSize}
            width={imgSize}
          />
        </Box>
        <div className={styles.mainContainer} style={{ color: 'white' }}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
            I’m a software developer based in <b>Bangkok, Thailand</b>.
            I graduated with a degree in <b>Information Technology</b> and
            have over <b>{getWorkYear()} years of experience</b> in web and application development.
          </p>
        </div>
      </Box>

      {/* Education */}
      <Box sx={containerStyle}>
        <Box sx={imageContainerStyle}>
          <Image
            src="/home/study.jpg"
            alt="Picture of the lecture room"
            className={styles.mainImage}
            height={imgSize}
            width={imgSize}
          />
        </Box>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Education</h1>
          <p className={styles.description}>
            Degree in <b>Information Technology</b> — see my full
            academic journey from school to university.
          </p>
          <Button
            variant="outlined"
            sx={buttonBlackStyle}
            onClick={() => {router.push("/education")}}
          >
            See More {'>>>'}
          </Button>
        </div>
      </Box>

      {/* Work Experience */}
      <Box sx={[containerStyle, reverseStyle]}>
        <Box sx={imageContainerStyle}>
          <Image
            src="/home/work.jpg"
            alt="Picture of the employees working"
            className={styles.mainImage}
            height={imgSize}
            width={imgSize}
          />
        </Box>
        <div className={styles.mainContainer} style={{ color: 'white' }}>
          <h1 className={styles.title}>Work Experience</h1>
          <p className={styles.description}>
            Over <b>{getWorkYear()} years of experience</b> in software development — learn more about
            my professional roles and the companies I’ve worked with.
          </p>
          <Button
            variant="outlined"
            sx={buttonWhiteStyle}
            onClick={() => {router.push("/experience")}}
          >
            See More {'>>>'}
          </Button>
        </div>
      </Box>

      {/* Skills */}
      <Box sx={[containerStyle, { height: 'auto' }]}>
        <div className={styles.mainContainer} style={{ textAlign: 'center', margin: "30px 10px" }}>
          <h1 className={styles.title}>Skills & Abilities</h1>

          {/* Details */}
          <div className={styles.skillMainItemContainer}>
            {skillItems.map((item) => (
              <div key={item.title} className={styles.skillItemContainer}>
                <div>
                  <h3 className={styles.skillItemTitle}>{item.title}</h3>
                  <Divider sx={{ marginY: 2, marginTop: 1 }} />
                  <p className={styles.skillItemDescription}>
                    {item.description}
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="outlined"
                    sx={[buttonBlackStyle, { marginX: 1, marginTop: 2 }]}
                    onClick={() => {router.push(item.link)}}
                  >
                    See more {'>>>'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Box>

      {/* Contact */}
      <Box sx={[containerStyle, reverseStyle]}>
        <Box sx={imageContainerStyle}>
          <Image
            src="/home/me3.jpg"
            alt="Picture of the author"
            className={styles.mainImage}
            height={imgSize}
            width={imgSize}
          />
        </Box>
        <div className={[styles.mainContainer, styles.contactContainer].join(' ')} style={{ color: 'white' }}>
          <h1 className={styles.title}>Contact</h1>
          
          <div>
            {/* Email */}
            <div className={styles.contactItem}>
              <EmailIcon className={styles.contactItemIcon} />
              <p className={styles.description} style={{ wordBreak: "break-all" }}>
                {process.env.NEXT_PUBLIC_EMAIL}
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