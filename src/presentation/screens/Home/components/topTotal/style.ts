import styled, {css} from 'styled-components/native';

export const TotalContainer = styled.View`
  ${({theme}) => css`
    background-color: ${theme.pallete.secondary.color2};
    border-radius: ${theme.borderRadius};
    height: 120px;
    padding: ${theme.spacings.xxSmall};
    justify-content: flex-end;
  `}
`;

export const TotalValue = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.extralightItalic};
    font-size: ${theme.font.sizes.huge};
    color: ${theme.pallete.primary.color1};
  `};
`;
