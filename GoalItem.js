import { Text, View } from "react-native";
import DeleteButton from "./DeleteButton";

// function GoalItem(props) {
//   return (
//     <View style={styles.goalItems}>
//       <Text>{props.text}</Text>
//     </View>
//   );
// }
const GoalItem = ({ text, onDelete }) => {
  return (
    <View style={styles.goalItems}>
      <Text>{text}</Text>
      <DeleteButton onPress={onDelete} />
     </View>
  )
}

const styles = {
  goalItems: {
    flexDirection: 'row',
    backgroundColor: "#fff0f5", //in text
    justifyContent: 'space-between',
    color: "#67074e",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
};

export default GoalItem;