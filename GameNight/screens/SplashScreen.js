import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

const SplashScreen = ({ onFinish }) => {
  const opacity = new Animated.Value(0); 
  const scale = new Animated.Value(0); 

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 1500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <LinearGradient
      colors={['#1D2A4B', '#3D2C60']} 
      style={styles.container}
    >
      <Animated.Image
        source={require('../assets/icon.png')}
        style={[styles.logo, { opacity, transform: [{ scale }] }]} 
      />
      <Animated.Text style={[styles.title, { opacity }]}>Welcome to GameNight!</Animated.Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, 
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#ffffff', 
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SplashScreen;