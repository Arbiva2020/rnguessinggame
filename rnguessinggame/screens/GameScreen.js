import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function genrateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return genrateRandomBetween(min, nax, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = genrateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        {/* - + */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
});
