import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const TruthOrDareScreen = () => {
  const okayTruthQuestions = [
    "Truth: What's your most embarrassing moment?",
    // adding questions
  ];

  const okayDareQuestions = [
    "Dare: Do 10 push-ups.",
    // adding questions
  ];

  const extremeTruthQuestions = [
    "Truth: What's the craziest thing you've ever done?",
    // adding questions
  ];

  const extremeDareQuestions = [
    "Dare: Sing a song out loud.",
    // adding questions
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isExtremeSelected, setIsExtremeSelected] = useState(null); 
  const [isGameSelected, setIsGameSelected] = useState(false); 
  const [isTruthSelected, setIsTruthSelected] = useState(null); 

  let questions;
  if (isExtremeSelected) {
    questions = isTruthSelected ? extremeTruthQuestions : extremeDareQuestions;
  } else {
    questions = isTruthSelected ? okayTruthQuestions : okayDareQuestions;
  }

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
    setIsTruthSelected(null); 
  };

  const handleSelectExtreme = () => {
    setIsExtremeSelected(true);
    setCurrentQuestionIndex(0); 
    setIsTruthSelected(null); 
  };

  const handleSelectTruth = () => {
    setIsTruthSelected(true);
    setCurrentQuestionIndex(0); 
  };

  const handleSelectDare = () => {
    setIsTruthSelected(false);
    setCurrentQuestionIndex(0); 
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Truth or Dare</Text>
        {!isGameSelected ? (
          <>
            <Button title="Start Game" onPress={handleSelectGame} color="#FF6347" />
          </>
        ) : isExtremeSelected === null ? (
          <>
            <Button title="Standard" onPress={handleSelectStandard} color="#4682B4" />
            <Button title="Extreme" onPress={handleSelectExtreme} color="#FF4500" />
          </>
        ) : isTruthSelected === null ? (
          <>
            <Button title="Truth" onPress={handleSelectTruth} color="#32CD32" />
            <Button title="Dare" onPress={handleSelectDare} color="#FF0000" />
          </>
        ) : (
          <>
            <Text style={styles.question}>{questions[currentQuestionIndex]}</Text>
            <Button title="Next Question" onPress={handleNextQuestion} color="#1E90FF" />
            <Button title="Skip Question" onPress={handleSkipQuestion} color="#FF69B4" />
          </>
        )}
      </View>
    </ImageBackground>
  );
};
//stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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

export default TruthOrDareScreen;