import {IImage} from './image';
import {userModel} from './user';

export type contaModel = {
  id: number;
  name: string;
  value: number;
  expirationDate: string;
  paymentDate: string | null;
  image?: IImage | null;
  user?: userModel | null;
};
