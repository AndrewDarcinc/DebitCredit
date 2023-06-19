import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import NavBarCustomButton from "./NavbarCustomButton";
import { useSelector, useDispatch } from "react-redux";
import { set_universal_name } from "../store/redux_variables";
import Calculator from "../components/Calculator";
import { SelectList } from "react-native-dropdown-select-list";
import ChooseIcon from "../components/ChooseIcon";
import SimpleButton from "./SimpeButton";
import SqlQuery from "../sql/globaldb";

export default function AddCategoryModal({ state, set_state }) {
  const data = [
    { key: "1", value: "Категория доходов" },
    { key: "2", value: "Категория расходов" },
  ];
  const [selected, setSelected] = useState("");
  const [text, set_text] = useState("");
  const icon_svg = useSelector((state) => state.counter.icon_svg);
  const universal_name = useSelector((state) => state.counter.universal_name);
  const [CImodalVisible, setCIModalVisible] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(set_universal_name(e));
  };
  function setCIModalState(isVisible) {
    setCIModalVisible(isVisible);
  }
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={state}
      //presentationStyle={"overFullScreen"}
      //supportedOrientations={"landscape-left"}
      onRequestClose={() => {
        set_state(false);
      }}
    >
      <View style={styles.centeredView}>
        <ChooseIcon
          state={CImodalVisible}
          set_state={setCIModalState}
        ></ChooseIcon>
        <TouchableOpacity
          style={styles.ModalBackgroundClose}
          onPress={() => set_state(false)}
        ></TouchableOpacity>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <View style={styles.nameandicon}>
              <View style={styles.modalHeaderCloseWrap}></View>
              <View>
                <Text style={styles.newBill}>Новая категория</Text>
                <Text style={styles.newName}>Название</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange}
                  value={universal_name}
                ></TextInput>
              </View>
              <View style={styles.headerIconBackground}>
                <View style={styles.headerIconBackgroundWrapp}>
                  <NavBarCustomButton
                    svg_width={72}
                    svg_height={47}
                    onPress={() => setCIModalVisible(true)}
                    color="red"
                    iconSrc={icon_svg}
                  ></NavBarCustomButton>
                </View>
              </View>
            </View>
            <SelectList
              placeholder="Выберите"
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              search={false}
              onSelect={() => {
                console.log(selected);
              }}
            ></SelectList>
          </View>
          <View style={styles.modalFooter}>
            <SimpleButton
              height={50}
              width={90}
              text="ОТМЕНИТЬ"
              fontSize={20}
              color={"white"}
              onPress={() => {
                //dispatch(set_icon_svg(previous_icon_svg));
                set_state(false);
              }}
            ></SimpleButton>
            <SimpleButton
              height={25}
              width={90}
              text="ГОТОВО"
              fontSize={20}
              color={"white"}
              onPress={() => {
                // {
                //   selected == "Категория доходов"
                //     ? SqlQuery(
                //         "insert into IncomesCategories (category_name, category_icon, is_archived) values (" +
                //           "'" +
                //           universal_name +
                //           "'," +
                //           "'" +
                //           icon_svg +
                //           "'," +
                //           "0)"
                //       )
                //     : SqlQuery(
                //         "insert into ExpensesCategories (category_name, category_icon, is_archived) values (" +
                //           "'" +
                //           universal_name +
                //           "'," +
                //           "'" +
                //           icon_svg +
                //           "'," +
                //           "0)"
                //       );
                // }
                if (selected == "Категория доходов") {
                  SqlQuery(
                    "insert into IncomesCategories (category_name, category_icon, is_archived) values (" +
                      "'" +
                      universal_name +
                      "'," +
                      "'" +
                      icon_svg +
                      "'," +
                      "0)"
                  );
                } else if (selected == "Категория расходов") {
                  SqlQuery(
                    "insert into ExpensesCategories (category_name, category_icon, is_archived) values (" +
                      "'" +
                      universal_name +
                      "'," +
                      "'" +
                      icon_svg +
                      "'," +
                      "0)"
                  );
                }
              }}
            ></SimpleButton>
          </View>
          {/* <Calculator></Calculator> */}
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalFooter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "auto",
    //backgroundColor: "blue",
    paddingRight: 20,
    backgroundColor: "#B0ADE5",
    color: "white",
  },
  nameandicon: {
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 20,
  },
  headerIconBackgroundWrapp: {
    borderRadius: 15,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 30,
    paddingTop: 18,
  },
  headerIconBackground: {
    width: "50%",
  },
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
    paddingTop: 0,
    //paddingRight:
  },
  modalHeaderCloseWrap: {
    paddingBottom: 60,
    paddingRight: 1,
    width: "15%",
  },
  modalHeader: {
    backgroundColor: "#B0ADE5",
    height: 305,
    width: "100%",
    flexDirection: "column",
    elevation: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
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
