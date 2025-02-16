import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LighterScreen from './screens/LighterScreen';
import TruthOrDareScreen from './screens/TruthOrDareScreen';
import NeverHaveIEverScreen from './screens/NeverHaveIEverScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lighter" component={LighterScreen} />
        <Stack.Screen name="TruthOrDare" component={TruthOrDareScreen} />
        <Stack.Screen name="NeverHaveIEver" component={NeverHaveIEverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}