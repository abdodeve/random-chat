import React from "react";
import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { NavigationProp } from "@react-navigation/native";

export default function ChatsScreen({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ChatsScreen</Text>
      <Button
        title="Go to SearchingScreen"
        onPress={() => navigation.navigate("SearchingScreen")}
      />
    </View>
  );
}
