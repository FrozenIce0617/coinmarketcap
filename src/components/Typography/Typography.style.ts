import styled from 'styled-components';
import { palette } from 'styled-theme';

import Props from './types';

const colors = {
  primary: palette('primary', 0),
};

export const TypographyWrapper = styled.div<Props>`
  padding: 10px 0;
  color: ${(props) => colors[props.color || 'primary']};
  font-size: ${(props) => props.theme.size[props.variant || 'sm']}px;
  font-weight: ${(props) => props.weight || 300};
  text-align: ${(props) => props.align || 'left'};
`;
