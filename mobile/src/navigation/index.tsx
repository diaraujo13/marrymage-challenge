import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { RootStackParamList } from '../types';
import { HomeScreen, IntroScreen } from '~/screens';


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Intro">
    <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
  )

const NavigationRoot =  () => (
  <NavigationContainer>
      <RootNavigator />
  </NavigationContainer>
);

export default NavigationRoot;