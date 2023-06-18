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
import "../sql/globaldb";
import SqlQuery from "../sql/globaldb";
import { SvgXml } from "react-native-svg";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../store/redux_variables";
import AddCategoryModal from "../components/AddCategoryModal";

export default function CategoriesScreen({ navigation }) {
  const [dbIncomesCategories_Items, set_dbIncomesCategories_Items] = useState(
    []
  );
  const [dbExpensesCategories_Items, set_dbExpensesCategories_Items] = useState(
    []
  );
  const triggerCategoriesScreen = useSelector(
    (state) => state.counter.triggerCategoriesScreen
  );
  const [AddCategoryModalVisible, set_AddCategoryModalVisible] =
    useState(false);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM IncomesCategories;", [], (_, { rows }) => {
        set_dbIncomesCategories_Items(rows._array);
      });
      //console.log("Categ", dbIncomesCategories_Items);
    });
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM ExpensesCategories;", [], (_, { rows }) => {
        set_dbExpensesCategories_Items(rows._array);
      });
      //console.log("Categ", dbIncomesCategories_Items);
    });
  }, [triggerCategoriesScreen]);
  function setAddCategoryModal(isVisible) {
    set_AddCategoryModalVisible(isVisible);
  }
  return (
    <SafeAreaView style={styles.container}>
      <AddCategoryModal
        state={AddCategoryModalVisible}
        set_state={setAddCategoryModal}
      ></AddCategoryModal>
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
          <View style={styles.startScreen__headerButton}>
            <NavBarCustomButton
              svg_height={28}
              svg_width={28}
              onPress={() => {
                set_AddCategoryModalVisible(!AddCategoryModalVisible);
                console.log(AddCategoryModalVisible);
              }}
              iconSrc={`<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V20C0 22.7614 2.23858 25 5 25H23C25.7614 25 28 22.7614 28 20V5C28 2.23858 25.7614 0 23 0H5ZM12.9031 13.4273V17.2767H14.8136V13.4273H18.663V11.5168H14.8136V7.67444H12.9031V11.5168H9.06075V13.4273H12.9031Z" fill="#327896"/>
</svg>
`}
            ></NavBarCustomButton>
          </View>
        </View>
        <View style={styles.startScreen__container}>
          {/* changeable */}
          <View style={styles.startScreen__graph}></View>
          <View style={styles.Incomes}>
            <Text>Доходы</Text>
            {dbIncomesCategories_Items.length > 0 ? (
              dbIncomesCategories_Items.map((value) => {
                //return <Text key={index}>{value.bill_name}</Text>;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log("Press", value.category_id);
                    }}
                    key={value.category_id}
                  >
                    <View style={styles.mapItems}>
                      <SvgXml
                        style={styles.mapItems_svg}
                        xml={value.category_icon}
                        width={50}
                        height={50}
                      ></SvgXml>
                      <View>
                        <Text style={styles.mapItems_billname}>
                          {value.category_name}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Text>Loading</Text>
            )}
            <Text>
              _____________________________________________________________________________
            </Text>
          </View>
          <View>
            <Text>Расходы</Text>
            {dbExpensesCategories_Items.length > 0 ? (
              dbExpensesCategories_Items.map((value) => {
                //return <Text key={index}>{value.bill_name}</Text>;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log("Press", value.category_id);
                    }}
                    key={value.category_id}
                  >
                    <View style={styles.mapItems}>
                      <SvgXml
                        style={styles.mapItems_svg}
                        xml={value.category_icon}
                        width={50}
                        height={50}
                      ></SvgXml>
                      <View>
                        <Text style={styles.mapItems_billname}>
                          {value.category_name}
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
          <View style={styles.startScreen__dataList}></View>
        </View>
        <StatusBar style="auto" />
      </View>
      <NavBar
        navigation={navigation}
        array_color={["#6C6C6C", "#244EB8", "#6C6C6C", "#6C6C6C"]}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Incomes: {
    color: "green",
  },
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
