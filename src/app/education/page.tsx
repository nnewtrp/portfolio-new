'use client'
import { Box, Button } from "@mui/material"
import styles from "./page.module.css"
import schoolList from "./schools.json"

// Styles
const containerStyle = { flexGrow: 1, height: 400, overflow: 'hidden', display: 'flex' }
const reverseStyle = { flexDirection: 'row-reverse', backgroundColor: 'black' }
const imageContainerStyle = { display: { xs: 'none', md: 'none', lg: 'block' }, overflow: 'hidden' }

const buttonStyle = { fontWeight: 'bold', marginTop: 2 }
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

// Condition
const isOddIndex = (i: number) => i%2==1;

export default function Education() {
  return (
    <>
      {schoolList.map((item, i) => (
        <Box key={item.name} sx={[containerStyle, isOddIndex(i) ? reverseStyle : {}]}>
          {/* Image */}
          <Box sx={imageContainerStyle}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.mainImage}
            />
          </Box>

          {/* Info */}
          <div className={styles.mainContainer} style={isOddIndex(i) ? { color: 'white' } : {}}>
            {/* Header */}
            <h1 className={styles.title}>{item.name}</h1>

            {/* Color Bar */}
            <div className={styles.colorContainer}>
              {item.colors.map((color, i) => {return (
                <div key={i} className={styles.colorItem} style={{ background: color }} />
              )})}
            </div>

            {/* Detail */}
            <p className={styles.description}>{item.program}</p>
            <p className={styles.period}>{item.period}</p>

            {/* Link Button */}
            <Button
              variant="outlined"
              sx={isOddIndex(i) ? buttonWhiteStyle : buttonBlackStyle}
              onClick={() => { window.open(item.link) }}
            >
              More Info {'>>>'}
            </Button>
          </div>
        </Box>
      ))}
    </>
  )
}