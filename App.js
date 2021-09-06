import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./app/Screens/LoginScreen";
import SignupScreen from "./app/Screens/SignupScreen";
import SignupForm from "./app/Screens/SignupForm";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SignupForm" component={SignupForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
