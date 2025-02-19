import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens'; 
import HomeScreen from './screens/HomeScreen';
import LighterScreen from './screens/LighterScreen';
import TruthOrDareScreen from './screens/TruthOrDareScreen';
import NeverHaveIEverScreen from './screens/NeverHaveIEverScreen';
import SplashScreen from './screens/SplashScreen'; 

enableScreens(); 

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onFinish={handleFinishLoading} />;
  }

  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.background}
    >
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

            animation: 'slide_from_bottom', 
            gestureEnabled: true, 
            cardStyleInterpolator: ({ current, next, inverted, layouts }) => {
              const progress = Animated.add(current.progress, next ? next.progress : 0);
              return {
                cardStyle: {
                  opacity: progress,
                  transform: [
                    {
                      translateX: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Lighter" component={LighterScreen} />
          <Stack.Screen name="TruthOrDare" component={TruthOrDareScreen}  />
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