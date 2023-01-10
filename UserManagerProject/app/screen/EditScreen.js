import React from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import InputComponent from "../components/InputComponent";

function EditScreen(props) {
  return (
    <View style={styles.form}>
      <InputComponent label={"UserID"} />
      <InputComponent label={"UserName"} />
      <InputComponent label={"Password"} />
      <InputComponent label={"Confirm Password"} />
      <InputComponent label={"Email"} />
      <InputComponent label={"Tel"} />
      <View style={styles.btnWrap}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "green" }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "red" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    flex: 1,
  },

  btnWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },

  btn: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 100,
  },
});

export default EditScreen;
