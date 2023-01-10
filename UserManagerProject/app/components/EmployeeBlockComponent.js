import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

function EmployeeBlockComponent(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>

        <Image
          source={require("../assets/abstract-user-flat-4.png")}
          style={styles.avatar}
        />
        
        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "blue" }}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "red" }}>Delete</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#CCC",
    borderRadius: 10,
    marginBottom: 16,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  itemText: {
    maxWidth: "80%",
  },

  avatar: {
    width: 40,
    height: 40,
    marginRight: 15,
  },

  btn: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 50,
    borderRadius: 10,
    borderColor: "#CCC",
    borderWidth: 1,
    marginBottom: 6,
  },
});

export default EmployeeBlockComponent;
