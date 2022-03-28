import styled, {css} from 'styled-components/native';

export const Text = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.pallete.error.color1};
  `}
`;
