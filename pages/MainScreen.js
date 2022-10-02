import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bills_SvgComponent from "../components/Bills_SvgComponent";
import Categories_SvgComponent from "../components/Categories_SvgComponent";
import NavBarCustomButton from "../components/NavbarCustomButton";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.mainScreen}>
      <View>{/* header */}</View>
      <View style={styles.startScreen__container}>{/* changeable */}</View>
      <View>
        {/* навигация */}
        <NavBarCustomButton
          iconSrc={() => <Bills_SvgComponent></Bills_SvgComponent>}
          text="Счета"
          onPress={() => alert("MainScreen")}
        ></NavBarCustomButton>
        <NavBarCustomButton
          iconSrc={() => <Categories_SvgComponent></Categories_SvgComponent>}
          text={"Категории"}
          onPress={() => alert("MainScreen")}
        ></NavBarCustomButton>
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
