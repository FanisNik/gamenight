import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const NeverHaveIEverScreen = () => {
  const questions = [
    "Never have I ever gone skinny dipping.",
    "Never have I ever told a lie.",
    // adding questions
  ];

  const extremeQuestions = [
    "Never have I ever had a one-night stand.",
    "Never have I ever sent a naughty text to the wrong person.",
    // adding questions
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isExtremeSelected, setIsExtremeSelected] = useState(null); 
  const [isGameSelected, setIsGameSelected] = useState(false); 

  const questionsToDisplay = isExtremeSelected ? extremeQuestions : questions;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsToDisplay.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert("End of questions", "You've reached the end of the questions.", [
        { text: "OK", onPress: () => setCurrentQuestionIndex(0) }
      ]);
    }
  };

  const handleSkipQuestion = () => {
    const randomSips = Math.floor(Math.random() * 4) + 1; 
    Alert.alert(`Skip Question`, `You have to drink ${randomSips} sips!`, [
      { text: "OK", onPress: handleNextQuestion }
    ]);
  };

  const handleSelectGame = () => {
    setIsGameSelected(true);
  };

  const handleSelectStandard = () => {
    setIsExtremeSelected(false);
    setCurrentQuestionIndex(0); 
  };

  const handleSelectExtreme = () => {
    setIsExtremeSelected(true);
    setCurrentQuestionIndex(0); 
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={{ flex: 1 }}>
      <View style={styles.centered}>
        <Text style={styles.title}>Never Have I Ever</Text>
        {!isGameSelected ? (
          <>
            <Button title="Start Game" onPress={handleSelectGame} color="#FF6347" />
          </>
        ) : isExtremeSelected === null ? (
          <>
            <Button title="Standard" onPress={handleSelectStandard} color="#4682B4" />
            <Button title="Extreme" onPress={handleSelectExtreme} color="#FF4500" />
          </>
        ) : (
          <>
            <Text style={styles.question}>{questionsToDisplay[currentQuestionIndex]}</Text>
            <Button title="Next Question" onPress={handleNextQuestion} color="#1E90FF" />
            <Button title="Skip Question" onPress={handleSkipQuestion} color="#FF69B4" />
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  question: {
    fontSize: 24,
    marginVertical: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 160, 
  },
});

export default NeverHaveIEverScreen;