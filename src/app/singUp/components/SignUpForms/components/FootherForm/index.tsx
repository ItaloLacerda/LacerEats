import React from 'react'
import { Box, Link, Typography } from '@mui/material'

import { BoxStyle, TextStyle } from '@/styles/pages/singUp/components/SignUpForms/components/FootherForm/FootherForm.style'

export default function FootherForm () {
  return (
    <Box sx={BoxStyle}>
      <Typography variant="h6" sx={TextStyle}>Already have an account ? <Link href="/login">Sign in</Link></Typography>
    </Box>
  )
}
