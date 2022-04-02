import styled, {css} from 'styled-components/native';
import {TextInput} from 'react-native-paper';

export const Wrapper = styled.View``;

export const Container = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    align-items: center;
    margin: ${theme.spacings.xxxSmall} ${theme.spacings.none};
  `}
`;

export const Label = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.sizes.xSmall};
    color: ${theme.pallete.primary.color3};
  `}
`;

export const TextField = styled(TextInput)`
  ${({theme}) => css`
    flex: 1;
    font-family: ${theme.font.family.medium};
    margin-left: ${theme.spacings.xxxxSmall};
    font-size: ${theme.font.sizes.xSmall};
    color: ${theme.pallete.secondary.color3};
    height: 40px;
  `}
`;

export const Error = styled.Text``;
