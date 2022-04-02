import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
`;

export const ContaImage = styled.Image`
  ${({theme}) => css`
    height: 400px;
    width: ${RFValue(300)}px;
    margin: ${theme.spacings.small} ${theme.spacings.none};
  `}
`;
