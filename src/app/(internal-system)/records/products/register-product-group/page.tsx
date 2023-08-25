import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { boxStyle, typographyStyle } from '@/styles/pages/(internal-system)/records/products/register-product-group/registerProductGroup.style'
import ProductGroupForm from './components/productGroupForm'

export default function RegisterProductGroup () {
  return (
    <>
      <Box sx={boxStyle}>
        <Typography variant="h4" sx={typographyStyle}>Product Group</Typography>
        <ProductGroupForm />
      </Box>
    </>

  )
}
