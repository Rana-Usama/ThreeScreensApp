import React, { useState } from "react";
import {
  Dimensions,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";

//components
import InputField from "../components/common/InputField";
import MyAppButton from "../components/common/MyAppButton";
import LoadingModal from "../components/common/LoadingModal";

const { width, height } = Dimensions.get("window");

function SignupForm(props) {
  const [indicator, showIndicator] = useState(false);
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
      value: "",
      type: "email-address",
    },
    {
      placeholder: "Password",
      value: "",
      secure: true,
    },
    {
      placeholder: "Repeat Password",
      value: "",
      secure: true,
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

  const handleSigUp = () => {
    showIndicator(true);

    let tempfeilds = [...inputField];

    if (
      tempfeilds[0].value === "" ||
      tempfeilds[1].value === "" ||
      tempfeilds[2].value === "" ||
      tempfeilds[3].value === "" ||
      tempfeilds[4].value === "" ||
      tempfeilds[5].value === ""
    ) {
      alert("Please fill all the feilds");
      showIndicator(false);
      return true;
    }

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tempfeilds[3].value)
    ) {
      alert("Email is not correct");
      showIndicator(false);
      return;
    }

    //password must contain 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!tempfeilds[4].value.match(passw)) {
      alert("Week password try another one!");
      showIndicator(false);
      return true;
    }

    if (tempfeilds[4].value !== tempfeilds[5].value) {
      alert("Password and Confirm Password must be same");
      showIndicator(false);
      return true;
    }

    try {
      // API integration
    } catch (error) {
      alert("Registration Error");
    }

    showIndicator(false);
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ backgroundColor: Colors.white, flex: 1 }}>
          <View style={styles.mainContainer}>
            <LoadingModal show={indicator} />

            <View style={styles.navigationContainer}>
              <Ionicons
                name="arrow-back"
                size={40}
                color={Colors.backIcon}
                style={{ fontSize: RFPercentage(3), fontWeight: "bold" }}
                onPress={() => props.navigation.navigate("SignupScreen")}
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

            <View style={{ bottom: RFPercentage(6), alignItems: "center" }}>
              {inputField.map((item, i) => (
                <InputField
                  key={i}
                  secure={item.secure}
                  keyboardType={item.type}
                  placeholder={item.placeholder}
                  handleFeild={(text) => handleChange(text, i)}
                  value={item.value}
                  width={"85%"}
                />
              ))}
              <View style={{ top: RFPercentage(4), width: "100%" }}>
                <MyAppButton
                  title="Done"
                  onPress={() => handleSigUp()}
                  backgroundColor={Colors.primary}
                  width={RFPercentage(40)}
                  color={Colors.white}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        {/* terms and conditions*/}
        <View style={styles.tremsContainer}>
          <Text style={{ fontSize: RFPercentage(1.4) }}>
            By signing up you accept our
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.wikipedia.org/")}
          >
            <Text
              style={{
                marginLeft: RFPercentage(0.5),
                fontWeight: "bold",
                color: Colors.signUpText,
                fontSize: RFPercentage(1.6),
              }}
            >
              terms of service and privacy policy
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: RFPercentage(8),
    left: RFPercentage(4),
  },
  tremsContainer: {
    bottom: RFPercentage(2),
    position: "absolute",
    flexDirection: "row",
    width: "90%",
    marginLeft: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignupForm;
