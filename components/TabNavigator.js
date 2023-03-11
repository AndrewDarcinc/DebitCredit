import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//import NavBarCustomButton from "./NavbarCustomButton";
import BillsScreen from "../pages/BillsScreen";
import { SvgXml } from "react-native-svg";
import { Image } from "react-native";

const Tab = createMaterialBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator activeColor="red" i>
      <Tab.Screen
        name="Bills"
        component={BillsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            <MaterialCommunityIcons name="billboard" color={color} size={26} />;
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
