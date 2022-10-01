import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./pages/StartScreen";
import MainScreen from "./pages/MainScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen}>
          {/* {(props) => <HomeScreen {...props} extraData={someData} />} */}
        </Stack.Screen>
        <Stack.Screen name="MainScreen" component={MainScreen}>
          {/* {(props) => <HomeScreen {...props} extraData={someData} />} */}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
