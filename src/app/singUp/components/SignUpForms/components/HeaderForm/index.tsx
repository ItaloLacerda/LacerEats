import React from 'react'
import { Box, Typography } from '@mui/material'

import { BoxStyle } from '@/styles/pages/singUp/components/SignUpForms/components/HeaderForm/header.style'

export default function HeaderForm () {
  return (
    <Box sx={BoxStyle}>
    <Typography variant="h4" >Welcoming you</Typography>
    <Typography variant="h6" >Sign up to access all of your content</Typography>
    </Box>
  )
}
