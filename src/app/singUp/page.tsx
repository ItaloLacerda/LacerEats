import React from 'react'
import { Box } from '@mui/material'

import { BackgroundStyle } from '@/styles/pages/singUp/singUp.style'
import SignUpForms from './components/SignUpForms'

export default function signUp () {
  return (

    <Box sx={BackgroundStyle}>
      <SignUpForms />
    </Box>

  )
}
