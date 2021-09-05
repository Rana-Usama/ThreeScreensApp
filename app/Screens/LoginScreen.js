import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import InputField from "../components/InputField";
import MyAppButton from "../components/MyAppButton";
import SocialLinksButtons from "../components/SocialLinksButtons";
//config
import Colors from "../config/Colors";

function LoginScreen(props) {
  const [socialLinks, setSocailLinks] = useState([
    {
      title: "Log in with Facebook",
      icon: "facebook-f",
      value: "",
    },
    {
      title: "Log in with Google",
      icon: "google",
      backgroundWhite: true,
      titleBlack: true,
      borderColor: true,
      borderWidth: true,
      iconBlack: true,
      value: "",
    },
  ]);

  const [inputField, SetInputField] = useState([
    {
      placeholder: "Username / e-mail",
      value: "",
    },
    {
      placeholder: "Password",
      secure: true,
      value: "",
    },
  ]);

  const handleChange = (text, i) => {
    if (i === 1 && text.length >= 7) {
      alert("Password should be less then 7 digits");
      return;
    }
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  return (
    <>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Logo</Text>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.whiteArea}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ top: RFPercentage(4), fontSize: RFPercentage(2.5) }}>
              Not a member?
            </Text>
            <Text
              onPress={() => props.navigation.navigate("SignupScreen")}
              style={{
                top: RFPercentage(4),
                fontSize: RFPercentage(2.5),
                left: RFPercentage(1),
                color: Colors.signUpText,
                fontWeight: "bold",
              }}
            >
              Sign up now
            </Text>
          </View>

          {socialLinks.map((item, i) => (
            <SocialLinksButtons
              key={i}
              iconName={item.icon}
              iconColor={item.iconBlack ? "black" : Colors.white}
              iconSize={15}
              title={item.title}
              titleColor={item.titleBlack ? "black" : Colors.white}
              //  onPress={() => console.log("FB link pressed")}
              borderColor={item.borderColor ? Colors.lightgrey : "none"}
              borderWidth={item.borderWidth ? RFPercentage(0.2) : "none"}
              backgroundColor={
                item.backgroundWhite ? Colors.white : Colors.fbColor
              }
            />
          ))}

          <View
            style={{
              flexDirection: "row",
              top: RFPercentage(10),
            }}
          >
            <View
              style={{
                backgroundColor: Colors.lightgrey,
                height: RFPercentage(0.3),
                width: RFPercentage(10),
              }}
            ></View>
            <Text style={{ bottom: RFPercentage(1), color: Colors.lightgrey }}>
              {" "}
              OR{" "}
            </Text>
            <View
              style={{
                backgroundColor: Colors.lightgrey,
                height: RFPercentage(0.3),
                width: RFPercentage(10),
              }}
            ></View>
          </View>

          <View style={{ top: RFPercentage(10) }}>
            {inputField.map((item, i) => (
              <InputField
                key={i}
                secureTextEntry={item.secure}
                placeholder={item.placeholder}
                handleFeild={(text) => handleChange(text, i)}
                value={item.value}
                width={RFPercentage(40)}
              />
            ))}
          </View>

          <View style={{ top: RFPercentage(11.5) }}>
            <MyAppButton
              title="Log in"
              onPress={() => props.navigation.navigate("SignupForm")}
              backgroundColor={Colors.loginButton}
              width={RFPercentage(26)}
              color={Colors.white}
            />
            <Text
              onPress={() => console.log("Forgot Password Pressed")}
              style={{
                fontSize: RFPercentage(2.5),
                left: RFPercentage(18),
                top: RFPercentage(1.5),
              }}
            >
              Forgot Password
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    top: RFPercentage(15),
    fontSize: RFPercentage(4.5),
    color: Colors.white,
  },
  subContainer: {
    backgroundColor: Colors.primary,
    height: RFPercentage(65),
  },
  whiteArea: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopRightRadius: RFPercentage(15),
    borderTopLeftRadius: RFPercentage(15),
    alignItems: "center",
  },
});

export default LoginScreen;
