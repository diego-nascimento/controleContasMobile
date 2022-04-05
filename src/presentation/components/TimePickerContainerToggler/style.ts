import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableHighlight`
  ${({theme}) => css`
    border-width: 1px;
    border-color: ${theme.pallete.secondary.color3};
    padding: ${theme.spacings.xxxSmall};
    align-items: center;
    border-radius: ${theme.borderRadius};
  `}
`;

export const DateText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.medium};
    font-size: ${theme.font.sizes.small};
  `}
`;
