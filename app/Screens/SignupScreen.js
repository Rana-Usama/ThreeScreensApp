import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView, TouchableOpacity, Linking } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import SocialLinksButtons from "../components/SocialLinksButtons";

//config
import Colors from "../config/Colors";

import logoBack from "../../assets/images/logoBack.jpg"

const { width } = Dimensions.get('window')

function SignupScreen(props) {

  const socialLinks = [
    {
      title: "Log in with Facebook",
      icon: "facebook-f",
      iconColor: "white",
      backgroundColor: Colors.fbColor,
      titleColor: Colors.white,
      iconColor: Colors.white,
    },
    {
      title: "Log in with Google",
      icon: "google",
      titleColor: Colors.black,
      borderColor: Colors.lightgrey2,
      borderWidth: RFPercentage(0.1),
      iconColor: Colors.black,
    },
  ];

  return (
    <>
      <ImageBackground source={logoBack} width={width} height={RFPercentage(50)} style={styles.logoContainer}>
        <Text style={styles.logo}>Logo</Text>
      </ImageBackground>

      <ScrollView style={{ backgroundColor: Colors.white, flex: 1 }} >
        <View style={styles.whiteArea}>

          {/* already member */}
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: RFPercentage(2.5) }}>
              Already a member?
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")} >
              <Text style={{ fontSize: RFPercentage(2.5), marginLeft: RFPercentage(1), color: Colors.signUpText, fontWeight: "bold", }}>
                Log in
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

          {/* Email Address */}
          <View style={{ marginTop: RFPercentage(2) }}>
            <SocialLinksButtons
              iconName="th"
              iconColor={Colors.black}
              iconSize={15}
              title="Email address"
              titleColor={Colors.black}
              onPress={() => props.navigation.navigate('SignupForm')}
              backgroundColor={Colors.white}
              borderColor={Colors.lightgrey3}
              borderWidth={RFPercentage(0.1)}
            />
          </View>
        </View>
      </ScrollView>

      {/* terms and conditions*/}
      <View style={styles.tremsContainer} >
        <Text style={{ fontSize: RFPercentage(1.4) }} >
          By signing up you accept our
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.wikipedia.org/")} >
          <Text style={{ marginLeft: RFPercentage(0.5), fontWeight: "bold", color: Colors.signUpText, fontSize: RFPercentage(1.6) }} >
            terms of service and privacy policy
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    height: RFPercentage(40),
    width: width,
    alignItems: "center",
    justifyContent: 'center'
  },
  logo: {
    fontSize: RFPercentage(5.5),
    color: Colors.white,
    marginTop: RFPercentage(2)
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
  tremsContainer: {
    bottom: RFPercentage(2),
    position: "absolute",
    flexDirection: "row",
    width: '90%',
    marginLeft: "5%",
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SignupScreen;
