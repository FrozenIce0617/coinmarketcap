import React from 'react';

import Props from './types';
import * as Styled from './Typography.style';

const Typography: React.FC<Props> = (props: Props) => {
  const { className, children, color, variant, align, weight, ...rest } = props;

  return (
    <Styled.TypographyWrapper
      className={className}
      color={color}
      variant={variant}
      align={align}
      weight={weight}
      {...rest}
    >
      {children}
    </Styled.TypographyWrapper>
  );
};

export default Typography;
