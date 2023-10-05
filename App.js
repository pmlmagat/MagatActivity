import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  // Button,
  // TextInput,
  // ScrollView,
  FlatList,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(goalKey) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalKey)
    );
  }

  return (
    <View style={styles.appContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        hardwareAccelerated={true}
        presentationStyle="fullscreen"
        supportedOrientations={['portrait', 'landscape']}
        onDismiss={() => {
          console.log("Modal has been dismissed.");
          setModalVisible(modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Welcome Back!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <AccountCircleIcon style={styles.icon} />
      </Pressable>

      {/* <View>
        <AccountCircleIcon style={styles.icon} />
      </View> */}

      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>GoalBloom</Text>
        <Text style={styles.tagline}>Plant. Nurture. Achieve</Text>
      </View>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text style={styles.labelBox}>List of Goals</Text>
      </View>

      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              onDelete={() => deleteGoalHandler(itemData.item.key)}
            />
          )}
        />
      </View>

      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          // source={require('./assets/favicon.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  goalListContainer: {
    backgroundColor: "#e9967a",
    color: "#67074e",
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    flex: 1,
    maxHeight: 260,
  },
  labelBox: {
    backgroundColor: "#e9967a",
    padding: 14,
    fontSize: 16,
    marginTop: 15,
    color: "white",
    fontWeight: "bold",
    borderRadius: 8,
  },
  imgContainer: {
    paddingTop: 10,
  },
  image: {
    top: 0,
    width: 380,
    height: 330,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 45,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#e9967a",
  },
  tagline: {
    fontSize: 14,
    color: "#e9967a",
  },
  icon: {
    paddingLeft: 315,
    fontSize: 30,
    color: "#e9967a",
  },

  //Modal PopUp
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
