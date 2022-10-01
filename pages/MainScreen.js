import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.mainScreen}>
      <View>{/* header */}</View>
      <View style={styles.startScreen__container}>{/* changeable */}</View>
      <View>{/* навигация */}</View>
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
