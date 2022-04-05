import React from 'react';
import * as SC from './style';

interface RefreshIconProps {
  handlePress: () => void;
}

export const RefreshIcon: React.FC<RefreshIconProps> = ({handlePress}) => {
  return (
    <SC.Container onPress={() => handlePress()}>
      <SC.RefreshIcon />
    </SC.Container>
  );
};
