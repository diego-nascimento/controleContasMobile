import styled, {css} from 'styled-components/native';

export const ButtonSelectMonthText = styled.Text`
  ${({theme}) => css`
  font-family: ${theme.font.family.regular};
  font-size: ${theme.font.sizes.xSmall};
  padding:${theme.spacings.xxxxSmall} ${theme.spacings.xxxSmall}
  color: ${theme.pallete.primary.color1};
`}
`;

export const SelectMonthContainer = styled.View`
  flex-direction: row;
`;

export const ButtonSelectMonth = styled.TouchableOpacity`
  ${({theme}) => css`
    background-color: ${theme.pallete.secondary.color3};
    border-radius: ${theme.borderRadius};
    justify-content: center;
    align-items: center;
    margin: ${theme.spacings.none} ${theme.spacings.xxSmall};
  `};
`;
