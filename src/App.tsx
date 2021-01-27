import React from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store, { RootState } from './redux/store';
import themes, { ThemeType } from './theme';
import MainView from './containers/MainView';

import 'antd/dist/antd.css';

const Root: React.FC = () => {
  const themeType = useSelector((state: RootState) => state.App.themeType);
  const isLight = themeType === ThemeType.LIGHT;
  const { light, dark } = themes;
  const defaultTheme = isLight ? light : dark;

  return (
    <ThemeProvider theme={defaultTheme}>
      <MainView />
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
