import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    margin-top: ${theme.spacings.xxxSmall};
    padding: ${theme.spacings.none} ${theme.spacings.xSmall};
  `}
`;
