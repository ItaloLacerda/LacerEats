'use client'

import { boxStyle, textFieldStyle, buttonStyle } from '@/styles/pages/(internal-system)/records/suppliers/register/components/supplierRegistrationFooter.style'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material'
import * as React from 'react'

export default function SupplierRegistrationFooter () {
  const [status, setStatus] = React.useState<'active' | 'inactive'>('inactive')
  const [open, setOpen] = React.useState(false)

  const handleOpenAndClose = () => {
    setOpen((boolean) => !boolean)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { value } = event.target

    setStatus(value as 'active' | 'inactive')
  }

  return (
    <>
        <Box sx={ boxStyle }>
            <FormControl required variant="standard" sx={textFieldStyle}>
             <InputLabel id="status-input">Status</InputLabel>
              <Select
                labelId="status-input"
                id="status-input"
                open={open}
                onClose={handleOpenAndClose}
                onOpen={handleOpenAndClose}
                value={status}
                label="Status"
                onChange={handleChange}
              >
                {['active', 'inactive'].map((statusActual) => (
                <MenuItem key={statusActual} value={statusActual} >
                  {statusActual}
                </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" sx={buttonStyle}>Register</Button>
        </Box>
    </>

  )
}
