import * as React from 'react'
import CompanyRegistrationForm from './components/companyRegistrationForm'
import { Box, Typography } from '@mui/material'
import { boxStyle, typographyStyle } from '@/styles/pages/(internal-system)/records/suppliers/register/register.style'
import AddressForm from './components/addressForm'
import SupplierRegistrationFooter from './components/SupplierRegistrationFooter'

export default function RegisterSuppliers () {
  return (
    <>
      <Box sx={boxStyle}>
        <Typography variant="h4" sx={typographyStyle}>Company Data</Typography>
        <CompanyRegistrationForm />
        <Typography variant="h4" sx={typographyStyle}>Address</Typography>
        <AddressForm />
        <SupplierRegistrationFooter />
      </Box>
    </>

  )
}
