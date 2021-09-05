import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";

function SocialLinksButtons({
  onPress,
  iconName,
  title,
  backgroundColor,
  borderColor,
  borderWidth,
  titleColor,
  iconColor,
  iconSize,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        backgroundColor: backgroundColor,
        width: RFPercentage(40),
        height: RFPercentage(7),
        top: RFPercentage(7),
        marginVertical: RFPercentage(1),
        borderRadius: RFPercentage(20),
        alignItems: "center",
        justifyContent: "center",
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}
    >
      <FontAwesome
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={{ marginHorizontal: RFPercentage(1) }}
      />
      <Text
        style={{
          color: titleColor,
          left: RFPercentage(1),
          fontSize: RFPercentage(2.5),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default SocialLinksButtons;
