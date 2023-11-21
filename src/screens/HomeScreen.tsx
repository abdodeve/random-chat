import React from "react";
import { View } from "react-native";
import { Button, Text, makeStyles } from "@rneui/themed";
import { NavigationProp } from "@react-navigation/native";
import { Image, Input, Icon, CheckBox } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.colors.white,
    width: "100%",
  },
  appName: { color: theme.colors.primary },
  btnConnect: {
    backgroundColor: theme.colors.success,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
  },
}));

function RadioGender() {
  const [selectedIndex, setIndex] = React.useState(0);

  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <CheckBox
        title="Man"
        checked={selectedIndex === 0}
        onPress={() => setIndex(0)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <CheckBox
        title="Woman"
        checked={selectedIndex === 1}
        onPress={() => setIndex(1)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={{ backgroundColor: "transparent" }}
      />
    </View>
  );
}

type HomeScreenProps = { navigation: NavigationProp<any, any> };
export default function HomeScreen({ navigation }: HomeScreenProps) {
  const styles = useStyles();

  return (
    // <View style={{ flex: 1 }}>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ justifyContent: "center", marginTop: 200 }}>
        <Text h3 style={styles.appName}>
          Random chat APP
        </Text>
      </View>
      <View style={{ justifyContent: "center", marginTop: 50 }}>
        <Image
          source={require("../assets/chat-icon.png")}
          style={{ width: 80, height: 80 }}
        />
      </View>
      <View
        style={{
          alignSelf: "stretch",
          width: "auto",
          minWidth: 50,
          marginTop: 130,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        <Input
          style={{}}
          placeholder="Your username"
          leftIcon={{ type: "font-awesome", name: "user" }}
        />
        <RadioGender />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="LOG IN"
          buttonStyle={styles.btnConnect}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
          onPress={() => navigation.navigate("ChatsScreen")}
        />
      </View>
    </View>
  );
}
