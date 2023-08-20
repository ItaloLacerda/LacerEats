'use client'

import * as React from 'react'
import { Button, Typography, type SvgIconTypeMap, Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import { type OverridableComponent } from '@mui/material/OverridableComponent'

import { listIcons } from './constants'
import { buttonStyle, iconStyle, boxStyle } from '@/styles/pages/(internal-system)/global.style'

export default function Collaborators () {
  const router = useRouter()

  return (
    <Box sx={boxStyle}>
    {
      listIcons.map((departmentListAndIcons: Array<string | (OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>> & {
        muiName: string
      })>) => {
        const [key, Icon, path] = departmentListAndIcons

        return (
          <Button
            key={key as string}
            variant="outlined"
            sx={buttonStyle}
            onClick={() => { router.push(path as string) }}
          >

            <Icon sx={iconStyle} />
            <Typography>{key as string}</Typography>
          </Button>
        )
      })
    }
    </Box>

  )
}
