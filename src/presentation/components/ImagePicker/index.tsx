import React from 'react';
import {ImageURISource, TouchableHighlight} from 'react-native';

import * as SC from './style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface ImagePickerParams {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<ImageURISource | null>>;
}

export const ImagePicker: React.FC<ImagePickerParams> = ({
  setShow,
  show,
  setImage,
}) => {
  const handleLaunchLibrary = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result.assets) {
      setImage({
        uri: result.assets[0].uri,
      });
      setShow(false);
    }
  };

  const handleLaunchCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (result.assets) {
      setImage({
        uri: result.assets[0].uri,
      });
      setShow(false);
    }
  };
  return (
    <SC.Wrapper>
      <SC.ModalStyle isVisible={show}>
        <SC.Container>
          <SC.WarningText>Selecione a imagem</SC.WarningText>
          <SC.SelectorsContainer>
            <SC.ImagePickerOption onPress={handleLaunchLibrary}>
              <SC.ImagePickerOptionText>Abrir Galeria</SC.ImagePickerOptionText>
            </SC.ImagePickerOption>
            <SC.ImagePickerOption onPress={handleLaunchCamera}>
              <SC.ImagePickerOptionText>Abrir Camera</SC.ImagePickerOptionText>
            </SC.ImagePickerOption>
          </SC.SelectorsContainer>
          <TouchableHighlight onPress={() => setShow(false)}>
            <SC.CloseText>Cancelar</SC.CloseText>
          </TouchableHighlight>
        </SC.Container>
      </SC.ModalStyle>
    </SC.Wrapper>
  );
};
