import { Text, StyleSheet } from "react-native";

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
    borderWidth: 2,
    borderColor: "white",
  },
});
