import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.intro}>
          <View style={styles.avatar}>
            <Image
              style={styles.image}
              source={require("./assets/react-icon.png")}
              alt="react-icon"
            />
          </View>
          <View>
            <Text style={styles.text}>Tony Stark</Text>
            <Text style={styles.text}>CEO</Text>
          </View>
        </View>
        <View style={styles.contact}>
          <Text style={styles.text}>Phone: 322-1234-9999</Text>
          <Text style={styles.text}>Email: tony@ironman.marvel</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#62b1d0",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#1dab9b",
    padding: 20,
  },
  intro: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
  },
});
