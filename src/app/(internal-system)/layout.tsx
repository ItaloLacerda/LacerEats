'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import HeaderComponent from './components/headerComponent'
import DrawerComponent from './components/drawerComponent'
import { DrawerFoother, DrawerHeader, boxStyle, boxStyle2 } from '@/styles/pages/(internal-system)/layout.style'

export default function Layout (props: {
  children: React.ReactNode
}) {
  return (
      <Box sx={boxStyle}>
        <CssBaseline />
        <HeaderComponent />
        <DrawerComponent />
        <Box component="main" sx={boxStyle2}>
          <DrawerHeader />
          {props.children}
          <DrawerFoother />
        </Box>
      </Box>
  )
}
