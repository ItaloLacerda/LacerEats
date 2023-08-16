'use client'

import React from 'react'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import CustomInput from '@/styles/components/inputs/customInput.style'
import { BoxStyle, ButonStyle, FormControlStyle, InputAdornmentStyle, InputStyle } from '@/styles/pages/singUp/components/SignUpForms/components/CustonForm/custonForm.style'

export default function CustonForm () {
  const [showPassword, setShowPassword] = React.useState({
    password: false,
    confirmPassword: false
  })
  const [newUser, setNewUser] = React.useState({
    firstName: '',
    lastName: '',
    loginUser: '',
    password: '',
    confirmPassword: ''
  })

  const handleChangeNewUser = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setNewUser((user) => ({
      ...user,
      [name]: value
    }))
  }

  const handleClickShowPassword = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>, nameIcon: string) => {
    if (nameIcon === 'password') {
      setShowPassword((show) => ({
        ...show,
        password: !show.password
      }))
    } else {
      setShowPassword((show) => ({
        ...show,
        confirmPassword: !show.confirmPassword
      }))
    }
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Box sx={BoxStyle}>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="first-name-input">
          First Name
        </InputLabel>
        <CustomInput id="first-name-input" value={newUser.firstName} name='firstName' onChange={handleChangeNewUser} sx={ InputStyle }/>
      </FormControl>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="last-name-input">
          Last Name
        </InputLabel>
        <CustomInput id="last-name-input" value={newUser.lastName} name='lastName' onChange={handleChangeNewUser} sx={ InputStyle }/>
      </FormControl>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="login-user-input">
          Login User
        </InputLabel>
        <CustomInput id="login-user-input" value={newUser.loginUser} name='loginUser' onChange={handleChangeNewUser} sx={ InputStyle }/>
      </FormControl>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="password-input">
          Password
        </InputLabel>
        <CustomInput
          id="password-input"
          value={newUser.password}
          name='password'
          onChange={handleChangeNewUser}
          sx={ InputStyle }
          type={showPassword.password ? 'text' : 'password'}
          endAdornment={
              <InputAdornment position="end" sx={ InputAdornmentStyle }>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => { handleClickShowPassword(e, 'password') }}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword.password ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }/>
      </FormControl>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="Confirm-Password-input">
        Confirm Password
        </InputLabel>
        <CustomInput
          id="Confirm-Password-input"
          value={newUser.confirmPassword}
          name='confirmPassword'
          onChange={handleChangeNewUser}
          sx={ InputStyle }
          type={showPassword.confirmPassword ? 'text' : 'password'}
          endAdornment={
              <InputAdornment position="end" sx={ InputAdornmentStyle }>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => { handleClickShowPassword(e, 'confirmPassword') }}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword.confirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }/>
      </FormControl>
      <Button variant="contained" sx={ButonStyle}>Sing up</Button>
    </Box>
  )
}
