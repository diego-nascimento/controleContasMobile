import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    padding: ${theme.spacings.xxxSmall} ${theme.spacings.small};
  `}
`;
