import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bills_SvgComponent from "../components/Bills_SvgComponent";
import Categories_SvgComponent from "../components/Categories_SvgComponent";
import NavBarCustomButton from "../components/NavbarCustomButton";

// const NewHOC = (PassedComponent) => {
//   return class extends React.Component {
//     render() {
//       return (
//         <div>
//           <PassedComponent {...this.props} />
//         </div>
//       );
//     }
//   };
// };
export default function MainScreen({ navigation }) {
  return (
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
            //iconSrc="https://ln5.sync.com/dl/a14cbba10/rvhwwrq6-tycjunrj-q4ugaiu8-rp39nyxk"
            text="Счета"
            onPress={() => alert("MainScreen1")}
          ></NavBarCustomButton>
        </View>
        <View style={styles.mainScreen__menuElev}>
          <NavBarCustomButton
            //iconSrc="https://ln5.sync.com/dl/a14cbba10/rvhwwrq6-tycjunrj-q4ugaiu8-rp39nyxk"
            text="Категории"
            onPress={() => alert("MainScreen2")}
          ></NavBarCustomButton>
        </View>
        <View style={styles.mainScreen__menuElev}>
          <NavBarCustomButton
            //iconSrc="https://ln5.sync.com/dl/a14cbba10/rvhwwrq6-tycjunrj-q4ugaiu8-rp39nyxk"
            text="Операции"
            onPress={() => alert("MainScreen3")}
          ></NavBarCustomButton>
        </View>
        <View style={styles.mainScreen__menuElev}>
          <NavBarCustomButton
            //iconSrc="https://ln5.sync.com/dl/a14cbba10/rvhwwrq6-tycjunrj-q4ugaiu8-rp39nyxk"
            text="Графики"
            onPress={() => alert("MainScreen4")}
          ></NavBarCustomButton>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
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
