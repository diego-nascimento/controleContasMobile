import styled, {css} from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const WrapperLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerLeft = styled.View`
  ${({theme}) => css`
    margin-left: ${theme.spacings.xSmall};
  `}
`;

export const Icon = styled(Icons).attrs({
  size: 17,
})``;

export const NameText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.regular};
    color: ${theme.pallete.primary.color3};
    font-size: ${theme.font.sizes.xSmall};
  `}
`;

export const ContaName = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.pallete.primary.color3};
    text-transform: capitalize;
  `}
`;
