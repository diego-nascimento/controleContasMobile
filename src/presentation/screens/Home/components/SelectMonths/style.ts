import styled, {css} from 'styled-components/native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.ScrollView`
  ${({theme}) => css`
    padding: ${theme.spacings.none} ${theme.spacings.small};
  `}
`;

export const ButtonSelectMonthText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.medium};
    font-size: ${theme.font.sizes.xxSmall};
    padding: ${theme.spacings.xxxSmall} ${theme.spacings.xxxSmall};
    color: ${theme.pallete.primary.color3};
  `}
`;

export const SelectMonthContainer = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    justify-content: space-around;
    border-width: 1px;
    border-radius: ${theme.borderRadius};
  `};
`;

export const ButtonSelectMonth = styled.TouchableOpacity`
  ${({theme}) => css`
    border-radius: ${theme.borderRadius};
    justify-content: center;
    align-items: center;
    margin: ${theme.spacings.none} ${theme.spacings.none};
    flex-direction: row;
    position: relative;
  `};
`;

export const IconsStyled = styled(Icons).attrs(({theme}) => ({
  color: theme.pallete.secondary.color3,
  size: 20,
}))`
  position: relative;
  top: -2px;
`;
