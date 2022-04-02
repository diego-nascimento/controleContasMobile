import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const NoImageText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.medium};
    color: ${theme.pallete.primary.color3};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.small} ${theme.spacings.none}
      ${theme.spacings.xxxSmall};
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({theme}) => css`
    border-width: 1px;
    border-color: ${theme.pallete.secondary.color3};
    width: ${RFValue(80)}px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.pallete.secondary.color1};
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.xxxSmall};
  `}
`;

export const TextButton = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.regular};
    color: ${theme.pallete.primary.color1};
    font-size: ${theme.font.sizes.xSmall};
  `}
`;
