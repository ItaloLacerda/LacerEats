import '../../styles/globals.css'
import { Box } from '@mui/material'
import React from 'react'

import SignUpForms from '@/components/Forms/SignUpForms'
import { BackgroundStyle } from '../../styles/Pages/singUp/styleSignUp'

export default function signUp () {
  return (

    <Box sx={BackgroundStyle}>
      <SignUpForms />
    </Box>

  )
}
