import React from 'react';
import * as SC from './style';

interface SelectDropDown<t> {
  data: t[];
  setSelected: React.Dispatch<React.SetStateAction<t | null>>;
  fieldToShow: string;
  nullOption: boolean;
  placeholderMessage: string;
}

export function SelectDropDownComponent<t>({
  data,
  setSelected,
  fieldToShow,
  placeholderMessage,
  nullOption,
}: SelectDropDown<t>) {
  const handleOnSelect = (selectedItem: any) => {
    setSelected(selectedItem);
  };

  return (
    <SC.SelectStyled
      data={nullOption ? [{} as t, ...data] : data}
      defaultButtonText={placeholderMessage}
      onSelect={handleOnSelect}
      rowTextForSelection={item => {
        return item[fieldToShow];
      }}
      buttonTextAfterSelection={selectedItem => {
        return selectedItem[fieldToShow];
      }}
    />
  );
}
