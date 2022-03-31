import styled, {css} from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  ${({theme}) => css`
    padding: ${theme.spacings.none} ${theme.spacings.xSmall};
  `}
`;

export const ButtonSelectMonthText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.medium};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxxSmall} ${theme.spacings.xxxSmall};
    color: ${theme.pallete.primary.color3};
    border-width: 1px;
    border-radius: ${theme.borderRadius};
    border-color: ${theme.pallete.secondary.color3};
  `}
`;

export const SelectMonthContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonSelectMonth = styled.TouchableOpacity`
  ${({theme}) => css`
    border-radius: ${theme.borderRadius};
    justify-content: center;
    align-items: center;
    margin: ${theme.spacings.none} ${theme.spacings.none};
  `};
`;
