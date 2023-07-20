import React from 'react'
import { BackgroundStyle, BoxLoginStyle, BoxLoginStyle2, ButonStyle, TextStyle, InputStyle, FormControlStyle, InputAdornmentStyle } from '@/styles/Forms/LoginFormsStyle'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Link, Paper, Typography } from '@mui/material'
import CustomInput from '../Inputs'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function LoginForms () {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => { setShowPassword((show) => !show) }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
  <Paper elevation={3} sx={BackgroundStyle}>
    <Typography variant="h4" >Login to your account</Typography>
    <Box sx={BoxLoginStyle}>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="login-user-input">
          Email
        </InputLabel>
        <CustomInput id="login-user-input" sx={ InputStyle }/>
      </FormControl>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="password-user-input">
          Password
        </InputLabel>
        <CustomInput
          id="password-user-input"
          sx={ InputStyle }
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
    <Box sx={BoxLoginStyle2}>
      <Button variant="contained" sx={ButonStyle}>Login now</Button>
      <Typography variant="h6" sx={TextStyle}>Don&#39;t have an account ? <Link href="/signUp">Sign up</Link></Typography>
    </Box>
  </Paper>
  )
}
