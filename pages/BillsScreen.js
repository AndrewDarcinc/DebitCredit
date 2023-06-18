import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NavBarCustomButton from "../components/NavbarCustomButton";
import NavBar from "../components/NavBar";
import { Shadow } from "react-native-shadow-2";
import ModalView from "../components/ModalView";
import * as SQLite from "expo-sqlite";
//import "../sql/globaldb";
import SqlQuery from "../sql/globaldb";
import { SvgXml } from "react-native-svg";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  set_icon_svg,
  set_universal_name,
} from "../store/redux_variables";
import ActionModal from "../components/ActionModal";

export default function BillsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [ActionModalVisible, setActionModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [dbBills_Items, set_dbBills_Items] = useState([]);
  const triggerBillsScreen = useSelector(
    (state) => state.counter.triggerBillsScreen
  );
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Bills where is_archived = 0 or is_archived = null;",
        [],
        (_, { rows }) => {
          set_dbBills_Items(rows._array);
        }
      );
      //console.log(dbBills_Items);
    });
  }, [modalVisible, triggerBillsScreen, ActionModalVisible]);

  function setModalState(isVisible) {
    setModalVisible(isVisible);
  }
  function setActionModal(isVisible) {
    setActionModalVisible(isVisible);
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar /> */}
      <View style={styles.mainScreen}>
        <ModalView state={modalVisible} set_state={setModalState}></ModalView>
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

        <ScrollView>
          <View style={styles.startScreen__container}>
            {/* workspace */}

            <View style={styles.startScreen__graph}>
              {dbBills_Items.length > 0 ? (
                dbBills_Items.map((value) => {
                  //return <Text key={index}>{value.bill_name}</Text>;
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        console.log("Press", value.bill_id);
                        setActionModalVisible(true);
                        dispatch(set_universal_name(value.bill_name));
                        dispatch(set_icon_svg(value.bill_icon));
                        //console.log(ActionModalVisible);
                      }}
                      key={value.bill_id}
                    >
                      <View style={styles.mapItems}>
                        <ActionModal
                          state={ActionModalVisible}
                          set_state={setActionModal}
                          id={value.bill_id}
                          icon={value.bill_icon}
                          name={value.bill_name}
                          amount={value.amount}
                        ></ActionModal>
                        <SvgXml
                          style={styles.mapItems_svg}
                          xml={value.bill_icon}
                          width={50}
                          height={50}
                        ></SvgXml>
                        <View>
                          <Text style={styles.mapItems_billname}>
                            {value.bill_name}
                          </Text>
                          <Text style={styles.mapItems_amount}>
                            {value.amount}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <Text>Loading</Text>
              )}
            </View>

            {/* <View style={styles.startScreen__dataList}></View> */}
          </View>
        </ScrollView>
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
  mapItems_svg: {
    margin: 5,
  },
  mapItems_amount: { fontSize: 15, marginLeft: 10 },
  mapItems_billname: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  mapItems: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  modalBodyNumberButtons: {
    margin: "10%",
  },
  flexRow: {
    flexDirection: "row",
  },
  modalBodyButtonsOperators: {
    //backgroundColor: "red",
    //width: 50,
  },
  modalBodyButtons: { flexDirection: "row" },
  modalBodyBalanceText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: "2.5%",
  },
  modalBodyBalanceAmount: {
    textAlign: "center",
    fontSize: 25,
    color: "#59C33F",
    fontWeight: "240",
    marginTop: "2.5%",
  },
  modalBodyBalance: {
    //margin: "14%",
    marginBottom: "7%",
    //marginTop: "20%",
    backgroundColor: "#DFDDDA",
    height: "40%",
    borderRadius: 10,
    width: "100%",
  },
  modalBody: {
    height: "50%",
    width: "100%",
    padding: "14%",
  },
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
    paddingRight: 1,
    width: "15%",
  },
  modalHeader: {
    backgroundColor: "#B0ADE5",
    height: 150,
    width: "100%",
    flexDirection: "row",
    elevation: 20,
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
    backgroundColor: "white",
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
    //flexDirection: "row",
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
    backgroundColor: "white",
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
