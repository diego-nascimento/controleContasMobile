import React from 'react';
import * as SC from './style';

interface SelectDropDown<t> {
  data: t[];
  setSelected: React.Dispatch<React.SetStateAction<t>>;
  fieldToShow: string;
}

export function SelectDropDownComponent<t>({
  data,
  setSelected,
  fieldToShow,
}: SelectDropDown<t>) {
  const handleOnSelect = (selectedItem: any) => {
    setSelected(selectedItem);
  };

  return (
    <SC.SelectStyled
      data={data}
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
