import { Box, type SelectChangeEvent, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'

import { inputStyle, boxStyle, selectStyle } from '@/styles/pages/(internal-system)/records/products/register-product/components/mainDataForm.style'
import { type ImainData, type Tselect } from '@/types/pages/(internal-system)/records/products/register-product/components/mainDataForm/mainDataForm.type'
import { listUnit, productsGroups } from './constants'

function MainDataForm () {
  const [openAndClose, setOpenAndClose] = useState({
    selectOne: false,
    selectTwo: false,
    selectThree: false
  })
  const [newProduct, setNewProduct] = useState<ImainData>({
    description: '',
    group: '',
    unit: '',
    barCode: '',
    NCM: '',
    costPrice: '',
    salePrice: '',
    state: 'inactive'
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = event.target

    setNewProduct((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }

  const handleOpenAndClose = (select: Tselect) => {
    setOpenAndClose((boolean) => ({
      ...boolean,
      [select]: !boolean[select]
    }))
  }
  return (
    <>
    <Box sx={ boxStyle }>
        <TextField
            required
            id="description-input"
            label="Description"
            name="description"
            sx={inputStyle}
            value={ newProduct.description }
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="standard"
        />

        <FormControl required variant="standard" sx={selectStyle}>
            <InputLabel id="group-input">Group</InputLabel>
                <Select
                    labelId="group-input"
                    id="group-input"
                    name="group"
                    open={openAndClose.selectOne}
                    onClose={() => { handleOpenAndClose('selectOne') }}
                    onOpen={() => { handleOpenAndClose('selectOne') }}
                    value={newProduct.group}
                    label="Group"
                    onChange={handleChange}
                >
                    {productsGroups.map((state, index) => (
                        <MenuItem key={`group-input-${index}`} value={state} >
                          {state}
                        </MenuItem>
                    ))}
                </Select>
        </FormControl>
        <FormControl required variant="standard" sx={selectStyle}>
            <InputLabel id="unit-input">Unit</InputLabel>
                <Select
                    labelId="unit-input"
                    id="unit-input"
                    name="unit"
                    open={openAndClose.selectTwo}
                    onClose={() => { handleOpenAndClose('selectTwo') }}
                    onOpen={() => { handleOpenAndClose('selectTwo') }}
                    value={newProduct.unit}
                    label="Unit"
                    onChange={handleChange}
                >
                    {listUnit.map((state, index) => (
                        <MenuItem key={`unit-input-${index}`} value={state} >
                          {state}
                        </MenuItem>
                    ))}
                </Select>
        </FormControl>
    </Box>
    <Box sx={ boxStyle }>
        <TextField
            required
            id="NCM-input"
            label="NCM"
            name="NCM"
            sx={inputStyle}
            value={ newProduct.NCM }
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="standard"
        />
        <TextField
            required
            id="bar-code-input"
            label="Bar Code"
            name="barCode"
            sx={inputStyle}
            value={ newProduct.barCode }
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
            id="cost-price-input"
            label="Cost Price"
            name="costPrice"
            sx={inputStyle}
            value={ newProduct.costPrice }
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="standard"
        />

        <TextField
            required
            id="sale-price-input"
            label="Sale Price"
            name="salePrice"
            sx={inputStyle}
            value={ newProduct.salePrice }
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
            variant="standard"
        />
        <FormControl required variant="standard" sx={selectStyle}>
            <InputLabel id="state-input">State</InputLabel>
                <Select
                    labelId="state-input"
                    id="state-input"
                    name="state"
                    open={openAndClose.selectThree}
                    onClose={() => { handleOpenAndClose('selectThree') }}
                    onOpen={() => { handleOpenAndClose('selectThree') }}
                    value={newProduct.state}
                    label="State"
                    onChange={handleChange}
                >
                    {['active', 'inactive'].map((state, index) => (
                        <MenuItem key={`state-input-${index}`} value={state} >
                          {state}
                        </MenuItem>
                    ))}
                </Select>
        </FormControl>
    </Box>
    </>
  )
}

export default MainDataForm
