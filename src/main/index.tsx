import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {HomeNavigator} from '../presentation/navigators/HomeNavigator';
import theme from '../presentation/styles/theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeNavigator />
    </ThemeProvider>
  );
};
