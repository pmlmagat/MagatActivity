import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Pressable, Text } from "react-native";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Course Goals!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Pressable onPress={addGoalHandler} color="#e9967a"
          style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : '#e9967a'
          },
          styles.otherStyles,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Added!' : 'Add Goal'}</Text>
        )}
      </Pressable>
      {/*<Button title="Add Goal" color="#e9967a" onPress={addGoalHandler} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingBottom: 4,
    // borderBottomWidth: 2,
    borderColor: "#738678",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#542a18",
    width: "70%",
    marginRight: 8,
    padding: 13,
    color: "#67074e",
    borderRadius: 15,
  },
  otherStyles: {
    borderRadius: 8,
    padding: 6,
  },
  text : {
    color: 'white',
    // fontWeight: "bold",
  },
});

export default GoalInput;