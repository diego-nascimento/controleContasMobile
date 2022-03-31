import LinearGradient from 'react-native-linear-gradient';
import styled, {css} from 'styled-components/native';

export const TotalContainer = styled(LinearGradient).attrs(({theme}) => ({
  colors: [theme.pallete.secondary.color1, theme.pallete.secondary.color2],
  start: {x: 0, y: 1},
  end: {x: 1, y: 1},
  useAngle: true,
  angle: 70,
}))`
  ${({theme}) => css`
    height: 140px;
    padding: ${theme.spacings.xxSmall};
    justify-content: center;
    align-items: center;
    margin: ${theme.spacings.xSmall} ${theme.spacings.small};
    border-radius: ${theme.borderRadius};
  `}
`;

export const TotalValue = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.sizes.xHuge};
    color: ${theme.pallete.primary.color1};
  `};
`;
