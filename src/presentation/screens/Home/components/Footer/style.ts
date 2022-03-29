import styled, {css} from 'styled-components/native';

export const SelectMonthDefinedContainer = styled.View`
  flex-direction: row;
`;

export const ButtonSelectMonthDefined = styled.TouchableOpacity`
  ${({theme}) => css`
    background-color: ${theme.pallete.primary.color1};
    border-radius: ${theme.borderRadius};
    justify-content: center;
    align-items: center;
    margin: ${theme.spacings.none} ${theme.spacings.xxSmall};
  `};
`;

export const ButtonSelectMonthTextDefined = styled.Text`
  ${({theme}) => css`
  font-family: ${theme.font.family.medium};
  font-size: ${theme.font.sizes.xxSmall};
  padding:${theme.spacings.xxxxSmall} ${theme.spacings.xxxSmall}
  color: ${theme.pallete.secondary.color3};
`}
`;
