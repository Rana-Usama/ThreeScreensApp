import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import LoginScreen from "./app/Screens/LoginScreen";
import Screen from "./app/components/Screen";
import SignupScreen from "./app/Screens/SignupScreen";
import SignupForm from "./app/Screens/SignupForm";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <Screen>
    //   <SignupScreen></SignupScreen>
    // </Screen>
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SignupForm" component={SignupForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
