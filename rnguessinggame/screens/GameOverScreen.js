import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

//the App component is the app that is rendering, so we will derive props from App:
//The OnStartNewGame will hold a pointer to a function that will reset the game
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imagesize = 300;
  if (width < 380) {
    imagesize = 150;
  }

  if (height < 400) {
    imagesize = 80;
  }
  const imagestyle = {
    width: imagesize,
    height: imagesize,
    borderRadius: imagesize / 2,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 40,
  };

  return (
    <ScrollView stylel={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imagestyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          round to guess the number
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPressButton={onStartNewGame}>Start Over</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
  screen: {
    flex: 1,
  },
});
