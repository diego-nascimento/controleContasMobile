import {RFPercentage} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.TouchableOpacity`
  ${({theme}) => css`
    width: 60px
    height:60px
    border-radius: ${RFPercentage(50)}px;
    position: absolute;
    bottom: 30px;
    right: 20px;
    background: ${theme.pallete.secondary.color1};
    border-width: 1px;
    justify-content: center;
    align-items: center;
  `}
`;

export const IconsStyled = styled(Icons).attrs(({theme}) => ({
  name: 'plus',
  size: 14,
  color: theme.pallete.primary.color1,
}))``;
