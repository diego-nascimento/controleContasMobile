import Icons from 'react-native-vector-icons/FontAwesome';
import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableHighlight`
  ${({theme}) => css`
    position: absolute;
    right: 0px;
    top: 0px;
    padding: ${theme.spacings.xxSmall} ${theme.spacings.xSmall};
  `}
`;

export const RefreshIcon = styled(Icons).attrs(({theme}) => ({
  name: 'refresh',
  size: 14,
  color: theme.pallete.primary.color1,
}))``;
