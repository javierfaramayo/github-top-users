/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createMuiTheme } from '@material-ui/core/styles'

interface PaletteColor {
  light?: string
  main: string
  dark?: string
  contrastText?: string
}

const primaryColors: PaletteColor = {
  main: '#282828',
  light: '#FFFFFF',
  dark: '#282828',
}

const secondaryColors: PaletteColor = {
  main: '#3B89FF',
  dark: '#2564C5',
}

const infoColors: PaletteColor = {
  main: '#3483fa',
}

export const myTheme = createMuiTheme({
  palette: {
    primary: primaryColors,
    secondary: secondaryColors,
    info: infoColors,
  },
})
