import React from 'react'
import { Paper, Typography } from '@mui/material'

import { BackgroundStyle } from '@/styles/pages/login/components/loginForms.style'
import CustonForm from './components/CustonForm'
import FootherForm from './components/FootherForm'

export default function LoginForms (): React.JSX.Element {
  return (
  <Paper elevation={3} sx={BackgroundStyle}>
    <Typography variant="h4" >Login to your account</Typography>
    <CustonForm />
    <FootherForm />
  </Paper>
  )
}
