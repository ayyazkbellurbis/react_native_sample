import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { container } from './utils/inversify.config';
import { TYPES } from './utils/types';
import { ISampleRepository } from './modules/repositories/ISampleRepository';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './modules/presentation/screens/Homescreen';
import Profilescreen from './modules/presentation/screens/Profilescreen';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Profile" component={Profilescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
