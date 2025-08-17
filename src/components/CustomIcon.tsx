'use client'
import EmailIcon from "@mui/icons-material/Email"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

interface props {
  icon: string,
  color?: string
}

const hoverColors: any = {
  "Email": "#D93025",      // Gmail red
  "Instagram": "#E4405F",  // Instagram pink/red
  "Facebook": "#1877F2",   // Facebook blue
  "GitHub": "#6e40c9",     // GitHub purple
  "LinkedIn": "#0A66C2",   // LinkedIn blue
}

const links: any = {
  "Email": () => { window.location.href = "mailto:" + process.env.NEXT_PUBLIC_EMAIL },
  "Instagram": () => { window.open(process.env.NEXT_PUBLIC_INSTAGRAM_URL) },
  "Facebook": () => { window.open(process.env.NEXT_PUBLIC_FACEBOOK_URL) },
  "GitHub": () => { window.open(process.env.NEXT_PUBLIC_GITHUB_URL) },
  "LinkedIn": () => { window.open(process.env.NEXT_PUBLIC_LINKEDIN_URL) }
}

export default function CustomIcon(props: props) {
  const iconStyles = {
    fontSize: 30,
    marginLeft: 1,
    marginRight: 1,
    color: props.color,
    ':hover': { color: hoverColors[props.icon], cursor: "pointer" }
  }

  switch (props.icon) {
    case "Email":
      return (<EmailIcon sx={iconStyles} onClick={links[props.icon]} />)
    case "Instagram":
      return (<InstagramIcon sx={iconStyles} onClick={links[props.icon]} />)
    case "Facebook":
      return (<FacebookIcon sx={iconStyles} onClick={links[props.icon]} />)
    case "GitHub":
      return (<GitHubIcon sx={iconStyles} onClick={links[props.icon]} />)
    case "LinkedIn":
      return (<LinkedInIcon sx={iconStyles} onClick={links[props.icon]} />)
  }
}