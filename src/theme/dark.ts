import lightTheme from './light';
import Theme from './types';

const darkTheme: Theme = {
  ...lightTheme,
  palette: {
    primary: ['#23dcc8'],
    secondary: ['#cc6'],
    gray: ['#303942'],
    text: ['#fff', '#f3f4f4', '#d1d5da', '#fff', '#009e73', '#d94040'],
    background: ['#101921', '#000', '#303942'],
  },
};

export default darkTheme;
