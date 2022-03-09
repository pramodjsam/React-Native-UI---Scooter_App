import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require("../img/1.png")} style={styles.img} />
      <Text style={styles.title}>Maxx Scooter</Text>
      <Text style={styles.detail}>
        With an updated motor, and integrated anti-theft tech the maxx scooters
        are custom-tuned for the ultimate riding experience.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail")}
        style={styles.btn}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    width: "120%",
    height: "50%",
    resizeMode: "contain",
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    marginTop: 20,
    fontFamily: "Montserrat_700Bold",
  },
  detail: {
    fontSize: 18,
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
    paddingHorizontal: 20,
    textAlign: "center",
    lineHeight: 30,
    marginTop: 30,
  },
  btn: {
    backgroundColor: "#E2443B",
    marginTop: 80,
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    color: "#FFF",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 25,
  },
});

export default Home;
