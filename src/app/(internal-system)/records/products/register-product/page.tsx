import { Box, Typography } from '@mui/material'
import React from 'react'

import { boxStyle, typographyStyle } from '@/styles/pages/(internal-system)/records/products/register-product/registerProduct.style'
import MainDataForm from './components/mainDataForm'

function RegisterProduct () {
  return (
    <>
      <Box sx={boxStyle}>
        <Typography variant="h4" sx={typographyStyle}>Main Data</Typography>
        <MainDataForm />
      </Box>
    </>
  )
}

export default RegisterProduct
