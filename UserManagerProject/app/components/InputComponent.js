import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";

const InputComponent = (props) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
  },

  input: {
    flexDirection: "row",
    padding: 14,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 16,
  },
});

export default InputComponent;
