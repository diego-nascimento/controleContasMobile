import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    margin-top: ${theme.spacings.xxxxSmall};
    padding: ${theme.spacings.xSmall};
  `}
`;
