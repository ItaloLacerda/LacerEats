import * as React from 'react'
import IndividualForm from './components/registrationForm'
import { Box, Typography } from '@mui/material'
import { boxStyle, typographyStyle } from '@/styles/pages/(internal-system)/records/collaborators/register/register.style'
import AddressForm from './components/addressForm'
import UserRegistrationFooter from './components/userRegistrationFooter'

export default function RegisterCollaborators () {
  return (
    <>
      <Box sx={boxStyle}>
        <Typography variant="h4" sx={typographyStyle}>Personal data</Typography>
        <IndividualForm />
        <Typography variant="h4" sx={typographyStyle}>Address</Typography>
        <AddressForm />
        <UserRegistrationFooter />
      </Box>
    </>

  )
}
