import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import NavBarCustomButton from "../components/NavbarCustomButton";
import NavBar from "../components/NavBar";
import { Shadow } from "react-native-shadow-2";

export default function BillsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar /> */}
      <View style={styles.mainScreen}>
        <Shadow
          startColor="rgba(0,0,0,0.2)"
          endColor="rgba(255,255,255,0)"
          distance={6}
          paintInside={true}
          offset={[0, 5]}
          style={styles.startScreen__shadow}
        >
          <View style={styles.startScreen__header}>
            {/* header */}
            <View style={styles.startScreen__headerSettings}></View>
            <View style={styles.startScreen__headerDescription}>
              <View style={styles.startScreen__dropDownList}>
                <Text>Фильтр - Карта</Text>
                <Text>2000</Text>
              </View>
              <Text>ПТ, 9 СЕНТЯБРЯ 2022</Text>
            </View>
            <View style={styles.startScreen__headerVariable}></View>
          </View>
        </Shadow>
        <View style={styles.startScreen__container}>
          {/* workspace */}
          <View style={styles.startScreen__graph}>
            <Text>Счета</Text>
            <Text>-2 000 P</Text>
          </View>
          <View style={styles.startScreen__dataList}></View>
        </View>
        <StatusBar style="auto" />
      </View>
      <NavBar
        navigation={navigation}
        array_color={["white", "black", "black", "black"]}
      />
      {/* <TabNavigator></TabNavigator> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  mainScreen: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
    /*alignItems: 'center',
      justifyContent: 'center',*/
  },
  startScreen__header: {
    width: "100%",
    height: 82,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#ffffff",
  },
  startScreen__headerDescription: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
  },
  startScreen__dropDownList: {
    alignItems: "center",
    justifyContent: "center",
  },
  startScreen__menu: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: "10%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#DFDDDA",
    /*alignItems: 'center',
      justifyContent: 'center',*/
  },
  mainScreen__menuElev: {
    width: "25%",
    /*alignItems: 'center',
      justifyContent: 'center',*/
  },
  startScreen__shadow: {
    width: "100%",
  },
  startScreen__graph: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    paddingBottom: 15,
    paddingRight: 27,
    paddingLeft: 13,
    fontSize: 12,
  },
});
