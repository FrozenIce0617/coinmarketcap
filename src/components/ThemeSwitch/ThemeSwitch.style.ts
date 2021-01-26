import styled from 'styled-components';

type SwitchWrapperProps = {
  isLight?: boolean;
};

export const SwitchWrapper = styled.div<SwitchWrapperProps>`
  cursor: pointer;

  & > svg {
    color: ${(props) =>
      props.isLight
        ? props.theme.palette.secondary[0]
        : props.theme.palette.secondary[0]};
  }
`;
