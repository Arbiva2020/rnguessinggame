import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.titleProperty}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  titleProperty: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 4,
    borderWidth: 2,
    borderColor: "white",
  },
});
