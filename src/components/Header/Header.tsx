import React from 'react';

import ThemeSwitch from '../ThemeSwitch';
import Typography from '../Typography';
import * as Styled from './Header.style';

const Header: React.FC = () => {
  return (
    <Styled.HeaderWrapper>
      <Typography color="primary" variant="xl" weight={600}>
        Angle Health
      </Typography>
      <ThemeSwitch />
    </Styled.HeaderWrapper>
  );
};

export default Header;
