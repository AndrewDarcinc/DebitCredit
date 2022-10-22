import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./pages/StartScreen";
import MainScreen from "./pages/MainScreen";
import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
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
    </Provider>
  );
}

const styles = StyleSheet.create({});
