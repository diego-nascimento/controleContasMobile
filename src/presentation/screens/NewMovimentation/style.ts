import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    padding: ${theme.spacings.xxxSmall} ${theme.spacings.small};
  `}
`;

export const DateUserContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
