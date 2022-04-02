import styled, {css} from 'styled-components/native';
import Modal from 'react-native-modal';

export const Wrapper = styled.View``;

export const ModalStyle = styled(Modal)``;

export const Container = styled.View`
  ${({theme}) => css`
    background-color: ${theme.pallete.primary.color1};
    border-radius: ${theme.borderRadius};
    align-items: center;
    padding: ${theme.spacings.large};
  `}
`;

export const WarningText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.medium};
    font-size: ${theme.font.sizes.small};
    color: ${theme.pallete.primary.color3};
  `}
`;

export const SelectorsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ImagePickerOption = styled.TouchableHighlight`
  ${({theme}) => css`
    background-color: ${theme.pallete.secondary.color1};
    margin: ${theme.spacings.medium};
    border-radius: ${theme.borderRadius};
  `}
`;

export const ImagePickerOptionText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.medium};
    font-size: ${theme.font.sizes.small};
    color: ${theme.pallete.primary.color1};
    padding: ${theme.spacings.xxSmall} ${theme.spacings.small};
  `}
`;

export const CloseText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.medium};
    font-size: ${theme.font.sizes.small};
    color: ${theme.pallete.primary.color3};
  `}
`;
