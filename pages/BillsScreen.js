import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  TextInput,
} from "react-native";
import NavBarCustomButton from "../components/NavbarCustomButton";
import NavBar from "../components/NavBar";
import { Shadow } from "react-native-shadow-2";

export default function BillsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [balance, setBalance] = useState(0);
  const [text, onChangeText] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar /> */}
      <View style={styles.mainScreen}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          //presentationStyle={"overFullScreen"}
          //supportedOrientations={"landscape-left"}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <View style={styles.modalHeaderCloseWrap}>
                  <NavBarCustomButton
                    style={styles.any_style}
                    onPress={() => setModalVisible(!modalVisible)}
                    svg_height={20}
                    svg_width={20}
                    iconSrc={`<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4566 7.04236L14.0847 1.41424L12.6705 2.76263e-05L7.0424 5.62813L1.41434 0L0.000117302 1.4142L5.62818 7.04235L0.190232 12.4803L1.60445 13.8945L7.04239 8.45657L12.4803 13.8946L13.8945 12.4804L8.4566 7.04236Z" fill="white"/>
                  </svg>`}
                  ></NavBarCustomButton>
                </View>
                <View>
                  <Text style={styles.newBill}>Новый счет</Text>
                  <Text style={styles.newName}>Название</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                  ></TextInput>
                </View>
              </View>
              <View></View>
            </View>
          </View>
        </Modal>
        <Shadow
          startColor="rgba(0,0,0,0.2)"
          endColor="rgba(255,255,255,0)"
          distance={6}
          paintInside={true}
          offset={[0, 5]}
          style={styles.startScreen__shadow}
        >
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
            <View style={styles.startScreen__headerButton}>
              <NavBarCustomButton
                svg_height={28}
                svg_width={28}
                onPress={() => setModalVisible(true)}
                iconSrc={`<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V20C0 22.7614 2.23858 25 5 25H23C25.7614 25 28 22.7614 28 20V5C28 2.23858 25.7614 0 23 0H5ZM12.9031 13.4273V17.2767H14.8136V13.4273H18.663V11.5168H14.8136V7.67444H12.9031V11.5168H9.06075V13.4273H12.9031Z" fill="#327896"/>
</svg>
`}
              ></NavBarCustomButton>
            </View>
          </View>
        </Shadow>
        <View style={styles.startScreen__container}>
          {/* workspace */}
          <View style={styles.startScreen__graph}>
            <Text>Счета</Text>
            <Text>-2 000 P</Text>
          </View>
          <View style={styles.startScreen__dataList}></View>
        </View>
        <StatusBar style="auto" />
      </View>
      <NavBar
        navigation={navigation}
        array_color={["white", "black", "black", "black"]}
      />
      {/* <TabNavigator></TabNavigator> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 200,
    //margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    fontSize: 24,
    color: "white",
  },
  newName: {
    fontSize: 16,
    color: "white",
    paddingTop: 12,
    opacity: 0.7,
  },
  newBill: {
    fontSize: 24,
    color: "white",
    paddingTop: 20,
    //paddingRight:
  },
  modalHeaderCloseWrap: {
    paddingBottom: 60,
    paddingRight: 30,
    width: "25%",
  },
  modalHeader: {
    backgroundColor: "#B0ADE5",
    height: 150,
    width: "100%",
    flexDirection: "row",
  },
  startScreen__headerButton: {},
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
    height: 82,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
  },
  startScreen__headerDescription: {
    alignItems: "center",
    justifyContent: "center",
    //width: "100%",
    flexDirection: "column",
    backgroundColor: "red",
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
  startScreen__shadow: {
    width: "100%",
  },
  startScreen__graph: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    paddingBottom: 15,
    paddingRight: 27,
    paddingLeft: 13,
    fontSize: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    //alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    //marginLeft: -15,
    backgroundColor: "red",
    borderRadius: 10,
    //padding: 35,
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
