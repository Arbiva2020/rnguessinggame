import { Text, StyleSheet, Platform } from "react-native";

//Platform enables us to use different styling depending on the platform we are using

function Title({ children }) {
  return <Text style={styles.titleProperty}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  titleProperty: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 4,
    borderWidth: Platform.OS === "android" ? 2 : 0,
    borderColor: "white",
    width: 300,
    maxWidth: "80%",
  },
});
