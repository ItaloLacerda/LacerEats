import React from 'react'
import { Box } from '@mui/material'

import { BackgroundStyle } from '@/styles/pages/login/login.style'
import LoginForms from './components/LoginForms'

export default function Login (): React.JSX.Element {
  return (

    <Box
      sx={BackgroundStyle}
    >
        <LoginForms />
    </Box>

  )
}
