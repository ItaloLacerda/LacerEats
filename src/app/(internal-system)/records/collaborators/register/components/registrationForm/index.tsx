'use client'

import { inputStyle, boxStyle, inputStyle2, roleStyle } from '@/styles/pages/(internal-system)/records/collaborators/register/components/registrationForm.style'
import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import * as React from 'react'
import { listRole } from '../constants'

export default function RegistrationForm () {
  const [newContributor, setNewContributor] = React.useState({
    firstName: '',
    lastName: '',
    cellPhone: '',
    email: '',
    dateOfBirth: '' as string | null,
    cpf: '',
    rg: '',
    role: ''
  })
  const [open, setOpen] = React.useState(false)

  const handleOpenAndClose = () => {
    setOpen((boolean) => !boolean)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
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
              id="first-name-input"
              label="First Name"
              name="firstName"
              sx={inputStyle}
              value={ newContributor.firstName }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />

            <TextField
              required
              id="first-name-input"
              name="lastName"
              label="Last Name"
              sx={inputStyle}
              value={ newContributor.lastName }
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
              value={ newContributor.email }
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
              value={ newContributor.cellPhone }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
            <DatePicker label="Date Of Birth" value={newContributor.dateOfBirth} onChange={(dateOfBirth) => {
              setNewContributor((prevState) => ({ ...prevState, dateOfBirth }))
            }} />
        </Box>
        <Box sx={ boxStyle }>
             <TextField
              id="cpf-input"
              name="cpf"
              label="CPF"
              sx={inputStyle2}
              value={ newContributor.cpf }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
            <TextField
              id="rg-input"
              name="rg"
              label="RG"
              sx={inputStyle2}
              value={ newContributor.rg }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
            <FormControl required variant="standard" sx={roleStyle}>
             <InputLabel id="role-input">Role</InputLabel>
              <Select
                labelId="role-input"
                id="role-input"
                open={open}
                onClose={handleOpenAndClose}
                onOpen={handleOpenAndClose}
                value={newContributor.role}
                label="Role"
                onChange={handleChange}
              >
                {listRole.map((role) => (
                <MenuItem key={role} value={role} >
                  {role}
                </MenuItem>
                ))}
              </Select>
            </FormControl>
        </Box>
    </>

  )
}
