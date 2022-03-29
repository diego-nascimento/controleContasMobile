import styled, {css} from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const Wrapper = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.spacings.xxxxSmall};
    padding: ${theme.spacings.xSmall}
    background-color: ${theme.pallete.primary.color1};
    border-bottom-width: 1px;
  `}
`;

export const WrapperLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerLeft = styled.View`
  ${({theme}) => css`
    margin-left: ${theme.spacings.xSmall};
  `}
`;

export const MinusIcon = styled(Icons).attrs(({theme}) => ({
  name: 'minus-circle',
  color: theme.pallete.error.color2,
  size: 17,
}))``;

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

export const ContainerRight = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

export const ValueText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.sizes.xMedium};
    color: ${theme.pallete.error.color3};
  `}
`;

export const PaymentDateText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.italic};
    font-size: ${theme.font.sizes.small};
    color: ${theme.pallete.primary.color3};
  `}
`;
