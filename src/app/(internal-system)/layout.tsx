'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import HeaderComponent from './components/headerComponent'
import DrawerComponent from './components/drawerComponent'
import { DrawerHeader, boxStyle, boxStyle2 } from '@/styles/pages/(internal-system)/layout.style'
import ComponentPath from './components/componentPath'

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
          <ComponentPath />
          {props.children}
        </Box>
      </Box>
  )
}
