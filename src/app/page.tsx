'use client'

import type React from 'react'
import { redirect } from 'next/navigation'
export default function Home (): React.JSX.Element {
  redirect('/login')
}
