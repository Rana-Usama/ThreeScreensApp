import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";

// google img
import googleLogo from "../../assets/images/googleLogo.png"

function SocialLinksButtons({ onPress = () => { }, iconName, title, backgroundColor = Colors.white, borderColor = null, borderWidth = 0, titleColor, iconColor, iconSize = RFPercentage(2.2) }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        backgroundColor: backgroundColor,
        width: RFPercentage(37),
        height: RFPercentage(6.5),
        marginVertical: RFPercentage(1),
        borderRadius: RFPercentage(20),
        alignItems: "center",
        justifyContent: "center",
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}
    >
      {
        iconName === "google" ?
          <Image
            source={googleLogo}
            style={{ marginRight: RFPercentage(3), width: iconSize, height: iconSize }}
          /> : <FontAwesome
            name={iconName}
            size={iconSize}
            color={iconColor}
            style={{ marginRight: RFPercentage(3) }}
          />
      }

      <Text
        style={{
          color: titleColor,
          fontSize: RFPercentage(2.5),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default SocialLinksButtons;
