import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";

export default function App() {
  const [number, setNumber] = useState(0);

  const onHandleIncrease = () => {
    setNumber(number + 1);
  };

  const onHandleDecrease = () => {
    if (number > 0) setNumber(number - 1);
    else alert("Can't decrease!");
  };

  const onPressFunction = () => {
    alert("suhyon");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Welcome!</Text>
      <View style={styles.displayFlex}>
        <Button
          title="Increase"
          onPress={onHandleIncrease}
          color="blue"
        ></Button>
        <TextInput value={number} />
        <Button
          title="Decrease"
          onPress={onHandleDecrease}
          color="green"
        ></Button>
        <Pressable onPress={onPressFunction}>
          <Text>I'm pressable!</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  displayFlex: {
    flex: 1,
    justifyContent: "space-between",
  },
});
