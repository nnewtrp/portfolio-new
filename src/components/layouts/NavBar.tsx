'use client'
import { useState } from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/navigation'

const menuList = [
  { title: "Home", path: "/" },
  { title: "Education", path: "/education" },
  { title: "Work Experiance", path: "/experiance" },
  { title: "Programming Skills", path: "/programming" },
  { title: "Personal Projects", path: "/project" },
  { title: "Other Activities", path: "/activity" }
]

export default function NavBar() {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuOnClick = (path: string) => {
    router.push(path)
    handleClose()
  }

  return (
    <AppBar sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Teerapat Satitporn
        </Typography>

        {/* Menu */}
        <Button onClick={handleMenu} sx={{ color: "white", fontWeight: "bold" }}>
          Menu <ArrowDropDownIcon sx={{ rotate: anchorEl ? "180deg" : null }} />
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{ mt: "35px" }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuList.map((menu) => (
            <MenuItem key={menu.title} onClick={() => handleMenuOnClick(menu.path)}>{menu.title}</MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}