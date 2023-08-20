'use client'

import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { globalTheme } from '@/styles/themes/global.theme'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export function MUIProvider (
  { children }: { children: React.ReactNode }
) {
  return (
    <ThemeProvider theme={globalTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
    </ThemeProvider>
  )
}
