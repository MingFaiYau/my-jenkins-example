import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DefaultTheme } from 'styled-components'

import { RootState } from '../../store'

export interface GlobalState {
  theme: DefaultTheme
  language: WebLanguage
}

export const getLanguageFromNavigator = (): WebLanguage => {
  if (navigator.language) {
    return navigator.language.includes('en') ? 'en' : 'zh'
  } else return 'zh'
}

const initialState: GlobalState = {
  theme: { mode: 'light' },
  language: getLanguageFromNavigator(),
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    switchThemeMode: (state) => {
      state.theme.mode = state.theme.mode === 'dark' ? 'light' : 'dark'
    },
    switchLanguage: (state) => {
      state.language = state.language === 'en' ? 'zh' : 'en'
    },
    changeLanguage: (state, action: PayloadAction<WebLanguage>) => {
      state.language = action.payload
    },
  },
})

// Action
export const { switchThemeMode, switchLanguage, changeLanguage } = globalSlice.actions

// Selector
export const selectTheme = (state: RootState) => state.global.theme
export const selectLanguage = (state: RootState) => state.global.language

export default globalSlice.reducer
