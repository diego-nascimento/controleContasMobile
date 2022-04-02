import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    margin: ${theme.spacings.small};
  `}
`;

export const ImageStyled = styled.Image`
  ${({theme}) => css`
    width: ${RFValue(300)}px;
    height: ${RFValue(300)}px;
    border-radius: ${theme.borderRadius};
  `}
`;
