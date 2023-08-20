'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import { Breadcrumbs, Link, Stack } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export default function ComponentPath () {
  const pathname = usePathname()
  const listPhaname = pathname.split('/')

  return (
      <>
      {
        pathname !== '/home' && (
            <Stack spacing={2}>
              <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                  >
                  {listPhaname.map((path, index, array) => {
                    if (index === 0) {
                      return (
                            <Link underline="hover" key="home" color="inherit" href={'/home'}>
                                home
                            </Link>
                      )
                    }

                    const hRef = array.slice(0, index + 1).join('/')

                    return (
                        <Link underline="hover" key={path} color="inherit" href={hRef}>
                          {path}
                        </Link>
                    )
                  })}
              </Breadcrumbs>
        </Stack>
        )
            }
    </>
  )
}
