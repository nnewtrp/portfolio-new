'use client'
import { useState } from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, Divider, Box } from "@mui/material"
import MenuDropdownIcon from "./MenuDropDownIcon";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import menuList from './menu.json'

export default function NavBar() {
  const router = useRouter()
  const pathName = usePathname()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const isHomePath = pathName == '/'

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

  const getTitle = () => !isHomePath ? menuList.filter((menu) => menu.path == pathName)[0]?.title : null

  const getPageTitle = () => {
    const title = getTitle()
    return title ? '— ' + title : ''
  }

  return (
    <AppBar sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        {/* Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex", fontWeight: 'bold' }}
        >
          <Box sx={{':hover': { cursor: "pointer" }}} onClick={() => {router.push('/')}}>
            Teerapat Satitporn
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            &nbsp;{ getPageTitle() }
          </Box>
        </Typography>

        {/* Menu */}
        <Button onClick={handleMenu} sx={{ color: "white", fontWeight: "bold" }}>
          Menu <MenuDropdownIcon isRotate={!!anchorEl} />
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
          open={!!anchorEl}
          onClose={handleClose}
        >
          {menuList.map((menu) => (
            <div key={menu.title}>
              <MenuItem onClick={() => handleMenuOnClick(menu.path)} sx={{ fontWeight: "bold" }}>
                {menu.title}
              </MenuItem>
              <Divider />
            </div>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}