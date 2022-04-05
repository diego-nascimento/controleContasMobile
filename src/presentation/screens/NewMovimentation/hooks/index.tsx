import {Control, useForm, UseFormHandleSubmit} from 'react-hook-form';
import React, {ReactNode} from 'react';
import {ImageURISource} from 'react-native';
import {userModel} from '../../../../models/user';
import {getUsersData} from './helpers/getUsersData';

interface FormData {
  name: string;
  value: string;
}

interface createContextTypes {
  control: Control<FormData, any>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  errors: any;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  date: Date;
  showTimePicker: boolean;
  setShowTimePicker: React.Dispatch<React.SetStateAction<boolean>>;
  showImagePicker: boolean;
  setShowImagePicker: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<ImageURISource | null>>;
  image: ImageURISource | null;
  users: userModel[];
  loading: boolean;
  error: string | null;
  userSelected: userModel | null;
  setUserSelected: React.Dispatch<React.SetStateAction<userModel | null>>;
  handlePressFinalizar: () => void;
  modalFinalizarShow: boolean;
  setModalFinalizarShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewMovimentationContext = React.createContext({} as createContextTypes);

type NewMovimentationProviderProps = {
  children: ReactNode;
};

const NewMovimentationProvider = ({
  children,
}: NewMovimentationProviderProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      value: '0',
    },
  });
  const [date, setDate] = React.useState<Date>(new Date());
  const [showTimePicker, setShowTimePicker] = React.useState<boolean>(false);
  const [showImagePicker, setShowImagePicker] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<ImageURISource | null>(null);
  const [users, setUsers] = React.useState<userModel[]>([]);
  const [userSelected, setUserSelected] = React.useState<userModel | null>(
    null,
  );
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [modalFinalizarShow, setModalFinalizarShow] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    getUsersData({
      setError,
      setLoading,
      setUsers,
    });
  }, []);

  const handlePressFinalizar = () => {
    setModalFinalizarShow(true);
  };

  return (
    <NewMovimentationContext.Provider
      value={{
        control,
        handleSubmit,
        setModalFinalizarShow,
        errors,
        error,
        handlePressFinalizar,
        setDate,
        date,
        setShowTimePicker,
        showTimePicker,
        setShowImagePicker,
        showImagePicker,
        setImage,
        image,
        users,
        loading,
        userSelected,
        setUserSelected,
        modalFinalizarShow,
      }}>
      {children}
    </NewMovimentationContext.Provider>
  );
};

function useNewMovimentaion() {
  const context = React.useContext(NewMovimentationContext);
  if (context === undefined) {
    throw new Error('useNewMovimentaion must be used within a HomeProvider');
  }
  return context;
}

export {NewMovimentationProvider, useNewMovimentaion};
