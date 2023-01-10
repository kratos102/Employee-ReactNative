import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import EmployeeBlockComponent from "../components/EmployeeBlockComponent";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <EmployeeBlockComponent text={"item 1"} />
        <EmployeeBlockComponent text={"item 2"} />
        <EmployeeBlockComponent text={"item 3"} />
      </View>

      <View style={styles.addBtn}>
        <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  addBtn: {
    position: "absolute",
    bottom: 50,
    right: 30,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#ccc",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
