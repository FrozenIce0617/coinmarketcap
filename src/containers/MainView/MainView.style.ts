import styled from 'styled-components';

export type HighlightTextProps = {
  isNegative: boolean;
};

export const MainWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.background[1]};
`;

export const Container = styled.div`
  padding: 24px;
`;

export const FlexCol = styled.div`
  display: flex;
  align-items: center;

  & > img {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
`;

export const HighlightText = styled.span<HighlightTextProps>`
  color: ${(props) =>
    props.isNegative
      ? props.theme.palette.text[5]
      : props.theme.palette.text[4]};
`;
