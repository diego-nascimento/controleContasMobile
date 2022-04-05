import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  ${({theme}) => css`
    padding: ${theme.spacings.xxxSmall} ${theme.spacings.small}
      ${theme.spacings.large};
    justify-content: space-between;
    flex: 1;
  `}
`;

export const Formulario = styled.View``;
