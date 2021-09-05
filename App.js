import React from "react";
import { View } from "react-native";
import LoginScreen from "./app/Screens/LoginScreen";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}
