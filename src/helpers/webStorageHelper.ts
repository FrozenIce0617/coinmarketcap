import { ThemeType } from '../theme';

export const THEME_TYPE = 'THEME_TYPE';

export const getTheme = () => {
  return localStorage.getItem(THEME_TYPE) || ThemeType.LIGHT;
};

export const saveTheme = (themeType: string) => {
  localStorage.setItem(THEME_TYPE, themeType);
};
