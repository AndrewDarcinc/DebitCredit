import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavBarCustomButton from "../components/NavbarCustomButton";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.mainScreen}>
      <View>{/* header */}</View>
      <View style={styles.startScreen__container}>{/* changeable */}</View>
      <View>
        {/* навигация */}
        <NavBarCustomButton
          icon="../assets/icon/icon_navbar/Bills.svg"
          text={"Счета"}
          onPress={() => alert("MainScreen")}
        ></NavBarCustomButton>
        {/* <NavBarCustomButton
          text={"Счета"}
          onPress={() => alert("MainScreen")}
        ></NavBarCustomButton> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "#fff",
    /*alignItems: 'center',
      justifyContent: 'center',*/
  },
});
