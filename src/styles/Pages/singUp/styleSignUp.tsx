import type React from 'react'
import BackgroundLoginPage from '../../public/images/backgroundLoginPage.png'

export const BackgroundStyle: React.CSSProperties = {
  height: '100vh',
  backgroundColor: 'black',
  backgroundImage: `url(${BackgroundLoginPage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '0',

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}
