import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from '../presentation/styles/theme';

import * as SC from './style';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SC.TextStyled>App</SC.TextStyled>
    </ThemeProvider>
  );
};
