import styled, {css} from 'styled-components/native';

export const ButtonInsert = styled.TouchableOpacity`
  ${({theme}) => css`
    align-self: center;
    border-radius: ${theme.borderRadius};
    border-width: 1px;
    padding: ${theme.spacings.xxSmall} ${theme.spacings.xxHuge};
    background-color: ${theme.pallete.secondary.color1};
    border-color: ${theme.pallete.secondary.color1};
  `}
`;

export const ButtonInsertText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.medium};
    font-size: ${theme.font.sizes.small};
    color: ${theme.pallete.primary.color1};
  `}
`;
