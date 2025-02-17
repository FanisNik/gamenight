import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/background copy 4.jpg')} style={styles.background}>
      <View style={styles.centered}>
        <Text style={styles.title}>Choose Your Game</Text>
        <View style={styles.buttonContainer}>
          <Button title="Lighter" onPress={() => navigation.navigate('Lighter')} color="#FF4500" />
          <Button title="Truth or Dare" onPress={() => navigation.navigate('TruthOrDare')} color="#FF4500" />
          <Button title="Never Have I Ever" onPress={() => navigation.navigate('NeverHaveIEver')} color="#FF4500" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginVertical: 50,
    color: '#FF1493',
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
});

export default HomeScreen;