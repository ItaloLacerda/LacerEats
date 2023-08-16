import { styled } from '@mui/material/styles'

export const DrawerFoother = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(29.2, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))
