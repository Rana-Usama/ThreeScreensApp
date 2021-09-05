import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import InputField from "../components/InputField";
import MyAppButton from "../components/MyAppButton";
import SocialLinksButtons from "../components/SocialLinksButtons";
//config
import Colors from "../config/Colors";

function SignupScreen(props) {
  const [socialLinks, setSocailLinks] = useState([
    {
      title: "Sign up with Facebook",
      icon: "facebook-f",
      value: "",
    },
    {
      title: "Sign up with Google",
      icon: "google",
      backgroundWhite: true,
      titleBlack: true,
      borderColor: true,
      borderWidth: true,
      iconBlack: true,
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
              Already a member?
            </Text>
            <Text
              onPress={() => console.log("Pressed")}
              style={{
                top: RFPercentage(4),
                fontSize: RFPercentage(2.5),
                left: RFPercentage(1),
                color: Colors.signUpText,
                fontWeight: "bold",
              }}
            >
              Log in
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
          <View style={{ top: RFPercentage(5) }}>
            <SocialLinksButtons
              iconName="th"
              iconColor="black"
              iconSize={15}
              title="Email address"
              titleColor="black"
              onPress={() => console.log("Log in with Facebook")}
              backgroundColor={Colors.white}
              borderColor={Colors.lightgrey}
              borderWidth={RFPercentage(0.2)}
            />
          </View>
          <View
            style={{
              bottom: RFPercentage(1),
              position: "absolute",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ left: RFPercentage(2), fontSize: RFPercentage(1.6) }}
            >
              By signing up you accept our
            </Text>
            <Text
              style={{
                color: Colors.signUpText,
                left: RFPercentage(2.5),
                fontSize: RFPercentage(1.6),
              }}
            >
              terms of serviceand privacy policy
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: Colors.signupBanner,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    top: RFPercentage(15),
    fontSize: RFPercentage(4.5),
    color: Colors.white,
  },
  subContainer: {
    backgroundColor: Colors.signupBanner,
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

export default SignupScreen;
