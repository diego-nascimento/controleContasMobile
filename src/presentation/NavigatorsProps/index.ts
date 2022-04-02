import {HomeParams} from '../screens/Home';

export type HomeNavigatorParams = {
  Splash: undefined;
  App: undefined;
};

export type InfoNavigatorParams = {
  Entradas: HomeParams;
  Saidas: HomeParams;
  Extrato: undefined;
};

export type AppNavigatorParams = {
  Info: undefined;
  NewMovimentation: undefined;
  NewUser: undefined;
};
