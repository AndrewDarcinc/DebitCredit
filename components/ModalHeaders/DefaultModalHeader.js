import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import NavBarCustomButton from "../NavbarCustomButton";
import ChooseIcon from "../ChooseIcon";
import { useSelector, useDispatch } from "react-redux";
import { set_universal_name } from "../../store/redux_variables";
export default function DefaultModalHeader({
  state,
  set_state,
  iconName,
  setIconName,
}) {
  const icon_svg = useSelector((state) => state.counter.icon_svg);
  const universal_name = useSelector((state) => state.counter.universal_name);
  const dispatch = useDispatch();

  const [CImodalVisible, setCIModalVisible] = useState(false);

  //const [text, onChangeText] = useState("");
  function setCIModalState(isVisible) {
    setCIModalVisible(isVisible);
  }
  function setIconNameState(isVisible) {
    setIconName(isVisible);
  }
  const handleChange = (e) => {
    dispatch(set_universal_name(e));
  };
  return (
    <View style={styles.flexRow}>
      <ChooseIcon
        state={CImodalVisible}
        set_state={setCIModalState}
        choosenIcon={iconName}
        set_choosenIcon={setIconNameState}
      ></ChooseIcon>
      <View>
        <Text style={styles.newBill}>Новый счет</Text>
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
  );
}
const styles = StyleSheet.create({
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
    width: "40%",
  },
  flexRow: {
    flexDirection: "row",
    paddingLeft: 50,
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
});
