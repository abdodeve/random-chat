
// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/screens/HomeScreen';
import ChargingScreen from "./src/components/screens/ChargingScreen";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="H">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ChargingScreen" component={ChargingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
