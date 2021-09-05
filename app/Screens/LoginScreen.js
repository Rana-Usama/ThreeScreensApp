import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import InputField from "../components/InputField";
import SocialLinksButtons from "../components/SocialLinksButtons";
import Colors from "../config/Colors";

function LoginScreen(props) {
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
              onPress={() => console.log("Pressed")}
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

          <SocialLinksButtons
            iconName="facebook-f"
            iconColor={Colors.white}
            iconSize={15}
            title="Log in with Facebook"
            titleColor={Colors.white}
            onPress={() => console.log("FB link pressed")}
            backgroundColor={Colors.fbColor}
          />
          <SocialLinksButtons
            iconName="google"
            iconColor="black"
            iconSize={17}
            title="Log in with Google"
            titleColor="black"
            onPress={() => console.log("Google link pressed")}
            backgroundColor={Colors.white}
            borderColor={Colors.lightgrey}
            borderWidth={RFPercentage(0.2)}
          />

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

          <View style={{ top: RFPercentage(11) }}>
            <InputField
              placeholder="Username / e-mail"
              width={RFPercentage(40)}
            ></InputField>
            <InputField
              placeholder="Password"
              width={RFPercentage(40)}
            ></InputField>
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
    borderTopRightRadius: RFPercentage(12),
    borderTopLeftRadius: RFPercentage(12),
    alignItems: "center",
  },
});

export default LoginScreen;
