import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createTheme, ThemeProvider, Button } from "@rneui/themed";
import Component from "./src/components/MyComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import ChatsScreen from "./src/screens/ChatsScreen";
import SearchingScreen from "./src/screens/SearchingScreen";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

function HomeScreen({ navigation }: { navigation: NavigationProp<any, any> }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to ChatsScreen"
        onPress={() => navigation.navigate("ChatsScreen")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
            <Stack.Screen name="SearchingScreen" component={SearchingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
