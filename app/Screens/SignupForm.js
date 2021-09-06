import React, { useState } from "react";
import { Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";

//components
import InputField from "../components/InputField";
import MyAppButton from "./../components/MyAppButton";

function SignupForm(props) {
  const [inputField, SetInputField] = useState([
    {
      placeholder: "Username ",
      value: "",
    },
    {
      placeholder: "First Name",

      value: "",
    },
    {
      placeholder: "Last Name",

      value: "",
    },
    {
      placeholder: "Email address",
      email: "email-address",
      value: "",
    },
    {
      placeholder: "Password",
      secure: true,
      value: "",
    },
    {
      placeholder: "Repeat Password",
      secure: true,
      value: "",
    },
  ]);

  const handleChange = (text, i) => {
    if (i === 0 && text.length >= 10) {
      alert("Username should be less then 10 digits");
      return;
    }
    if (i === 4 && text.length >= 7) {
      alert("Password should be less then 7 digits");
      return;
    }
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: RFPercentage(8),
          left: RFPercentage(4),
        }}
      >
        <Ionicons
          name="arrow-back"
          size={40}
          color={Colors.backIcon}
          style={{ fontSize: RFPercentage(3), fontWeight: "bold" }}
        />
        <Text
          style={{
            fontSize: RFPercentage(3),
            left: RFPercentage(3),
            fontWeight: "bold",
          }}
        >
          Sign up
        </Text>
      </View>

      <View style={{ bottom: RFPercentage(6) }}>
        {inputField.map((item, i) => (
          <InputField
            key={i}
            secureTextEntry={item.secure}
            keyboardType={item.email}
            placeholder={item.placeholder}
            handleFeild={(text) => handleChange(text, i)}
            value={item.value}
            width={RFPercentage(46)}
          />
        ))}
        <View style={{ top: RFPercentage(4) }}>
          <MyAppButton
            title="Done"
            onPress={() => console.log("hi")}
            backgroundColor={Colors.doneButton}
            width={RFPercentage(46)}
            color={Colors.white}
          />
        </View>
      </View>
      <View
        style={{
          bottom: RFPercentage(1),
          position: "absolute",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: RFPercentage(1.6) }}>
          By signing up you accept our
        </Text>
        <Text
          style={{
            color: Colors.signUpText,
            left: RFPercentage(1),
            fontSize: RFPercentage(1.6),
          }}
        >
          terms of serviceand privacy policy
        </Text>
      </View>
    </View>
  );
}

export default SignupForm;
