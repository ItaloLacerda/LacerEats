'use client'

import { boxStyle, inputStyle, roleStyle } from '@/styles/pages/(internal-system)/records/suppliers/register/components/addressForm.style'
import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent, TextField } from '@mui/material'
import * as React from 'react'
import { listOfStates } from '../constants'

export default function AddressForm () {
  const [newAddress, setNewAddress] = React.useState({
    publicPlace: '',
    number: '',
    zipCode: '',
    city: '',
    state: 'PE',
    neighborhood: ''
  })
  const [open, setOpen] = React.useState(false)

  const handleOpenAndClose = () => {
    setOpen((boolean) => !boolean)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = event.target

    setNewAddress((prevalue) => {
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
              id="zip-code-input"
              name="zipCode"
              label="Zip Code"
              sx={inputStyle}
              value={ newAddress.zipCode }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />

            <TextField
              required
              id="city-input"
              name="city"
              label="City"
              sx={inputStyle}
              value={ newAddress.city }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
            <TextField
              required
              id="public-place-input"
              name="publicPlace"
              label="Public Place"
              sx={inputStyle}
              value={ newAddress.publicPlace }
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
              id="neighborhood-input"
              name="neighborhood"
              label="Neighborhood"
              sx={inputStyle}
              value={ newAddress.neighborhood }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
            <TextField
              required
              id="number-input"
              name="number"
              label="Number"
              sx={inputStyle}
              value={ newAddress.number }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
            <FormControl required variant="standard" sx={roleStyle}>
             <InputLabel id="state-input">State</InputLabel>
              <Select
                labelId="state-input"
                id="state-input"
                open={open}
                onClose={handleOpenAndClose}
                onOpen={handleOpenAndClose}
                value={newAddress.state}
                label="State"
                onChange={handleChange}
              >
                {listOfStates.map((state) => (
                <MenuItem key={state} value={state} >
                  {state}
                </MenuItem>
                ))}
              </Select>
            </FormControl>
        </Box>
    </>

  )
}
