import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    padding: 14,
    marginTop: 35,
    backgroundColor: Colors.primary700,
    marginHorizontal: 18,
    borderRadius: 10,
    //shadow on android:
    elevation: 4,
    //shadow on ios:
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
