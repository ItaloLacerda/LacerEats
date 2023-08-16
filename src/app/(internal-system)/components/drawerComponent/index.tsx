'use client'

import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Drawer, DrawerHeader, listItemButtonStyle, listItemStyle, listItemIconStyle } from '@/styles/pages/(internal-system)/components/drawerComponent/drawerComponent.style'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { handleDrawerClose } from '@/redux/slices/layoutHome.slice'
import { type SvgIconTypeMap } from '@mui/material'
import { type OverridableComponent } from '@mui/material/OverridableComponent'
import { useRouter } from 'next/navigation'
import { listIcons } from '../../constants'

export default function DrawerComponent () {
  const theme = useTheme()
  const { open } = useAppSelector((state) => state.layoutHomeReducer)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleDrawer = () => {
    dispatch(handleDrawerClose())
  }

  return (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawer}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {listIcons.map((departmentListAndIcons: Array<string | (OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>> & {
              muiName: string
            })>) => {
              const [key, Icon, path] = departmentListAndIcons

              return (
              <ListItem key={key as string} disablePadding sx={listItemStyle}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    ...listItemButtonStyle
                  }}
                  onClick={() => { router.push(path as string) }}
                >
                  <ListItemIcon
                    sx={{
                      mr: open ? 3 : 'auto',
                      ...listItemIconStyle
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={key as string} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              )
            })}
          </List>
        </Drawer>

  )
}
