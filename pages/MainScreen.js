import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import NavBarCustomButton from "../components/NavbarCustomButton";

export default function MainScreen({ navigation }) {
  const [iconStates, setIconStates] = useState([
    "white",
    "black",
    "black",
    "black",
  ]);
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
          <View style={styles.startScreen__graph}></View>
          <View style={styles.startScreen__dataList}></View>
        </View>
        <View style={styles.startScreen__menu}>
          {/* навигация */}
          <View style={styles.mainScreen__menuElev}>
            <NavBarCustomButton
              iconSrc={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.90354 0.0916862C1.031 0.347721 0.323139 1.10195 0.0905037 2.02344C-0.0301679 2.50152 -0.0301679 21.4945 0.0905037 21.9726C0.327048 22.9095 1.0381 23.6567 1.93316 23.9089C2.32699 24.0198 20.2543 24.0347 20.7537 23.9245C21.6823 23.7196 22.4915 22.8659 22.6894 21.8821C22.726 21.7 22.756 21.201 22.756 20.7731V19.9952H16.9333C10.5087 19.9952 10.7299 20.0079 10.0869 19.6021C9.47095 19.2133 9.03193 18.5402 8.89935 17.7814C8.80942 17.2665 8.80942 6.72952 8.89935 6.21471C9.03193 5.45585 9.47095 4.78278 10.0869 4.39398C10.7299 3.98818 10.5087 4.00087 16.9333 4.00087H22.756V3.22295C22.756 2.7951 22.726 2.29609 22.6894 2.11397C22.4973 1.15918 21.7546 0.346408 20.8396 0.0894368C20.4098 -0.0312704 2.31514 -0.0290835 1.90354 0.0916862ZM11.3819 11.998V17.3087H17.691H24V11.998V6.68741H17.691H11.3819V11.998ZM17.2687 10.2107C17.6253 10.3948 17.9401 10.7263 18.1473 11.1362C18.2614 11.3617 18.283 11.4991 18.283 11.998C18.283 12.4969 18.2614 12.6344 18.1473 12.8599C17.9383 13.2733 17.6245 13.6017 17.2562 13.7924C16.8039 14.0266 16.1303 14.0371 15.6641 13.8172C15.2948 13.643 14.8588 13.1727 14.6849 12.7613C14.5133 12.3548 14.5128 11.6424 14.6839 11.2373C14.8276 10.897 15.2365 10.4073 15.496 10.2646C16.0677 9.95026 16.7251 9.93027 17.2687 10.2107Z"/>
              </svg>
            `}
              color={iconStates[0]}
              text="Счета"
              onPress={() => {
                setIconStates(
                  iconStates.map((el, ind) => {
                    return ind == 0 ? "white" : "black";
                  })
                );
              }}
            ></NavBarCustomButton>
          </View>
          <View style={styles.mainScreen__menuElev}>
            <NavBarCustomButton
              iconSrc={`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.48 24C13.9928 24 15.4908 23.6896 16.8885 23.0866C18.2862 22.4835 19.5561 21.5996 20.6259 20.4853C21.6956 19.371 22.5442 18.0481 23.1231 16.5922C23.702 15.1363 24 13.5759 24 12C24 10.4241 23.702 8.86371 23.1231 7.4078C22.5442 5.95189 21.6956 4.62902 20.6259 3.51472C19.5561 2.40042 18.2862 1.5165 16.8885 0.913445C15.4908 0.310389 13.9928 -6.88831e-08 12.48 0L12.48 4.2C13.4633 4.2 14.437 4.40175 15.3455 4.79374C16.254 5.18573 17.0795 5.76027 17.7748 6.48457C18.4701 7.20886 19.0217 8.06873 19.398 9.01507C19.7743 9.96141 19.968 10.9757 19.968 12C19.968 13.0243 19.7743 14.0386 19.398 14.9849C19.0217 15.9313 18.4701 16.7911 17.7748 17.5154C17.0795 18.2397 16.254 18.8143 15.3455 19.2063C14.437 19.5982 13.4633 19.8 12.48 19.8L12.48 24Z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.52 24C10.0072 24 8.50916 23.6896 7.11149 23.0866C5.71382 22.4835 4.44386 21.5996 3.37413 20.4853C2.3044 19.371 1.45584 18.0481 0.876907 16.5922C0.297974 15.1363 0 13.5759 0 12C0 10.4241 0.297974 8.86371 0.876907 7.4078C1.45584 5.95189 2.3044 4.62902 3.37413 3.51472C4.44386 2.40042 5.71382 1.5165 7.11149 0.913445C8.50916 0.310389 10.0072 -6.88831e-08 11.52 0L11.52 4.2C10.5367 4.2 9.56295 4.40175 8.65447 4.79374C7.74598 5.18573 6.92051 5.76027 6.22519 6.48457C5.52986 7.20886 4.9783 8.06873 4.60199 9.01507C4.22568 9.96141 4.032 10.9757 4.032 12C4.032 13.0243 4.22568 14.0386 4.60199 14.9849C4.9783 15.9313 5.52986 16.7911 6.22519 17.5154C6.92051 18.2397 7.74598 18.8143 8.65447 19.2063C9.56295 19.5982 10.5367 19.8 11.52 19.8L11.52 24Z"/>
            </svg>`}
              color={iconStates[1]}
              text="Категории"
              onPress={() => {
                setIconStates(
                  iconStates.map((el, ind) => {
                    return ind == 1 ? "white" : "black";
                  })
                );
              }}
            ></NavBarCustomButton>
          </View>
          <View style={styles.mainScreen__menuElev}>
            <NavBarCustomButton
              iconSrc={`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3ZM4.99998 16C4.99998 15.4477 5.44769 15 5.99998 15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H5.99998C5.44769 17 4.99998 16.5523 4.99998 16ZM5.99998 12C5.44769 12 4.99998 12.4477 4.99998 13C4.99998 13.5523 5.44769 14 5.99998 14H18C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12H5.99998ZM4.99998 10C4.99998 9.44771 5.44769 9 5.99998 9H18C18.5523 9 19 9.44771 19 10C19 10.5523 18.5523 11 18 11H5.99998C5.44769 11 4.99998 10.5523 4.99998 10ZM5.99998 6C5.44769 6 4.99998 6.44772 4.99998 7C4.99998 7.55228 5.44769 8 5.99998 8H18C18.5523 8 19 7.55228 19 7C19 6.44772 18.5523 6 18 6H5.99998Z"/>
            </svg>
            `}
              color={iconStates[2]}
              text="Операции"
              onPress={() => {
                setIconStates(
                  iconStates.map((el, ind) => {
                    return ind == 2 ? "white" : "black";
                  })
                );
              }}
            ></NavBarCustomButton>
          </View>
          <View style={styles.mainScreen__menuElev}>
            <NavBarCustomButton
              iconSrc={`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33345 1C9.33345 0.447716 9.78117 0 10.3335 0H13.2565C13.8088 0 14.2565 0.447715 14.2565 1V23C14.2565 23.5523 13.8088 24 13.2565 24H10.3335C9.78117 24 9.33345 23.5523 9.33345 23V1ZM0 13C0 12.4477 0.447715 12 1 12H4.33335C4.88563 12 5.33335 12.4477 5.33335 13V23C5.33335 23.5523 4.88563 24 4.33335 24H1C0.447716 24 0 23.5523 0 23V13ZM19.6667 17C19.1144 17 18.6667 17.4477 18.6667 18V23C18.6667 23.5523 19.1144 24 19.6667 24H23C23.5523 24 24 23.5523 24 23V18C24 17.4477 23.5523 17 23 17H19.6667Z"/>
            </svg>`}
              color={iconStates[3]}
              text="Графики"
              onPress={() => {
                setIconStates(
                  iconStates.map((el, ind) => {
                    return ind == 3 ? "white" : "black";
                  })
                );
              }}
            ></NavBarCustomButton>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
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
