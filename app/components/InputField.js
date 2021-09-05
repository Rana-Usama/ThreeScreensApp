import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Colors from "../config/Colors";
import { RFPercentage } from "react-native-responsive-fontsize";

function InputField({ placeholder, width }) {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.inputFields,
        width: width,
        height: RFPercentage(7),
        borderRadius: RFPercentage(10),
        marginVertical: RFPercentage(1),
      }}
    >
      <TextInput
        placeholder={placeholder}
        style={{
          color: "black",
          left: RFPercentage(5),
          fontSize: RFPercentage(2.5),
          width: "100%",
        }}
      ></TextInput>
    </View>
  );
}

export default InputField;
