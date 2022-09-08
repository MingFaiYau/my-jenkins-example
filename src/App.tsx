import React from 'react'
import styled from 'styled-components'

import Global from './Global'
import { useLanguagePicker } from './hooks/useLanguagePicker'
import { switchLanguage, switchThemeMode } from './redux/features/global/globalSlice'
import { useAppDispatch } from './redux/hooks'
import { mainBackgroundColor, mainFontColor } from './theme/color'

const Container = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${mainBackgroundColor};
  color: ${mainFontColor};
`

const App = () => {
  const dispatch = useAppDispatch()
  const { l } = useLanguagePicker()

  const onTitleClick = React.useCallback(() => {
    dispatch(switchLanguage())
    dispatch(switchThemeMode())
  }, [dispatch])

  return (
    <Global>
      <Container onClick={onTitleClick}>{l('title')}</Container>
    </Global>
  )
}

export default React.memo(App)
