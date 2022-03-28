import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    margin-top: ${theme.spacings.xxxxSmall};
    padding: ${theme.spacings.xSmall}
    background-color: ${theme.pallete.primary.color1};

    border-bottom-width: 1px;
  `}
`;

export const ContaName = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.pallete.primary.color3};
    text-transform: capitalize;
  `}
`;
