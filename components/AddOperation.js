import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import DefaultModalHeader from "./ModalHeaders/DefaultModalHeader";
import Calculator from "./Calculator";
import ChangeBillModalHeader from "./ModalHeaders/ChangeBillModalHeader";
import { useSelector, useDispatch } from "react-redux";
import { set_icon_svg, set_universal_name } from "../store/redux_variables";
import { SelectList } from "react-native-dropdown-select-list";
import SimpleButton from "./SimpeButton";
import OperationCalculator from "./OperationCalculator";
import * as SQLite from "expo-sqlite";

export default function AddOperation({ state, set_state }) {
  const [selected, setSelected] = useState("");

  const [dbBills_Items, set_dbBills_Items] = useState([]);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Bills where is_archived = 0 or is_archived = null;",
        [],
        (_, { rows }) => {
          //console.log(rows._array);
          let newArray = rows._array.map((item) => {
            return { key: item.bill_id, value: item.bill_name };
          });
          set_dbBills_Items(newArray);
          console.log(newArray);
        }
      );
      //console.log(dbBills_Items);
    });
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={state}
      //presentationStyle={"overFullScreen"}
      //supportedOrientations={"landscape-left"}
      onRequestClose={() => {
        set_state(false);
      }}
    >
      <View style={styles.centeredView}>
        <TouchableOpacity
          style={styles.ModalBackgroundClose}
          onPress={() => set_state(false)}
        ></TouchableOpacity>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <View style={styles.nameandicon}>
              <View style={styles.modalHeaderCloseWrap}></View>
              <View>
                <Text style={styles.newBill}>Новая оперция</Text>
                <Text style={styles.newBill}>
                  Выберите счет списания/начисления
                </Text>
              </View>
              <View style={styles.headerIconBackground}></View>
            </View>
            <SelectList
              placeholder="Выберите"
              setSelected={(val) => setSelected(val)}
              data={dbBills_Items}
              save="key"
              search={false}
              dropdownStyles={{ backgroundColor: "#EEEEEE" }}
              boxStyles={{ backgroundColor: "#EEEEEE" }}
              onSelect={() => {
                console.log(selected);
              }}
            ></SelectList>
          </View>

          <OperationCalculator bill_id={selected} />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  ModalBackgroundClose: {
    width: "100%",
    height: "100%",
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
    paddingBottom: 0,
    paddingRight: 1,
    width: "15%",
  },
  modalHeader: {
    backgroundColor: "#B0ADE5",
    height: 250,
    width: "100%",
    flexDirection: "column",
    elevation: 20,
    //paddingLeft: 50,
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    //alignItems: "center",
    marginTop: 2,
  },
  modalView: {
    //marginLeft: -15,
    backgroundColor: "white",
    borderRadius: 10,
    //padding: 35,
    alignItems: "center",
  },
});
