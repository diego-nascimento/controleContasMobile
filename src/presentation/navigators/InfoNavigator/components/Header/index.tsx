import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {AppNavigatorParams} from '../../../../NavigatorsProps';
import * as SC from './style';

export const Header: React.FC = () => {
  const {navigate} =
    useNavigation<NavigationProp<AppNavigatorParams, 'Info'>>();
  return (
    <SC.HeaderContainer>
      <SC.LeftContainer>
        <SC.Logo>Gaelicos</SC.Logo>
      </SC.LeftContainer>
      <SC.RightContainer>
        <SC.NewUserButton onPress={() => navigate('NewUser')}>
          <SC.Icon name="user-plus" />
        </SC.NewUserButton>
      </SC.RightContainer>
    </SC.HeaderContainer>
  );
};
