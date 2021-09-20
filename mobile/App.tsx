import React from 'react';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';

import {NativeBaseProvider} from 'native-base';
import { StatusBar } from 'expo-status-bar';
import {theme} from '~/common'
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Navigation />
        <StatusBar />
      </NativeBaseProvider>
    );
  }
}
