import styled, {css} from 'styled-components/native';

export const TextStyled = styled.Text`
  font-size: 25px;

  ${({theme}) => css`
    font-family: ${theme.font.family.bold};
  `}
`;
