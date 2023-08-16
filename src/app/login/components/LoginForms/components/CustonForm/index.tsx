'use client'

import React from 'react'
import { Box, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import {
  BoxLoginStyle,
  FormControlStyle,
  InputStyle,
  InputAdornmentStyle
} from '@/styles/pages/login/components/components/custonForm.style'
import CustomInput from '@/styles/components/inputs/customInput.style'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { changeLoginUser, changePassword } from '@/redux/slices/loginUser.slice'

export default function CustonForm (): React.JSX.Element {
  const [showPassword, setShowPassword] = React.useState(false)
  const { loginUser, password } = useAppSelector((state) => state.loginUserReducer)
  const dispatch = useAppDispatch()

  const handleClickShowPassword = () => { setShowPassword((show) => !show) }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    if (name === 'login-user-input') {
      return dispatch(changeLoginUser({ loginUser: value }))
    }

    return dispatch(changePassword({ password: value }))
  }

  return (
    <Box sx={ BoxLoginStyle }>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="login-user-input">
        Login User
        </InputLabel>
        <CustomInput
          id="login-user-input"
          name="login-user-input"
          sx={ InputStyle }
          value={ loginUser }
          onChange={handleChange}
          />
      </FormControl>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="password-user-input">
          Password
        </InputLabel>
        <CustomInput
          id="password-user-input"
          name="password-user-input"
          value={ password }
          sx={ InputStyle }
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
              <InputAdornment position="end" sx={ InputAdornmentStyle }>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }/>
      </FormControl>
    </Box>

  )
}
