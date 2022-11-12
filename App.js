import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./pages/StartScreen";
import React, { useState, useEffect } from "react";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import "./sql/globaldb";
import create_tables from "./sql/create_tables";
import BillsScreen from "./pages/BillsScreen";
import TabNavigator from "./components/TabNavigator";

let persistor = persistStore(store);
const Stack = createNativeStackNavigator();

export default function App() {
  function drop_database(table_name) {
    db.transaction((tx) => {
      tx.executeSql(
        "drop table if exists" + table_name,
        null,
        () => console.log("DELETED"),
        (txObj, error) => console.log("Error ", error)
      );
    });
  }
  const [Data, setData] = useState([]);
  useEffect(() => {
    //drop_database();
    create_tables();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {/* <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen}>
              {/* {(props) => <HomeScreen {...props} extraData={someData} />} */}
          {/* </Stack.Screen> */}
          {/* </Stack.Navigator> */}
          <TabNavigator></TabNavigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});
