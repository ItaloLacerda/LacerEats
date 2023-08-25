'use client'

import { inputStyle, boxStyle, inputStyle2 } from '@/styles/pages/(internal-system)/records/suppliers/register/components/companyRegistrationForm.style'
import { Box, TextField } from '@mui/material'
import * as React from 'react'

export default function CompanyRegistrationForm () {
  const [newSupplier, setNewContributor] = React.useState({
    supplierName: '',
    fantasyName: '',
    cellPhone: '',
    email: '',
    stateRegistration: '',
    cnpj: '',
    site: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setNewContributor((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }

  return (
    <>
        <Box sx={ boxStyle }>

            <TextField
              required
              id="supplier-name-input"
              label="Supplier Name"
              name="supplierName"
              sx={inputStyle}
              value={ newSupplier.supplierName }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />

            <TextField
              required
              id="fantasy-name-input"
              name="fantasyName"
              label="Fantasy Name"
              sx={inputStyle}
              value={ newSupplier.fantasyName }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
        </Box>
        <Box sx={ boxStyle }>

            <TextField
              required
              id="email-input"
              name="email"
              label="Email"
              sx={inputStyle2}
              value={ newSupplier.email }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />

            <TextField
              required
              id="cell-phone-input"
              name="cellPhone"
              label="Cell Phone"
              sx={inputStyle2}
              value={ newSupplier.cellPhone }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
        </Box>
        <Box sx={ boxStyle }>
             <TextField
              id="state-registration-input"
              name="stateRegistration"
              label="State Registration"
              sx={inputStyle2}
              value={ newSupplier.stateRegistration }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
            <TextField
              id="cnpj-input"
              name="cnpj"
              label="CNPJ"
              sx={inputStyle2}
              value={ newSupplier.cnpj }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
            <TextField
              id="site-input"
              name="site"
              label="Site"
              sx={inputStyle2}
              value={ newSupplier.site }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
        </Box>
    </>

  )
}
