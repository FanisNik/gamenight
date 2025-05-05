import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const shuffleQuestions = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const TruthOrDareScreen = () => {
  const okayTruthQuestions = [
    
  ];

  const okayDareQuestions = [
   
  ];

  const extremeTruthQuestions = [
   

  ];

  const extremeDareQuestions = [
    
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

  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleQuestions([...questions]));

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
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
    setShuffledQuestions(shuffleQuestions([...okayTruthQuestions]));
  };

  const handleSelectExtreme = () => {
    setIsExtremeSelected(true);
    setCurrentQuestionIndex(0); 
    setIsTruthSelected(null); 
    setShuffledQuestions(shuffleQuestions([...extremeTruthQuestions]));
  };

  const handleSelectTruth = () => {
    setIsTruthSelected(true);
    setCurrentQuestionIndex(0); 
    if (isExtremeSelected) {
      setShuffledQuestions(shuffleQuestions([...extremeTruthQuestions]));
    } else {
      setShuffledQuestions(shuffleQuestions([...okayTruthQuestions]));
    }
  };

  const handleSelectDare = () => {
    setIsTruthSelected(false);
    setCurrentQuestionIndex(0); 
    if (isExtremeSelected) {
      setShuffledQuestions(shuffleQuestions([...extremeDareQuestions]));
    } else {
      setShuffledQuestions(shuffleQuestions([...okayDareQuestions]));
    }
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={{ flex: 1 }}>
      <View style={styles.centered}>
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
            <Button title="Truth" onPress={handleSelectTruth} color="#1E90FF" />
            <Button title="Dare" onPress={handleSelectDare} color="#FF69B4" />
          </>
        ) : (
          <>
            <Text style={styles.question}>{shuffledQuestions[currentQuestionIndex]}</Text>
            <Button title="Next Question" onPress={handleNextQuestion} color="#1E90FF" />
            <Button title="Skip Question" onPress={handleSkipQuestion} color="#FF69B4" />
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const glowRadius = 11; 

//stylesheet
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
});

export default TruthOrDareScreen;
