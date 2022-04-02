import styled, {css} from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const HeaderContainer = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.spacings.xxSmall} ${theme.spacings.small}
      ${theme.spacings.xxxxSmall};
    background-color: ${theme.pallete.white};
  `}
`;

export const LeftContainer = styled.View``;

export const Logo = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.bold};
    color: ${theme.pallete.secondary.color1};
  `}
`;

export const RightContainer = styled.View``;

export const NewUserButton = styled.TouchableHighlight``;

export const Icon = styled(Icons).attrs(({theme}) => ({
  size: 20,
  color: theme.pallete.secondary.color1,
}))``;
