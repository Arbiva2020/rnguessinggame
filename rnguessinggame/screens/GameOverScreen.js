import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View>
      <Title>GAME OVER!</Title>
      <View>
        <Image source={require("../assets/images/success.png")} />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
  },
});
