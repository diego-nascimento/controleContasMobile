import React from 'react';

import {useNewMovimentaion} from '../../hooks';
import {NoImagePlaceholder} from '../NoImagePlaceHolder';
import {WithImageSelected} from '../WithImageSelected';
import * as SC from './style';

export const ContaImagePicker = () => {
  const {image} = useNewMovimentaion();
  return (
    <SC.Container>
      {image ? <WithImageSelected /> : <NoImagePlaceholder />}
    </SC.Container>
  );
};
