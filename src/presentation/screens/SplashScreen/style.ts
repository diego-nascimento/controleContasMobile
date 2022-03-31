import {Animated} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled(Animated.View)`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.pallete.secondary.color1};
    justify-content: center;
    align-items: center;
  `}
`;

export const BiggerText = styled(Animated.Text)`
  ${({theme}) => css`
    font-family: ${theme.font.family.italic};
    font-size: ${theme.font.sizes.xHuge};
    color: ${theme.pallete.primary.color1};
  `}
`;

export const Smaller = styled(Animated.Text)`
  ${({theme}) => css`
    font-family: ${theme.font.family.medium};
    font-size: ${theme.font.sizes.xLarge};
    color: ${theme.pallete.secondary.color4};
  `}
`;
