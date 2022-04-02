import {Control, useForm, UseFormHandleSubmit} from 'react-hook-form';
import React, {ReactNode} from 'react';
import {ImageURISource} from 'react-native';

interface FormData {
  name: string;
  value: string;
  user: number | undefined;
  status: 'exit' | 'entry';
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
      status: 'exit',
      value: '0',
      user: undefined,
    },
  });
  const [date, setDate] = React.useState<Date>(new Date());
  const [showTimePicker, setShowTimePicker] = React.useState<boolean>(false);
  const [showImagePicker, setShowImagePicker] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<ImageURISource | null>(null);

  return (
    <NewMovimentationContext.Provider
      value={{
        control,
        handleSubmit,
        errors,
        setDate,
        date,
        setShowTimePicker,
        showTimePicker,
        setShowImagePicker,
        showImagePicker,
        setImage,
        image,
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
