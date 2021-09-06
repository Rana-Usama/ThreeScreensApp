import React, { useState } from "react";
import { Platform, Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import InputField from "../components/common/InputField";
import MyAppButton from "../components/common/MyAppButton";
import SocialLinksButtons from "../components/SocialLinksButtons";
import LoadingModal from "../components/common/LoadingModal";

//config
import Colors from "../config/Colors";

// images
import logoBack from "../../assets/images/logoBack.jpg"

const { width } = Dimensions.get('window')

function LoginScreen(props) {
  const [indicator, showIndicator] = useState(false)
  const [feildMarginBottom, setFeildMarginBottom] = useState(0)
  const socialLinks = [
    {
      title: "Log in with Facebook",
      icon: "facebook-f",
      value: "",
      iconColor: "white",
      backgroundColor: Colors.fbColor,
      titleColor: Colors.white,
      iconColor: Colors.white,
    },
    {
      title: "Log in with Google",
      value: "",
      icon: "google",
      titleColor: Colors.black,
      borderColor: Colors.lightgrey2,
      borderWidth: RFPercentage(0.1),
      iconColor: Colors.black,
    },
  ];

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
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  const handleLogin = () => {
    showIndicator(true)
    let tempfeilds = [...inputField];

    if (tempfeilds[0].value === '' || tempfeilds[1].value === '') {
      alert('Please fill all the feilds')
      showIndicator(false)
      return true;
    }

    //password must contain 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!tempfeilds[1].value.match(passw)) {
      alert('Week password try another one!')
      showIndicator(false)
      return true;
    }

    try {
      // API integration
    } catch (error) {
      alert("Login Error")
    }

    showIndicator(false)
  }

  return (
    <>
      <LoadingModal show={indicator} />
      <ImageBackground source={logoBack} width={width} height={RFPercentage(50)} style={styles.logoContainer}>
        <Text style={styles.logo}>Logo</Text>
      </ImageBackground>

      <ScrollView style={{ backgroundColor: Colors.white, flex: 1, }} >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >

          <View style={[styles.whiteArea]}>
            {/* Not a member */}
            <View style={{ flexDirection: "row", }}>
              <Text style={{ fontSize: RFPercentage(2.5) }}>
                Not a member?
              </Text>

              <TouchableOpacity onPress={() => props.navigation.navigate("SignupScreen")} >
                <Text style={{ fontSize: RFPercentage(2.5), marginLeft: RFPercentage(1), color: Colors.signUpText, fontWeight: "bold", }}>
                  Sign up now
                </Text>
              </TouchableOpacity>
            </View>

            {/* social buttons */}
            {socialLinks.map((item, i) => (
              <View key={i} style={{ marginTop: i === 0 ? RFPercentage(4) : RFPercentage(0.3) }} >
                <SocialLinksButtons
                  iconName={item.icon}
                  iconColor={item.iconColor}
                  title={item.title}
                  titleColor={item.titleColor}
                  onPress={() => console.log("FB link pressed")}
                  borderColor={item.borderColor}
                  borderWidth={item.borderWidth}
                  backgroundColor={item.backgroundColor}
                />
              </View>
            ))}

            {/* border */}
            <View style={{ flexDirection: "row", marginTop: RFPercentage(2), justifyContent: "center", alignItems: 'center' }}>
              <View style={{ backgroundColor: Colors.lightgrey2, height: RFPercentage(0.1), width: RFPercentage(10) }}></View>
              <Text style={{ color: Colors.lightgrey }}>
                {" "}OR{" "}
              </Text>
              <View style={{ backgroundColor: Colors.lightgrey2, height: RFPercentage(0.1), width: RFPercentage(10), }} ></View>
            </View>

            {/* email and password feilds */}
            <View style={{ marginTop: RFPercentage(2), alignItems: "center" }}>
              {inputField.map((item, i) => (
                <InputField
                  key={i}
                  secure={item.secure}
                  placeholder={item.placeholder}
                  // onTouchStart={() => setFeildMarginBottom(-RFPercentage(30))}
                  // onTouchEnd={() => setFeildMarginBottom(0)}
                  handleFeild={(text) => handleChange(text, i)}
                  value={item.value}
                  width={"85%"}
                />
              ))}
            </View>

            {/* login and forgot */}
            <View style={{ flexDirection: "column", marginTop: RFPercentage(2.1), marginBottom: RFPercentage(2), width: "100%", justifyContent: "center", alignItems: "center", flex: 1 }}>
              <MyAppButton
                title="Log in"
                onPress={() => handleLogin()}
                backgroundColor={Colors.loginButton}
                width={RFPercentage(26)}
                color={Colors.white}
              />
              <TouchableOpacity onPress={() => console.log("forgot password")} style={{ alignSelf: "flex-end", marginRight: RFPercentage(3), marginTop: RFPercentage(1.5) }}>
                <Text style={{ color: Colors.lightgrey, fontSize: RFPercentage(2.3), }} >
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    height: RFPercentage(40),
    width: width,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontSize: RFPercentage(5.5),
    color: Colors.white,
    marginTop: RFPercentage(2)
  },
  whiteArea: {
    backgroundColor: Colors.white,
    flex: 1,
    width: width,
    borderTopRightRadius: RFPercentage(30),
    borderTopLeftRadius: RFPercentage(30),
    alignItems: "center",
    justifyContent: 'center'
  },
});

export default LoginScreen;
