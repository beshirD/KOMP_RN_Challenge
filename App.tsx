/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import MainLayout from './src/layouts/MainLayout';

function App(): JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <MainLayout />
    </ApplicationProvider>
  );
}

export default App;
