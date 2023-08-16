import React from 'react'
import { Paper } from '@mui/material'

import HeaderForm from './components/HeaderForm'
import CustonForm from './components/CustonForm'
import FootherForm from './components/FootherForm'
import { BackgroundStyle } from '@/styles/pages/singUp/components/SignUpForms/SignUpForms.style'

export default function SignUpForms () {
  return (
  <Paper elevation={3} sx={BackgroundStyle}>
    <HeaderForm />
    <CustonForm />
    <FootherForm />
  </Paper>
  )
}
