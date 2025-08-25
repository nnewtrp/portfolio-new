import EmailIcon from "@mui/icons-material/Email"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import RedditIcon from "@mui/icons-material/Reddit"
import LanguageIcon from '@mui/icons-material/Language';

interface props {
  icon: string,
  color?: string,
  onClick?: Function
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
  },
  "Twitter": {
    color: "#1DA1F2", // Twitter blue
    link: () => { window.open(process.env.NEXT_PUBLIC_TWITTER_URL) }
  },
  "Reddit": {
    color: "#FF4500", // Reddit orange
    link: () => { window.open(process.env.NEXT_PUBLIC_REDDIT_URL) }
  },
  "Website": {
    color: "#4285F4", // Google blue as default Internet color
    link: () => {}
  }
}

export default function CustomIcon(props: props) {
  const iconStyles = {
    fontSize: 30,
    marginX: 1,
    color: props.color,
    ':hover': { color: iconDetails[props.icon].color, cursor: "pointer" }
  }

  const onClickFunction = () => {
    if (props.onClick) props.onClick()
    else iconDetails[props.icon].link()
  }

  switch (props.icon) {
    case "Email":
      return <EmailIcon sx={iconStyles} onClick={() => onClickFunction()} />
    case "Instagram":
      return <InstagramIcon sx={iconStyles} onClick={() => onClickFunction()} />
    case "Facebook":
      return <FacebookIcon sx={iconStyles} onClick={() => onClickFunction()} />
    case "GitHub":
      return <GitHubIcon sx={iconStyles} onClick={() => onClickFunction()} />
    case "LinkedIn":
      return <LinkedInIcon sx={iconStyles} onClick={() => onClickFunction()} />
    case "Twitter":
      return <TwitterIcon sx={iconStyles} onClick={() => onClickFunction()} />
    case "Reddit":
      return <RedditIcon sx={iconStyles} onClick={() => onClickFunction()} />
    case "Website":
      return <LanguageIcon sx={iconStyles} onClick={() => onClickFunction()} />
  }
}