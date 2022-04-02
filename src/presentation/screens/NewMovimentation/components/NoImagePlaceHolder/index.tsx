import React from 'react';
import {ImagePicker} from '../../../../components/ImagePicker';
import {useNewMovimentaion} from '../../hooks';
import * as SC from './style';

export const NoImagePlaceholder: React.FC = () => {
  const {setShowImagePicker, setImage, showImagePicker} = useNewMovimentaion();
  return (
    <SC.Container>
      <ImagePicker
        setShow={setShowImagePicker}
        show={showImagePicker}
        setImage={setImage}
      />
      <SC.NoImageText>Se deseja inserir uma imagem: </SC.NoImageText>
      <SC.Button onPress={() => setShowImagePicker(true)}>
        <SC.TextButton>Aperte aqui</SC.TextButton>
      </SC.Button>
    </SC.Container>
  );
};
