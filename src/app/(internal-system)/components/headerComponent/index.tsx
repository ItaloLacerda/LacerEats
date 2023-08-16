'use client'

import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar } from '@/styles/pages/(internal-system)/components/headerComponent/headerComponent.style'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { handleDrawerOpen } from '@/redux/slices/layoutHome.slice'

export default function HeaderComponent () {
  const { open } = useAppSelector((state) => state.layoutHomeReducer)
  const dispatch = useAppDispatch()

  const handleDrawer = () => {
    dispatch(handleDrawerOpen())
  }

  return (
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' })
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
  )
}
