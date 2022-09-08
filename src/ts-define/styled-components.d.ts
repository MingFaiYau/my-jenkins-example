import 'styled-components'

export type ThemeMode = 'dark' | 'light'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeMode
  }
}
