import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPressButton }) {
  function handlePress() {
    console.log("Pressed!");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressButton}
        android_ripple={{ color: Colors.primary600 }}
        //arrays of fstyle objects:
        //styles can also hold an arrow function to elaborate on conditional styling, for example. Notice that the "pressed" is a constant react native property!
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedforIos]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressedforIos: {
    opacity: 0.75,
  },
});
