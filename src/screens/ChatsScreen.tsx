import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Button, Card, Icon, Input } from "@rneui/themed";
import { NavigationProp } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    marginBottom: 6,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default function ChatsScreen({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) {
  const [messages, setMessages] = React.useState<string[]>(["Very well"]);
  const [inputMessage, setInputMessage] = React.useState<string>("");

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Text style={{ fontWeight: "500" }}>Stranger: </Text>
          <Text style={{ fontWeight: "800" }}>Katy</Text>
        </View>
        <View
          style={{
            marginLeft: "auto",
            marginRight: 10,
          }}
        >
          <Button title="Skip" />
        </View>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Card>
            <View style={styles.user}>
              <Text style={styles.name}>Brynn :</Text>
              <Card containerStyle={{ borderRadius: 60 }}>
                <Text>Hello how are you ?</Text>
              </Card>
            </View>
            <View style={styles.user}>
              <Text style={styles.name}>Katy: </Text>
              <Card containerStyle={{ borderRadius: 60 }}>
                <Text>I'm fine thanks what about you ?</Text>
              </Card>
            </View>
            {messages.map((message, index) => {
              return (
                <View key={index} style={styles.user}>
                  <Text style={styles.name}>Brynn: </Text>
                  <Card containerStyle={{ borderRadius: 60 }}>
                    <Text>{message}</Text>
                  </Card>
                </View>
              );
            })}
          </Card>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Input
            value={inputMessage}
            onChangeText={setInputMessage}
            multiline={true}
            placeholder="Message"
          />
        </View>
        <View>
          <Button
            title="Send"
            onPress={() => {
              setMessages((arr) => [...arr, inputMessage]);
              setInputMessage("");
            }}
          />
        </View>
      </View>
    </View>
  );
}
