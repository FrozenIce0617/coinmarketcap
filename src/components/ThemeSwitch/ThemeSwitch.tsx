import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sun as SunIcon, Moon as MoonIcon } from '@styled-icons/bootstrap';

import { RootState } from '../../redux/store';
import * as appActions from '../../redux/app/actions';
import { ThemeType } from '../../theme';
import * as Styled from './ThemeSwitch.style';

const ThemeSwitch: React.FC = () => {
  const themeType = useSelector((state: RootState) => state.App.themeType);
  const dispatch = useDispatch();
  const isLight = themeType === ThemeType.LIGHT;

  const setTheme = React.useCallback(
    (themeType: string) => dispatch(appActions.setTheme(themeType)),
    [dispatch],
  );

  const toggleTheme = React.useCallback(
    (value: boolean) => {
      setTheme(value ? ThemeType.LIGHT : ThemeType.DARK);
    },
    [setTheme],
  );

  return (
    <Styled.SwitchWrapper onClick={() => toggleTheme(!isLight)}>
      {isLight ? <MoonIcon size={18} /> : <SunIcon color="#fff" size={18} />}
    </Styled.SwitchWrapper>
  );
};

export default ThemeSwitch;
