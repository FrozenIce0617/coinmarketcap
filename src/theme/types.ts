export enum ThemeType {
  LIGHT = 'LIGHT_THEME',
  DARK = 'DARK_THEME',
}

export type ThemePalette = {
  primary: string[];
  secondary: string[];
  gray: string[];
  text: string[];
  background: string[];
};

export type ThemeSize = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type Theme = {
  palette: ThemePalette;
  size: ThemeSize;
};

export default Theme;
