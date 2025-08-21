import EmailIcon from "@mui/icons-material/Email"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

interface props {
  icon: string,
  color?: string
}

const iconDetails: any = {
  "Email": {
    color: "#D93025", // Gmail red
    link: () => { window.location.href = "mailto:" + process.env.NEXT_PUBLIC_EMAIL }
  },
  "Instagram": {
    color: "#E4405F", // Instagram pink/red
    link: () => { window.open(process.env.NEXT_PUBLIC_INSTAGRAM_URL) }
  },
  "Facebook": {
    color: "#1877F2", // Facebook blue
    link: () => { window.open(process.env.NEXT_PUBLIC_FACEBOOK_URL) }
  },
  "GitHub": {
    color: "#6e40c9", // GitHub purple
    link: () => { window.open(process.env.NEXT_PUBLIC_GITHUB_URL) }
  },
  "LinkedIn": {
    color: "#0A66C2", // LinkedIn blue
    link: () => { window.open(process.env.NEXT_PUBLIC_LINKEDIN_URL) }
  }
}

export default function CustomIcon(props: props) {
  const iconStyles = {
    fontSize: 30,
    marginX: 1,
    color: props.color,
    ':hover': { color: iconDetails[props.icon].color, cursor: "pointer" }
  }

  switch (props.icon) {
    case "Email":
      return <EmailIcon sx={iconStyles} onClick={iconDetails[props.icon].link} />
    case "Instagram":
      return <InstagramIcon sx={iconStyles} onClick={iconDetails[props.icon].link} />
    case "Facebook":
      return <FacebookIcon sx={iconStyles} onClick={iconDetails[props.icon].link} />
    case "GitHub":
      return <GitHubIcon sx={iconStyles} onClick={iconDetails[props.icon].link} />
    case "LinkedIn":
      return <LinkedInIcon sx={iconStyles} onClick={iconDetails[props.icon].link} />
  }
}