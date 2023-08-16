'use client'

import * as React from 'react'
import { Button, Typography, type SvgIconTypeMap } from '@mui/material'
import { useRouter } from 'next/navigation'
import { type OverridableComponent } from '@mui/material/OverridableComponent'

import { listIcons } from '../constants'
import { buttonStyle, iconStyle } from '@/styles/pages/(internal-system)/home/home.style'

export default function Home () {
  const router = useRouter()

  return (
    <>
    {
      listIcons.map((departmentListAndIcons: Array<string | (OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>> & {
        muiName: string
      })>, index) => {
        const [key, Icon, path] = departmentListAndIcons

        if (index !== 0) {
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
        }
      })
    }
    </>

  )
}
