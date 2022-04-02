import {NavigationProp} from '@react-navigation/native';

import {FloatBottomButtonTypes} from '../../../components/FloatBottomButton';
import {AppNavigatorParams} from '../../../NavigatorsProps';

export interface handlePressOnButtonBottomParams {
  navigation: NavigationProp<AppNavigatorParams, 'Info'>;
}

export type handlePressOnButtonBottomResponseTypes = void;

export const handlePressOnButtonBottom = ({
  params,
}: FloatBottomButtonTypes<handlePressOnButtonBottomParams>) => {
  const {navigation} = params;
  navigation.navigate('NewMovimentation');
};
