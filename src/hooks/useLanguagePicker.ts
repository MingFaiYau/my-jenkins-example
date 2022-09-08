import { useCallback } from 'react'

import en from '../language/en.json'
import zh from '../language/zh.json'
import { selectLanguage } from '../redux/features/global/globalSlice'
import { useAppSelector } from '../redux/hooks'
import { store } from '../redux/store'

export type LanguageKey = keyof typeof en
export interface LanguageOption {
  args: (string | number)[]
  defaultValue: string
}

export const useLanguagePicker = () => {
  const language = useAppSelector(selectLanguage)
  const l = useCallback(
    (key: LanguageKey, options?: LanguageOption) => {
      const data = language === 'zh' ? zh : en
      const string = data[key] || options?.defaultValue || key
      return addArgsInString(string, options?.args)
    },
    [language],
  )

  return { l }
}

export const l = (key: LanguageKey, options?: LanguageOption) => {
  const language = store.getState().global.language || 'zh'
  const data = language === 'zh' ? zh : en
  const string = data[key] || options?.defaultValue || key
  return addArgsInString(string, options?.args)
}

const addArgsInString = (value: string, args?: (string | number)[]) => {
  if (!args || args.length === 0) return value

  let result = value
  const regex = /\${[0-9]}/g
  let matchValues: RegExpMatchArray | null = null
  if ((matchValues = value.match(regex)) !== null) {
    matchValues.forEach((matchValue) => {
      const index = parseInt(matchValue.replace('${', '').replace('}', ''), 10)
      if (!isNaN(index) && args[index - 1] !== undefined)
        result = result.replace(matchValue, args[index - 1].toString())
    })
  }
  return result
}
