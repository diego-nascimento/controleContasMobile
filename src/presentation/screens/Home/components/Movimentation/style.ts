import styled, {css} from 'styled-components/native';

type WrapperParams = {
  status: 'entry' | 'exit' | undefined;
};

export const Wrapper = styled.View<WrapperParams>`
  ${({theme, status}) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.spacings.xxxSmall};
    padding: ${theme.spacings.xSmall};
    border-radius: ${theme.borderRadius}
    background-color: ${
      status === 'entry'
        ? theme.pallete.success.color1
        : theme.pallete.error.color1
    };
    border-width: 1px;
    border-color: ${
      status === 'entry'
        ? theme.pallete.success.color2
        : theme.pallete.error.color2
    }
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
