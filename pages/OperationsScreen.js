import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../store/redux_variables";
import CustomButton from "../components/CustomButton";

export default function OperationsScreen({ navigation }) {
  const count = useSelector((state) => state.counter.universal_name);
  const calculator_value = useSelector(
    (state) => state.counter.calculator_value
  );
  const is_FirstLaunch = useSelector((state) => state.counter.is_FirstLaunch);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar /> */}
      <View style={styles.mainScreen}>
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
        <View style={styles.startScreen__container}>
          {/* changeable */}
          <Text>Value: {is_FirstLaunch}</Text>
          <Text>Value: {count}</Text>
          <Text>calc: {calculator_value}</Text>
          <CustomButton
            onPress={() => dispatch(incrementByAmount(50))}
            height={50}
            width={50}
            text="sdfsdfg"
          />
          <View style={styles.startScreen__graph}></View>
          <Text>Операции</Text>
          <View style={styles.startScreen__dataList}></View>
        </View>
        <StatusBar style="auto" />
      </View>
      <NavBar
        navigation={navigation}
        array_color={["#6C6C6C", "#6C6C6C", "#244EB8", "#6C6C6C"]}
      />
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
    height: "10%",
    flexDirection: "row",
    flexWrap: "wrap",
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
});
