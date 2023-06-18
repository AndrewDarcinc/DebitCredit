import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import NavBarCustomButton from "../NavbarCustomButton";
import ChooseIcon from "../ChooseIcon";
import { useSelector, useDispatch } from "react-redux";
import { set_universal_name } from "../../store/redux_variables";
import SqlQuery from "../../sql/globaldb";
export default function ChangeBillModalHeader({
  state,
  set_state,
  iconName,
  setIconName,
}) {
  const icon_svg = useSelector((state) => state.counter.icon_svg);
  const universal_name = useSelector((state) => state.counter.universal_name);
  const id = useSelector((state) => state.counter.id);
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
        <Text style={styles.newBill}>Редактировать счет</Text>
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
            onPress={() => {
              setCIModalVisible(true);
            }}
            color="red"
            iconSrc={icon_svg}
          ></NavBarCustomButton>
        </View>
        <View style={styles.headerIconBackgroundWrapp}>
          <NavBarCustomButton
            svg_width={72}
            svg_height={47}
            onPress={() => {
              SqlQuery(
                "update Bills set bill_name = " +
                  "'" +
                  universal_name +
                  "'" +
                  ", " +
                  "bill_icon = " +
                  "'" +
                  icon_svg +
                  "'" +
                  " where bill_id = " +
                  id +
                  ";"
              );
              console.log(id);
            }}
            color="red"
            iconSrc={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" fill="green"/></svg>`}
          ></NavBarCustomButton>
        </View>
        <View style={styles.headerIconBackgroundWrapp}>
          <NavBarCustomButton
            svg_width={72}
            svg_height={47}
            onPress={() => {
              SqlQuery(
                "update Bills set is_archived = 1 where bill_id = " + id + ";"
              );
            }}
            color="red"
            iconSrc={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M261-120q-24 0-42-18t-18-42v-570h-11q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-810h158q0-13 8.625-21.5T378-840h204q12.75 0 21.375 8.625T612-810h158q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770-750h-11v570q0 24-18 42t-42 18H261Zm106-176q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T427-296v-339q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T367-635v339Zm166 0q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T593-296v-339q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T533-635v339Z" fill="grey"/></svg>`}
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
    margin: 7,
    paddingTop: 10,
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
