import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const LighterScreen = () => {
  const okayQuestions = [
    "Give the lighter to whoever you think is the funniest.",
    "Give the lighter to whoever you think would survive a zombie apocalypse.",
    // adding questions
  ];

  const extremeQuestions = [
    "Give the lighter to whoever you think is the most adventurous in bed.",
    "Give the lighter to whoever you think has the wildest fantasies.",
    // adding questions
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isExtremeSelected, setIsExtremeSelected] = useState(null); 
  const [isGameSelected, setIsGameSelected] = useState(false); 

  const questions = isExtremeSelected ? extremeQuestions : okayQuestions;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
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
      <View style={styles.container}>
        <Text style={styles.title}>Lighter Game</Text>
        {!isGameSelected ? (
          <>
            <View style={styles.centered}>
              <Button title="Start Game" onPress={handleSelectGame} color="#FF6347" />
            </View>
          </>
        ) : isExtremeSelected === null ? (
          <>
            <View style={styles.centered}>
              <Button title="Standard" onPress={handleSelectStandard} color="#4682B4" />
              <Button title="Extreme" onPress={handleSelectExtreme} color="#FF4500" />
            </View>
          </>
        ) : (
          <>
            <View style={styles.centered}>
              <Text style={styles.question}>{questions[currentQuestionIndex]}</Text>
              <Button title="Next Question" onPress={handleNextQuestion} color="#1E90FF" />
              <Button title="Skip Question" onPress={handleSkipQuestion} color="#FF69B4" />
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const glowRadius = 11; 

//stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  title: {
    fontSize: 28,
    marginVertical: 50,
    color: '#FF1493',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.7)', 
    textShadowOffset: { width: 0, height: 0 }, 
    textShadowRadius: glowRadius, 
  },
  question: {
    fontSize: 24,
    marginVertical: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  centered: {
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default LighterScreen;