import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const NeverHaveIEverScreen = () => {
  const questions = [
    "Never have I ever gone skinny dipping.",
    "Never have I ever told a lie.",
    "Never have I ever fallen asleep in class.",
    "Never have I ever laughed so hard I cried.",
    "Never have I ever lost my phone.",
    "Never have I ever gone on a road trip.",
    "Never have I ever broken a bone.",
    "Never have I ever gotten a speeding ticket.",
    "Never have I ever forgotten someone’s birthday.",
    "Never have I ever stayed up all night.",
    "Never have I ever gone camping.",
    "Never have I ever sung karaoke in public.",
    "Never have I ever missed a flight.",
    "Never have I ever eaten an entire pizza by myself.",
    "Never have I ever locked my keys in the car.",
    "Never have I ever gone viral on social media.",
    "Never have I ever been on TV.",
    "Never have I ever pulled an all-nighter for an exam.",
    "Never have I ever made a prank call.",
    "Never have I ever danced in the rain.",
    "Never have I ever tried extreme sports.",
    "Never have I ever cried during a movie.",
    "Never have I ever gotten lost in a foreign city.",
		"Never have I ever been on a cruise.",
		"Never have I ever baked a cake from scratch.",
		"Never have I ever ridden a horse.",
		"Never have I ever been to a music festival.",
		"Never have I ever been on a roller coaster.",
		"Never have I ever been to another continent.",
		"Never have I ever made a prank video.",
		"Never have I ever done a solo travel trip.",
		"Never have I ever met someone famous.",
		"Never have I ever been to an amusement park.",
		"Never have I ever tried a food I didn’t like.",
		"Never have I ever volunteered for a cause.",
		"Never have I ever attended a concert alone.",
		"Never have I ever been scuba diving.",
		"Never have I ever sung in the shower.",
		"Never have I ever skipped school/work to go somewhere fun.",
		"Never have I ever stayed in a hostel.",
		"Never have I ever been in a fight.",
		"Never have I ever done something impulsive without thinking.",
    "Never have I ever built a snowman.",
    "Never have I ever been to a drive-in movie.",
    "Never have I ever played a musical instrument.",
    "Never have I ever lost a bet.",
    "Never have I ever tried sushi.",
    "Never have I ever gone fishing.",
    "Never have I ever gotten a haircut I regretted.",
    "Never have I ever solved a Rubik’s cube.",
    "Never have I ever tried to learn a new language.",
    "Never have I ever won a raffle.",
    "Never have I ever gotten stuck in an elevator.",
    "Never have I ever made up an excuse to cancel plans.",
    "Never have I ever been in a talent show.",
    "Never have I ever drawn on a wall.",
    "Never have I ever forgotten my password.",
    "Never have I ever slipped on ice.",
    "Never have I ever baked cookies from scratch.",
    "Never have I ever played in a treehouse.",
    "Never have I ever stayed in my pajamas all day.",
    "Never have I ever sent a message to the wrong person.",
    "Never have I ever tripped in public.",
    "Never have I ever been to a sports game.",
    "Never have I ever built a sandcastle.",
    "Never have I ever eaten breakfast for dinner.",
    "Never have I ever played a board game all night.",
    "Never have I ever taken a picture with a mascot.",
    "Never have I ever been in a parade.",
    "Never have I ever played laser tag.",
    "Never have I ever seen a shooting star.",
    "Never have I ever gotten sunburned.",
    "Never have I ever kept a journal or diary.",
    "Never have I ever watched an entire TV series in one weekend.",
    "Never have I ever tried to do a magic trick.",
    "Never have I ever waved at someone thinking they were waving at me.",
    "Never have I ever forgotten where I parked my car.",
    "Never have I ever made a scrapbook.",
    "Never have I ever caught a butterfly.",
    "Never have I ever made a snow angel.",
    "Never have I ever saved up money for something special.",
    "Never have I ever been to a farmer’s market.",
    "Never have I ever ridden a bicycle without hands.",
    "Never have I ever done a home DIY project.",
    "Never have I ever played paintball.",
    "Never have I ever visited a zoo.",
    "Never have I ever built something with LEGO.",
    "Never have I ever entered a photo contest.",
    "Never have I ever seen a double rainbow.",
    "Never have I ever walked barefoot on grass.",
    "Never have I ever collected something as a hobby.",
    "Never have I ever been to a library just to relax.",
    "Never have I ever found money on the ground.",
    "Never have I ever won a game of rock-paper-scissors.",
    "Never have I ever climbed a mountain.",
    "Never have I ever played hide and seek as an adult.",
    "Never have I ever created a playlist for a special occasion.",
    "Never have I ever used a disposable camera.",
    "Never have I ever visited a famous landmark.",
    "Never have I ever sent a postcard.",
    "Never have I ever tried to juggle.",
    "Never have I ever danced in front of a mirror.",
    "Never have I ever been on a boat.",
    "Never have I ever donated something to charity.",
    "Never have I ever finished a puzzle with over 1,000 pieces.",
    "Never have I ever taken care of a plant.",
    "Never have I ever participated in a marathon or fun run.",
    "Never have I ever drawn a self-portrait.",
    "Never have I ever stayed up to watch the sunrise.",
    "Never have I ever played a video game for more than 5 hours straight.",
    "Never have I ever had a picnic in the park.",
    "Never have I ever climbed a tree.",
  ];

  const extremeQuestions = [
    "Never have I ever had a one-night stand.",
    "Never have I ever sent a naughty text to the wrong person.",
    "Never have I ever kissed a stranger.",
    "Never have I ever lied about my age.",
    "Never have I ever ghosted someone.",
    "Never have I ever cheated on a test.",
    "Never have I ever been thrown out of a bar or club.",
    "Never have I ever drunk texted an ex.",
    "Never have I ever used a fake ID.",
    "Never have I ever shoplifted.",
    "Never have I ever skinny dipped with friends.",
    "Never have I ever played strip poker.",
    "Never have I ever slid into someone’s DMs.",
    "Never have I ever crashed a wedding.",
    "Never have I ever used someone else’s Netflix account without asking.",
    "Never have I ever lied to get out of a date.",
    "Never have I ever sent a text and immediately regretted it.",
    "Never have I ever gotten a tattoo I regret.",
    "Never have I ever shared a secret I promised to keep.",
    "Never have I ever gone on a blind date.",
    "Never have I ever hooked up with someone I met online.",
    "Never have I ever woken up somewhere without remembering how I got there.",
    "Never have I ever had a secret relationship.",
		"Never have I ever sent an embarrassing picture to someone.",
		"Never have I ever had a crush on a friend’s partner.",
		"Never have I ever kissed someone of the same gender.",
		"Never have I ever used a dating app.",
		"Never have I ever hooked up with someone I met at a bar.",
		"Never have I ever gotten into a heated argument during a date.",
		"Never have I ever done something I regretted the next morning after a one-night stand.",
		"Never have I ever kissed someone in a public place and gotten caught.",
		"Never have I ever dated someone significantly older than me.",
		"Never have I ever had a crush on a coworker.",
		"Never have I ever had a secret fling while in a relationship.",
		"Never have I ever tried an adult toy.",
		"Never have I ever been involved in a love triangle.",
	  "Never have I ever faked being interested in someone to get something.",
		"Never have I ever watched an adult movie with a partner.",
		"Never have I ever sent a racy message to someone I was attracted to.",
		"Never have I ever flirted with someone to get out of trouble.",
		"Never have I ever experimented with a fetish.",
		"Never have I ever had a one-night stand that turned into something more.",
    "Never have I ever had sex in a public place.",
		"Never have I ever sent a nude to someone I barely knew.",
		"Never have I ever had a threesome.",
		"Never have I ever been caught having sex.",
		"Never have I ever used food in the bedroom.",
		"Never have I ever had sex with someone much older than me.",
		"Never have I ever sexted with a stranger.",
		"Never have I ever hooked up with a friend’s ex.",
		"Never have I ever role-played in the bedroom.",
		"Never have I ever kissed someone in a forbidden place (work, school, etc.).",
		"Never have I ever had a crush on my best friend.",
		"Never have I ever had a one-night stand with someone I was friends with.",
		"Never have I ever watched porn with a partner.",
		"Never have I ever had sex in a car.",
		"Never have I ever done a striptease for someone.",
		"Never have I ever used a vibrator on someone else.",
		"Never have I ever had a booty call.",
		"Never have I ever fantasized about someone else while with a partner.",
		"Never have I ever used bondage during sex.",
		"Never have I ever had a secret affair.",
		"Never have I ever done something kinky in public.",
		"Never have I ever tried to seduce someone for fun.",
		"Never have I ever hooked up with someone from a dating app.",
		"Never have I ever sent someone a selfie of me in lingerie.",
		"Never have I ever had a wet dream.",
		"Never have I ever been to a swingers party.",
		"Never have I ever used a sex toy on myself.",
		"Never have I ever watched a couple have sex.",
		"Never have I ever been in an open relationship.",
		"Never have I ever had sex with someone at a party.",
		"Never have I ever kissed someone’s neck during sex.",
		"Never have I ever tried anal sex.",
		"Never have I ever slept with someone I was just talking to online.",
		"Never have I ever given or received a lap dance.",
		"Never have I ever had sex with someone I wasn’t attracted to just for fun.",
		"Never have I ever had a quickie in an unusual location.",
		"Never have I ever had a partner moan my name during sex.",
		"Never have I ever been in a hot tub with someone while flirting.",
		"Never have I ever been seduced by a coworker.",
		"Never have I ever kissed someone and immediately wanted to rip their clothes off.",
		"Never have I ever used a mirror during sex.",
		"Never have I ever been caught sending naughty texts.",
		"Never have I ever done a walk of shame.",
		"Never have I ever used a whip or flogger in the bedroom.",
		"Never have I ever hooked up with someone after a few drinks.",
		"Never have I ever had sex with someone of the same gender out of curiosity.",
		"Never have I ever given a hickey to someone.",
		"Never have I ever had a crush on a teacher or professor.",
		"Never have I ever been in a situation where I couldn’t stop laughing during sex.",
		"Never have I ever done something sexually that I never thought I would.",
  	"Never have I ever had sex on the first date",
  	"Never have I ever been attracted to a friend’s sibling",
  	"Never have I ever sent a sexy selfie to someone I regret",
  	"Never have I ever had a secret crush on a professor",
  	"Never have I ever used a public restroom for something kinky",
  	"Never have I ever had an orgasm from a stranger",
  	"Never have I ever gotten caught doing something naughty at work",
  	"Never have I ever played a game of truth or dare with sexual dares",
  	"Never have I ever been in a friends-with-benefits situation",
  	"Never have I ever been caught sexting in public",
  	"Never have I ever kissed someone at a party just to make someone jealous",
  	"Never have I ever kissed someone in a relationship",
  	"Never have I ever tried an unconventional sexual position",
  	"Never have I ever been part of a foursome",
  	"Never have I ever sent a dirty video to someone",
  	"Never have I ever had a crush on a celebrity",
  	"Never have I ever been to an adult store",
  	"Never have I ever gone skinny dipping alone",
  	"Never have I ever been part of a one-night stand with a co-worker",
  	"Never have I ever had a secret rendezvous with a stranger",
  	"Never have I ever used chocolate syrup in the bedroom",
  	"Never have I ever given or received a blowjob in a car",
  	"Never have I ever done something in bed that I thought I would never try",
  	"Never have I ever taken a sexy picture with someone else",
  	"Never have I ever kissed someone at a nightclub",
  	"Never have I ever made out in an elevator",
  	"Never have I ever flirted with a married person",
  	"Never have I ever had sex in a public place like a park",
  	"Never have I ever tried phone sex",
  	"Never have I ever been attracted to someone I couldn’t have",
  	"Never have I ever had a sexual encounter with someone of a different nationality",
  	"Never have I ever watched adult films with a partner just for fun",
  	"Never have I ever pretended to be someone else to get a date",
  	"Never have I ever kissed someone while they were asleep",
  	"Never have I ever sent a sext to someone and never got a reply",
  	"Never have I ever had a spontaneous hookup at a party",
  	"Never have I ever fantasized about being caught during sex",
  	"Never have I ever tried role-play involving a stranger",
  	"Never have I ever sent a naughty text to my boss",
  	"Never have I ever tried anal play",
  	"Never have I ever hooked up with someone from a work conference",
  	"Never have I ever flirted with a friend’s parent",
  	"Never have I ever been caught by a parent while being intimate",
  	"Never have I ever been intimate with someone on a dare",
  	"Never have I ever hooked up with someone who was in a relationship",
  	"Never have I ever had a sexual encounter in a hotel room",
  	"Never have I ever kissed someone in the rain",
  	"Never have I ever been seduced by someone older than me",
  	"Never have I ever kissed someone on a dare",
  	"Never have I ever flirted with someone for a free meal",
  	"Never have I ever done a naked photoshoot",
  	"Never have I ever had sex in a tent",
  	"Never have I ever kissed someone with a significant age difference",
  	"Never have I ever gotten a lap dance at a strip club",
  	"Never have I ever had an intense makeout session in public",
  	"Never have I ever pretended to be into someone just to get something",
  	"Never have I ever sent a sext to someone I was casually dating",
  	"Never have I ever gotten caught trying to hide a hickey",
    "Never have I ever hooked up in an elevator.",
"Never have I ever had sex on a beach.",
"Never have I ever used ice cubes during foreplay.",
"Never have I ever whispered something dirty in someone’s ear in public.",
"Never have I ever had a crush on a roommate.",
"Never have I ever made out in a movie theater.",
"Never have I ever had sex on the kitchen counter.",
"Never have I ever watched someone undress without them knowing.",
"Never have I ever played with handcuffs in the bedroom.",
"Never have I ever hooked up with someone in a hot tub.",
"Never have I ever worn lingerie just to tease someone.",
"Never have I ever kissed someone without knowing their name.",
 "Never have I ever moaned someone else's name by accident.",
 "Never have I ever hooked up on a plane.",
 "Never have I ever recorded myself doing something naughty.",
 "Never have I ever stripped for someone over video chat.",
 "Never have I ever tried a couples-only club.",
 "Never have I ever hooked up with my boss.",
 "Never have I ever teased someone under the table in public.",
 "Never have I ever sent a voice note that was too spicy.",
 "Never have I ever hooked up with someone famous.",
  "Never have I ever role-played a stranger hookup.",
  "Never have I ever had sex in front of a mirror.",
  "Never have I ever sent a spicy picture and regretted it immediately.",
  "Never have I ever made a sex tape.",
  "Never have I ever played with wax during foreplay.",
  "Never have I ever gone commando on a date.",
  "Never have I ever tried a strip club for fun.",
  "Never have I ever sent flirty texts during a meeting.",
  "Never have I ever been tied up during sex.",
  "Never have I ever had a public bathroom hookup.",
  "Never have I ever hooked up with someone from a different country.",
  "Never have I ever teased someone while they were driving.",
  "Never have I ever worn something scandalous under my clothes for a date.",
  "Never have I ever watched someone else while they were doing it.",
  "Never have I ever had a partner use a remote-control toy on me.",
  "Never have I ever been turned on during a workout.",
  "Never have I ever made out with someone while drunk and forgotten it.",
  "Never have I ever hooked up with someone off a dare.",
  "Never have I ever flirted with a stranger just for drinks.",
  "Never have I ever sent someone my search history on accident.",
  "Never have I ever teased someone with a video but didn’t send it.",
  "Never have I ever used whipped cream in bed.",
  "Never have I ever watched someone change clothes secretly.",
  "Never have I ever been turned on by someone’s voice alone.",
  "Never have I ever flirted with a neighbor.",
  "Never have I ever hooked up while someone was asleep in the same room.",
  "Never have I ever tried something from a romance novel.",
  "Never have I ever sent a suggestive emoji to the wrong person.",
  "Never have I ever let someone watch me self-pleasure.",
  "Never have I ever had a crush on a friend’s parent.",
  "Never have I ever used mirrors to watch myself during sex.",
  "Never have I ever hooked up in a public pool.",
  "Never have I ever kissed someone’s partner without them knowing.",
  "Never have I ever been hand-fed something during foreplay.",
  "Never have I ever flashed someone for fun.",
  "Never have I ever had sex in the shower with someone.",
  "Never have I ever played truth or dare with a crush and taken it too far.",
  "Never have I ever sent a risky picture that could have ruined my career.",
  "Never have I ever had an intense dream about someone in the room with me.",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isExtremeSelected, setIsExtremeSelected] = useState(null); 
  const [isGameSelected, setIsGameSelected] = useState(false); 

  const questionsToDisplay = isExtremeSelected ? extremeQuestions : questions;

  // Function to shuffle the questions
  const shuffleQuestions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

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

  // Shuffle questions when game starts
  const shuffledQuestions = shuffleQuestions([...questionsToDisplay]);

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

export default NeverHaveIEverScreen;