import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPressButton }) {
  function handlePress() {
    console.log("Pressed!");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressButton}
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
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
