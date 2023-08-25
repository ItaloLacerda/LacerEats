'use client'

import { boxStyle, inputStyle, roleStyle, buttonStyle } from '@/styles/pages/(internal-system)/records/products/register-product-group/components/productGroupForm.style'
import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent, TextField, Button } from '@mui/material'
import * as React from 'react'
import { type Tselect } from './productGroupForm.type'

export default function ProductGroupForm () {
  const [newProductGroup, setNewProductGroup] = React.useState({
    description: '',
    status: '',
    showInTerminal: '',
    showInMobile: ''
  })
  const [openAndClose, setOpenAndClose] = React.useState({
    selectOne: false,
    selectTwo: false,
    selectThree: false
  })

  const handleOpenAndClose = (select: Tselect) => {
    setOpenAndClose((boolean) => ({
      ...boolean,
      [select]: !boolean[select]
    }))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = event.target

    setNewProductGroup((prevalue) => {
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
              id="description-input"
              name="description"
              label="Description"
              sx={inputStyle}
              value={ newProductGroup.description }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
            />
            <FormControl required variant="standard" sx={roleStyle}>
             <InputLabel id="show-in-mobile-input">Show In Mobile</InputLabel>
              <Select
                labelId="show-in-mobile-input"
                id="show-in-mobile-input"
                name="showInMobile"
                open={openAndClose.selectOne}
                onClose={() => { handleOpenAndClose('selectOne') }}
                onOpen={() => { handleOpenAndClose('selectOne') }}
                value={newProductGroup.showInMobile}
                label="Show In Mobile"
                onChange={handleChange}
              >
                {['active', 'inactive'].map((state, index) => (
                <MenuItem key={`show-in-mobile-input-${index}`} value={state} >
                  {state}
                </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl required variant="standard" sx={roleStyle}>
             <InputLabel id="show-in-terminal-input">Show In Terminal</InputLabel>
              <Select
                labelId="show-in-terminal-input"
                id="show-in-terminal-input"
                name="showInTerminal"
                open={openAndClose.selectTwo}
                onClose={() => { handleOpenAndClose('selectTwo') }}
                onOpen={() => { handleOpenAndClose('selectTwo') }}
                value={newProductGroup.showInTerminal}
                label="Show In Terminal"
                onChange={handleChange}
              >
                {['active', 'inactive'].map((state, index) => (
                <MenuItem key={`show-in-terminal-input-${index}`} value={state} >
                  {state}
                </MenuItem>
                ))}
              </Select>
            </FormControl>
        </Box>
        <Box sx={ boxStyle }>
            <FormControl required variant="standard" sx={roleStyle}>
             <InputLabel id="status-input">Status</InputLabel>
              <Select
                labelId="status-input"
                id="status-input"
                name="status"
                open={openAndClose.selectThree}
                onClose={() => { handleOpenAndClose('selectThree') }}
                onOpen={() => { handleOpenAndClose('selectThree') }}
                value={newProductGroup.status}
                label="status"
                onChange={handleChange}
              >
                {['active', 'inactive'].map((state) => (
                <MenuItem key={state} value={state} >
                  {state}
                </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" sx={buttonStyle}>Register</Button>
        </Box>
    </>

  )
}
