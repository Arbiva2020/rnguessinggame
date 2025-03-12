import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

//The "styling" prop is ment to enable us to add additional styling to instructionText outside of this
//specific component, and in the components we import it to. the "styling" will be added to the
// "style", that noe will hold an array with both style arguments.
//THERE IS IMPORTANCE TO THE ORDER IN THE ARRAY!!!!
function InstructionText({ children, styling }) {
  return <Text style={[styles.instructionText, styling]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
