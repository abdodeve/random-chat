import React from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createTheme, ThemeProvider, Button } from "@rneui/themed";
import Component from "./src/components/MyComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import ChatsScreen from "./src/screens/ChatsScreen";
import SearchingScreen from "./src/screens/SearchingScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { makeStyles } from "@rneui/themed";
import { Platform, StatusBar } from "react-native";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="ChatsScreen" component={ChatsScreen} />
              <Stack.Screen
                name="SearchingScreen"
                component={SearchingScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </SafeAreaView>
  );
}
