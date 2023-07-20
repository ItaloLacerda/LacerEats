import React from 'react'
import { BackgroundStyle, BoxStyle, BoxStyle2, BoxStyle3, ButonStyle, TextStyle, InputStyle, FormControlStyle, InputAdornmentStyle } from '@/styles/Components/Forms/SignUpFormsStyle'
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
    <Box sx={BoxStyle3}>
    <Typography variant="h4" >Welcoming you</Typography>
    <Typography variant="h6" >Sign up to access all of your content</Typography>
    </Box>
    <Box sx={BoxStyle}>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="email-input">
          Email
        </InputLabel>
        <CustomInput id="email-input" sx={ InputStyle }/>
      </FormControl>
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="password-input">
          Password
        </InputLabel>
        <CustomInput
          id="password-input"
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
      <FormControl variant="standard" sx={ FormControlStyle }>
        <InputLabel shrink htmlFor="Confirm-Password-input">
        Confirm Password
        </InputLabel>
        <CustomInput
          id="Confirm-Password-input"
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
      <Button variant="contained" sx={ButonStyle}>Sing up</Button>
    </Box>
    <Box sx={BoxStyle2}>
      <Typography variant="h6" sx={TextStyle}>Already have an account ? <Link href="/login">Sign in</Link></Typography>
    </Box>
  </Paper>
  )
}
