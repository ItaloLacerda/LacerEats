import '../../styles/globals.css'
import { Box } from '@mui/material'
import { BackgroundStyle } from './styleLogin'
import React from 'react'
import LoginForms from '@/components/Forms/LoginForms'

export default function Login () {
  return (

    <Box
      sx={BackgroundStyle}
    >
      <LoginForms />
    </Box>

  )
}
