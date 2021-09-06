import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons"

//config
import Colors from "../../config/Colors";

function InputField({ placeholder, handleFeild, width, value, secure = false, ...otherProps }) {
  const [eyeIcon, setEyeIcon] = useState(false)

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.lightgrey3,
        width: width,
        height: RFPercentage(7),
        borderRadius: RFPercentage(10),
        marginVertical: RFPercentage(1),
      }}
    >
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => handleFeild(text)}
        value={value}
        secureTextEntry={secure && !eyeIcon}
        style={{ color: "black", left: RFPercentage(5), fontSize: RFPercentage(2.5), width: secure ? "90%" : "100%" }}
        {...otherProps}
      ></TextInput>

      {secure ?
        <TouchableOpacity onPress={() => setEyeIcon(!eyeIcon)} style={{ width: "10%", justifyContent: "center", alignItems: "flex-start" }} >
          <MaterialCommunityIcons color={eyeIcon ? Colors.primary : Colors.lightgrey} style={{ right: RFPercentage(1) }} size={RFPercentage(3)} name={eyeIcon ? "eye-outline" : "eye-off-outline"} />
        </TouchableOpacity>
        : null}
    </View>
  );
}

export default InputField;
