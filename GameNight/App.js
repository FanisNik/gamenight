import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlurView } from 'expo-blur';
import HomeScreen from './screens/HomeScreen';
import LighterScreen from './screens/LighterScreen';
import TruthOrDareScreen from './screens/TruthOrDareScreen';
import NeverHaveIEverScreen from './screens/NeverHaveIEverScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/background.jpg')} 
      style={styles.background}
    >
      <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',  
              shadowColor: 'transparent', 
              borderBottomWidth: 0, 
            },
            headerTransparent: true,
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'transparent', 
            },
            contentStyle: {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Lighter" component={LighterScreen} />
          <Stack.Screen name="TruthOrDare" component={TruthOrDareScreen} />
          <Stack.Screen name="NeverHaveIEver" component={NeverHaveIEverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});