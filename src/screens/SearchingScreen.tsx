import React, { useEffect } from "react";
import { ActivityIndicator, Text, View, Alert } from "react-native";

import { NavigationProp } from "@react-navigation/native";

export default function SearchingScreen({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("ChatsScreen");
    }, 500);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator
        color={"#FF007F"}
        style={{ transform: [{ scaleX: 5 }, { scaleY: 5 }] }}
        size={"large"}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          top: 200,
          textAlign: "center",
        }}
      >
        Searching for a stranger...
      </Text>

      {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
    </View>
  );
}
