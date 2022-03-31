import {HomeParams} from '../screens/Home';

export type HomeNavigatorParams = {
  Splash: undefined;
  Info: undefined;
};

export type InfoNavigatorParams = {
  Entradas: HomeParams;
  Saidas: HomeParams;
  Extrato: undefined;
};
