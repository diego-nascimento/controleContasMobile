import styled, {css} from 'styled-components/native';

export const DateUserContainer = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    justify-content: space-around;
    margin: ${theme.spacings.xxxSmall} ${theme.spacings.xxxxSmall};
  `}
`;

export const UserPicker = styled.View`
  ${({theme}) => css`
    margin-left: ${theme.spacings.xxxxSmall};
  `}
`;
