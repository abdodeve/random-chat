import React from "react";
import { View } from "react-native";

import { makeStyles, Text, Button, useThemeMode } from "@rneui/themed";

export default  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Charging"
          onPress={() => navigation.navigate('ChargingScreen')}
        />
      </View>
    );
  }