import React from 'react';
import * as SC from './style';

export type FloatBottomButtonTypes<t> = {
  params: t;
};

interface FloatBottomButton<t, r> {
  callBack: ({params}: FloatBottomButtonTypes<t>) => r;
  params: t;
}

export function FloatBottomButton<t, r>({
  callBack,
  params,
}: FloatBottomButton<t, r>) {
  const handlePress = () => {
    callBack({
      params,
    });
  };
  return (
    <SC.Container onPress={handlePress}>
      <SC.IconsStyled name="plus" />
    </SC.Container>
  );
}
