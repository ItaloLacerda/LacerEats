import { styled } from '@mui/material/styles'

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

export const DrawerFoother = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(11.2, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

export const boxStyle = { display: 'flex' }

export const boxStyle2 = {
  flexGrow: 1,
  p: 3,
  backgroundColor: '#fff'
}
