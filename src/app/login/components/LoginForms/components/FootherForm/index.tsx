'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Link, Typography } from '@mui/material'
import { BoxLoginStyle2, ButonStyle, TextStyle } from '@/styles/pages/login/components/components/footherForm.style'

export default function FootherForm (): React.JSX.Element {
  const router = useRouter()

  return (
    <Box sx={BoxLoginStyle2}>
      <Button variant="contained" onClick={() => { router.push('/home') }} sx={ButonStyle}>Login now</Button>
      <Typography variant="h6" sx={TextStyle}>Don&#39;t have an account ? <Link href="/singUp">Sign up</Link></Typography>
    </Box>
  )
}
