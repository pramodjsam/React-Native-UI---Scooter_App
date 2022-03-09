import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const Detail = ({ navigation }) => {
  const [checked, setChecked] = useState("red");
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={25} color="#fff" />
        </TouchableOpacity>
        <Feather name="shopping-cart" size={25} color="#fff" />
      </View>
      <Image source={require("../img/2.png")} style={styles.image} />
      <View style={styles.cont3}>
        <Text style={styles.title}>Maxx Scooter</Text>
        <Text style={styles.subtitle}>Model S1</Text>
        <View style={styles.cont2}>
          <Text style={{ ...styles.title, flex: 2, marginTop: 0 }}>Colors</Text>
          <TouchableOpacity onPress={() => setChecked("red")}>
            <View style={checked === "red" ? styles.selected("#E2443B") : null}>
              <View style={styles.c1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChecked("green")}>
            <View
              style={checked === "green" ? styles.selected("#529C47") : null}
            >
              <View style={styles.c2} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChecked("blue")}>
            <View
              style={checked === "blue" ? styles.selected("#529CC0") : null}
            >
              <View style={styles.c3} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          similique cumque illum autem fugit id repellendus sequi!
        </Text>
        <View style={styles.cont1}>
          <TouchableOpacity
            onPress={() => (liked ? setLiked(false) : setLiked(true))}
          >
            <FontAwesome
              name={liked ? "heart" : "heart-o"}
              color={
                checked === "red"
                  ? "#E2443B"
                  : checked === "green"
                  ? "#529C47"
                  : "#529CC0"
              }
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn(checked)}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    height: "35%",
    width: "50%",
    marginBottom: 10,
    resizeMode: "contain",
  },
  cont3: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginTop: 30,
    fontFamily: "Montserrat_700Bold",
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
    color: "#474747",
    fontFamily: "Montserrat_400Regular",
  },
  cont2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 25,
  },
  c1: {
    backgroundColor: "#E2443B",
    height: 20,
    width: 20,
    borderRadius: 15,
  },
  c2: {
    backgroundColor: "#529C47",
    height: 20,
    width: 20,
    borderRadius: 15,
    // marginHorizontal: 10,
  },
  c3: {
    backgroundColor: "#529CC0",
    height: 20,
    width: 20,
    borderRadius: 15,
  },
  selected: (color) => ({
    borderColor: color, //"#E2443B"
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 24,
    marginHorizontal: 10,
  }),
  text: {
    fontSize: 18,
    lineHeight: 25,
    paddingRight: 80,
    fontFamily: "Montserrat_400Regular",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  btn: (color) => ({
    backgroundColor:
      color === "red" ? "#E2443B" : color === "green" ? "#529C47" : "#529CC0",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  }),
  btnText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    color: "#fff",
  },
  iconColor: (color) => ({
    backgroundColor: color,
  }),
});

export default Detail;
