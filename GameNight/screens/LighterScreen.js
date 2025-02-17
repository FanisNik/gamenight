import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const LighterScreen = () => {
  const okayQuestions = [
    "Give the lighter to whoever you think is the funniest.",
    "Give the lighter to whoever you think would survive a zombie apocalypse.",
    "Give the lighter to whoever you think is the funniest.",
    "Give the lighter to whoever you think would survive a zombie apocalypse.",
    "Give the lighter to whoever you think is the best cook.",
    "Give the lighter to whoever you think has the best music taste.",
    "Give the lighter to whoever you think would be a great travel companion.",
    "Give the lighter to whoever you think watches the most movies.",
    "Give the lighter to whoever you think is the most competitive.",
    "Give the lighter to whoever you think would win a talent show.",
    "Give the lighter to whoever you think has the best sense of humor.",
    "Give the lighter to whoever you think is the most likely to become famous.",
    "Give the lighter to whoever you think is the best dancer.",
    "Give the lighter to whoever you think tells the best stories.",
    "Give the lighter to whoever you think is most likely to get canceled.",
	"Give the lighter to whoever you think peaked in high school.",
	"Give the lighter to whoever you think tries way too hard to be hot.",
	"Give the lighter to whoever you think is the biggest clout chaser.",
	"Give the lighter to whoever you think copies everyone else’s vibe.",
	"Give the lighter to whoever you think has the most boring personality.",
	"Give the lighter to whoever you think thinks they’re hotter than they actually are.",
	"Give the lighter to whoever you think has the worst fashion sense.",
	"Give the lighter to whoever you think would lose a fight… badly.",
	"Give the lighter to whoever you think is most likely to post thirst traps for attention.",
  "Give the lighter to whoever you think would black out first at a party.",
	"Give the lighter to whoever you think is the worst drunk texter.",
	"Give the lighter to whoever you think has had the most walk-of-shame mornings.",
	"Give the lighter to whoever you think gets the most free drinks.",
	"Give the lighter to whoever you think would get kicked out of a club.",
	"Give the lighter to whoever you think disappears during a night out.",
	"Give the lighter to whoever you think parties the hardest but remembers nothing.",
	"Give the lighter to whoever you think would kiss a stranger on a dare.",
	"Give the lighter to whoever you think has the wildest drunk stories.",
	"Give the lighter to whoever you think is most likely to wake up with regret.",
  "Give the lighter to whoever you think buys followers.",
	"Give the lighter to whoever you think is addicted to their own reflection.",
	"Give the lighter to whoever you think posts the cringiest captions.",
	"Give the lighter to whoever you think edits their photos the most.",
	"Give the lighter to whoever you think would fake a vacation for Instagram.",
	"Give the lighter to whoever you think deletes posts if they get low likes.",
	"Give the lighter to whoever you think flexes the hardest with no money.",
	"Give the lighter to whoever you think has the most embarrassing DMs.",
	"Give the lighter to whoever you think posts the thirstiest selfies.",
	"Give the lighter to whoever you think is the biggest oversharer.",
  "Give the lighter to whoever you think would sell out for fame.",
	"Give the lighter to whoever you think would lie on their resume.",
	"Give the lighter to whoever you think peaked way too early.",
	"Give the lighter to whoever you think has the biggest sugar baby potential.",
	"Give the lighter to whoever you think flexes money they don’t have.",
	"Give the lighter to whoever you think would get fired for hooking up with a coworker.",
	"Give the lighter to whoever you think would fake being rich.",
	"Give the lighter to whoever you think has the most job drama.",
	"Give the lighter to whoever you think will never leave their hometown.",
	"Give the lighter to whoever you think is most likely to win the lottery and blow it.",
  ];

  const extremeQuestions = [
    "Give the lighter to whoever you think is the most adventurous in bed.",
    "Give the lighter to whoever you think has the wildest fantasies.",
    "Give the lighter to whoever you think has the most secret crushes.",
    "Give the lighter to whoever you think has had the craziest night out.",
    "Give the lighter to whoever you think flirts the most.",
    "Give the lighter to whoever you think has the most unexpected kinks.",
    "Give the lighter to whoever you think would enjoy a blindfolded experience.",
    "Give the lighter to whoever you think has sent the spiciest text.",
    "Give the lighter to whoever you think could write a romance novel.",
    "Give the lighter to whoever you think has kissed the most people.",
    "Give the lighter to whoever you think has the wildest bucket list.",
    "Give the lighter to whoever you think would win at a game of truth or dare.",
    "Give the lighter to whoever you think falls in love too easily.",
    "Give the lighter to whoever you think has the worst flirting game.",
    "Give the lighter to whoever you think is the biggest red flag.",
    "Give the lighter to whoever you think has the lowest standards.",
    "Give the lighter to whoever you think talks the biggest game but can’t back it up.",
    "Give the lighter to whoever you think cries the most after a breakup.",
    "Give the lighter to whoever you think gets played the hardest.",
    "Give the lighter to whoever you think always goes back to their toxic ex.",
    "Give the lighter to whoever you think lies the most about their “body count.”",
    "Give the lighter to whoever you think would get friend-zoned the fastest.",
    "Give the lighter to whoever you think is most likely to get canceled.",
    "Give the lighter to whoever you think peaked in high school.",
    "Give the lighter to whoever you think tries way too hard to be hot.",
    "Give the lighter to whoever you think is the biggest clout chaser.",
    "Give the lighter to whoever you think copies everyone else’s vibe.",
    "Give the lighter to whoever you think has the most boring personality.",
    "Give the lighter to whoever you think thinks they’re hotter than they actually are.",
	"Give the lighter to whoever you think would lose a fight… badly.",
	"Give the lighter to whoever you think is most likely to post thirst traps for attention.",
  "Give the lighter to whoever you think has cheated and never admitted it.",
	"Give the lighter to whoever you think would steal their friend’s crush.",
	"Give the lighter to whoever you think would stay in a relationship just for money.",
	"Give the lighter to whoever you think is the biggest pick-me.",
	"Give the lighter to whoever you think settles for the bare minimum.",
	"Give the lighter to whoever you think would have a secret relationship.",
	"Give the lighter to whoever you think would date someone just for their looks.",
	"Give the lighter to whoever you think would lie about being single.",
	"Give the lighter to whoever you think flirts even when they’re taken.",
  "Give the lighter to whoever you think would forgive a cheater.",
  "Give the lighter to whoever you think would black out first at a party.",
	"Give the lighter to whoever you think is the worst drunk texter.",
	"Give the lighter to whoever you think has had the most walk-of-shame mornings.",
	"Give the lighter to whoever you think gets the most free drinks.",
	"Give the lighter to whoever you think would get kicked out of a club.",
	"Give the lighter to whoever you think disappears during a night out.",
	"Give the lighter to whoever you think parties the hardest but remembers nothing.",
	"Give the lighter to whoever you think would kiss a stranger on a dare.",
	"Give the lighter to whoever you think has the wildest drunk stories.",
	"Give the lighter to whoever you think is most likely to wake up with regret.",
  "Give the lighter to whoever you think buys followers.",
	"Give the lighter to whoever you think is addicted to their own reflection.",
	"Give the lighter to whoever you think posts the cringiest captions.",
	"Give the lighter to whoever you think edits their photos the most.",
	"Give the lighter to whoever you think would fake a vacation for Instagram.",
	"Give the lighter to whoever you think deletes posts if they get low likes.",
	"Give the lighter to whoever you think flexes the hardest with no money.",
	"Give the lighter to whoever you think has the most embarrassing DMs.",
	"Give the lighter to whoever you think posts the thirstiest selfies.",
	"Give the lighter to whoever you think is the biggest oversharer.",
  "Give the lighter to whoever you think would sell out for fame.",
	"Give the lighter to whoever you think would lie on their resume.",
	"Give the lighter to whoever you think peaked way too early.",
	"Give the lighter to whoever you think has the biggest sugar baby potential.",
	"Give the lighter to whoever you think flexes money they don’t have.",
	"Give the lighter to whoever you think would get fired for hooking up with a coworker.",
	"Give the lighter to whoever you think would fake being rich.",
	"Give the lighter to whoever you think has the most job drama.",
	"Give the lighter to whoever you think will never leave their hometown.",
	"Give the lighter to whoever you think is most likely to win the lottery and blow it.",
  "Give the lighter to whoever you think has the darkest secrets.",
	"Give the lighter to whoever you think knows the most gossip in this room.",
	"Give the lighter to whoever you think has a secret second life.",
	"Give the lighter to whoever you think has the messiest dating history.",
	"Give the lighter to whoever you think has been involved in a love triangle.",
	"Give the lighter to whoever you think has the most hidden regrets.",
	"Give the lighter to whoever you think has been caught in a lie.",
	"Give the lighter to whoever you think knows something about you they shouldn’t.",
	"Give the lighter to whoever you think has sent the most scandalous DMs.",
	"Give the lighter to whoever you think is hiding something right now.",
  "Give the lighter to whoever you think holds the biggest grudges.",
	"Give the lighter to whoever you think is the biggest hater.",
	"Give the lighter to whoever you think would throw you under the bus.",
	"Give the lighter to whoever you think would be the worst wingman.",
	"Give the lighter to whoever you think is secretly jealous of you.",
	"Give the lighter to whoever you think always makes everything about them.",
	"Give the lighter to whoever you think is the most passive-aggressive.",
	"Give the lighter to whoever you think would be the first to start drama.",
	"Give the lighter to whoever you think is fake nice.",
	"Give the lighter to whoever you think talks behind everyone’s back.",
  "Give the lighter to whoever you think would ghost their friends for a new relationship.",
	"Give the lighter to whoever you think has the most two-faced personality.",
	"Give the lighter to whoever you think is the most insecure but hides it well.",
	"Give the lighter to whoever you think would spill a friend’s secret for clout.",
	"Give the lighter to whoever you think would date their friend’s ex without hesitation.",
	"Give the lighter to whoever you think is the biggest liar about their dating life.",
	"Give the lighter to whoever you think would stir drama and then play the victim.",
	"Give the lighter to whoever you think starts fights and then says “it’s just a joke.”",
	"Give the lighter to whoever you think has the most chaotic group chat screenshots.",
	"Give the lighter to whoever you think would get caught creeping on an ex’s profile.",
	"Give the lighter to whoever you think changes their personality depending on who they’re with.",
	"Give the lighter to whoever you think would ditch a friend for VIP access.",
	"Give the lighter to whoever you think would date someone just to make their ex jealous.",
	"Give the lighter to whoever you think would get into a fight at a wedding.",
	"Give the lighter to whoever you think has been blocked the most times.",
	"Give the lighter to whoever you think gets involved in the most friend group drama.",
	"Give the lighter to whoever you think would get exposed on social media for something shady.",
	"Give the lighter to whoever you think is the most fake supportive friend.",
	"Give the lighter to whoever you think would ruin a friendship over money.",
	"Give the lighter to whoever you think has the biggest superiority complex.",
	"Give the lighter to whoever you think would read a friend’s texts without permission.",
	"Give the lighter to whoever you think pretends to be broke but actually has money.",
	"Give the lighter to whoever you think has the worst taste in people but never listens to advice.",
	"Give the lighter to whoever you think is most likely to subtweet their friend.",
	"Give the lighter to whoever you think is the biggest drama queen but denies it.",
	"Give the lighter to whoever you think complains the most but never changes.",
	"Give the lighter to whoever you think tells the most white lies in this group.",
	"Give the lighter to whoever you think makes the worst first impressions.",
	"Give the lighter to whoever you think brags the most with nothing to back it up.",
	"Give the lighter to whoever you think is most likely to fake an apology.",
	"Give the lighter to whoever you think would steal credit for someone else’s idea.",
	"Give the lighter to whoever you think would air out a friend’s drama for laughs.",
	"Give the lighter to whoever you think would have the worst best man/maid of honor speech.",
	"Give the lighter to whoever you think can’t be trusted with a secret.",
	"Give the lighter to whoever you think gets jealous the easiest.",
	"Give the lighter to whoever you think would ruin a surprise party by accident (or on purpose).",
	"Give the lighter to whoever you think would lie about why they canceled plans.",
	"Give the lighter to whoever you think thrives the most on chaos.",
	"Give the lighter to whoever you think would throw a drink during an argument.",
	"Give the lighter to whoever you think would fake a cry to win an argument.",
	"Give the lighter to whoever you think would delete messages to cover their tracks.",
	"Give the lighter to whoever you think always picks sides in every fight.",
	"Give the lighter to whoever you think loves drama but pretends to hate it.",
	"Give the lighter to whoever you think gives the fakest compliments.",
	"Give the lighter to whoever you think would start drama for entertainment.",
	"Give the lighter to whoever you think secretly enjoys seeing their friends fail.",
  "Give the lighter to whoever you think would switch friend groups if something better came along.",
	"Give the lighter to whoever you think would sleep with their friend’s ex if nobody found out.",
	"Give the lighter to whoever you think has talked the most trash about people here.",
	"Give the lighter to whoever you think would leak private group chat screenshots for drama.",
	"Give the lighter to whoever you think would side with your enemy just to be petty.",
	"Give the lighter to whoever you think would flirt with their best friend’s crush.",
	"Give the lighter to whoever you think would betray a friend for money.",
	"Give the lighter to whoever you think would throw their friend under the bus to save themselves.",
	"Give the lighter to whoever you think would talk behind your back but smile to your face.",
	"Give the lighter to whoever you think has kept a major secret from everyone here.",
  "Give the lighter to whoever you think would get into a screaming match the fastest.",
	"Give the lighter to whoever you think has beef with someone in this room but won’t admit it.",
	"Give the lighter to whoever you think is the most fake friend here.",
	"Give the lighter to whoever you think would cause the most chaos if drunk.",
	"Give the lighter to whoever you think has the most enemies but acts innocent.",
	"Give the lighter to whoever you think is secretly hoping for someone’s downfall.",
	"Give the lighter to whoever you think would start a fight just to see what happens.",
	"Give the lighter to whoever you think loves being in the middle of drama.",
	"Give the lighter to whoever you think has caused the most friendship breakups.",
	"Give the lighter to whoever you think would start drama just to stay relevant.",
	"Give the lighter to whoever you think would be the most fake on reality TV.",
	"Give the lighter to whoever you think is a clout chaser but denies it.",
	"Give the lighter to whoever you think always plays victim in every situation.",
	"Give the lighter to whoever you think is the worst at keeping promises.",
	"Give the lighter to whoever you think would air out a friend’s secrets in a fight.",
	"Give the lighter to whoever you think would start fake rumors for attention.",
	"Give the lighter to whoever you think has a completely fake online persona.",
	"Give the lighter to whoever you think has the most punchable attitude.",
	"Give the lighter to whoever you think is the biggest hypocrite.",
	"Give the lighter to whoever you think would be the first to flip on their best friend.",
	"Give the lighter to whoever you think would flirt with someone’s partner if they could get away with it.",
	"Give the lighter to whoever you think would date their friend’s sibling in secret.",
	"Give the lighter to whoever you think has a crush on someone’s partner here.",
	"Give the lighter to whoever you think is the biggest homewrecker.",
	"Give the lighter to whoever you think would cheat and act like nothing happened.",
	"Give the lighter to whoever you think would start dating their friend’s ex out of spite.",
	"Give the lighter to whoever you think would lie to cover up their friend’s cheating.",
	"Give the lighter to whoever you think has the most messy dating history.",
	"Give the lighter to whoever you think would break up a couple for fun.",
	"Give the lighter to whoever you think would fake feelings to get what they want.",
	"Give the lighter to whoever you think would let a friendship die without explanation.",
	"Give the lighter to whoever you think would laugh if their friend got canceled.",
	"Give the lighter to whoever you think has the coldest heart.",
	"Give the lighter to whoever you think would ruin someone’s reputation just for laughs.",
	"Give the lighter to whoever you think would ghost a friend and never explain why.",
	"Give the lighter to whoever you think cares about clout more than friendships.",
	"Give the lighter to whoever you think would show up to an ex’s wedding just to cause a scene.",
	"Give the lighter to whoever you think would sabotage someone’s career out of jealousy.",
	"Give the lighter to whoever you think would love to see two friends fight.",
	"Give the lighter to whoever you think is the best at gaslighting their friends.",
	"Give the lighter to whoever you think would sell out a friend’s secret for 15 minutes of fame.",
	"Give the lighter to whoever you think throws the most shade in group chats.",
	"Give the lighter to whoever you think gossips the most but hates being gossiped about.",
	"Give the lighter to whoever you think would write a mean anonymous message about a friend.",
	"Give the lighter to whoever you think secretly thinks they’re better than everyone here.",
	"Give the lighter to whoever you think would break up a friendship over a petty argument.",
	"Give the lighter to whoever you think copies their friend’s entire personality.",
	"Give the lighter to whoever you think secretly wishes they weren’t in this friend group.",
	"Give the lighter to whoever you think would replace a friend for a celebrity connection.",
	"Give the lighter to whoever you think would start a fight and then play victim.",
  "Give the lighter to whoever you think would ghost you the moment you needed them most.",
	"Give the lighter to whoever you think would hook up with your ex just to hurt you.",
	"Give the lighter to whoever you think would weaponize your insecurities against you.",
	"Give the lighter to whoever you think would lie to your face and spill your secrets behind your back.",
	"Give the lighter to whoever you think would frame you for something you didn’t do.",
	"Give the lighter to whoever you think would trade your friendship for 5 minutes of popularity.",
	"Give the lighter to whoever you think would sabotage your big moment out of spite.",
	"Give the lighter to whoever you think would ditch you for clout without hesitation.",
	"Give the lighter to whoever you think would let you take all the blame for something you did together.",
	"Give the lighter to whoever you think is only your friend because they’re bored.",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isExtremeSelected, setIsExtremeSelected] = useState(null); 
  const [isGameSelected, setIsGameSelected] = useState(false); 
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    const questions = isExtremeSelected ? extremeQuestions : okayQuestions;
    const shuffled = shuffleQuestions([...questions]);
    setShuffledQuestions(shuffled);
  }, [isExtremeSelected]);

  // Function to shuffle the questions
  const shuffleQuestions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

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
              <Text style={styles.question}>{shuffledQuestions[currentQuestionIndex]}</Text>
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