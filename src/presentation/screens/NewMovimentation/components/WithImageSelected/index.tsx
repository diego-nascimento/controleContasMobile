import React from 'react';
import {TouchableHighlight} from 'react-native';
import {ImagePicker} from '../../../../components/ImagePicker';
import {useNewMovimentaion} from '../../hooks';
import * as SC from './style';

export const WithImageSelected = () => {
  const {image, setImage, showImagePicker, setShowImagePicker} =
    useNewMovimentaion();
  return (
    <SC.Container>
      <TouchableHighlight onPress={() => setShowImagePicker(true)}>
        <SC.ImageStyled
          source={{
            uri: image?.uri,
          }}
        />
      </TouchableHighlight>
      <ImagePicker
        setShow={setShowImagePicker}
        show={showImagePicker}
        setImage={setImage}
      />
    </SC.Container>
  );
};
