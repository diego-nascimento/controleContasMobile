import Modal from 'react-native-modal';
import styled, {css} from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity``;

export const ModalStyled = styled(Modal)``;

export const Container = styled.View`
  ${({theme}) => css`
    background-color: ${theme.pallete.primary.color1};
    padding: ${theme.spacings.large};
  `}
`;
