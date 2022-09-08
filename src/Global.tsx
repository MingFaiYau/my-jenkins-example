import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { selectTheme } from './redux/features/global/globalSlice'
import { useAppSelector } from './redux/hooks'

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  }
`

interface Props {
  children: React.ReactNode
}

const Global: React.FC<Props> = ({ children }) => {
  const theme = useAppSelector(selectTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default React.memo(Global)
