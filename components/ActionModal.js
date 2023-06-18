import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import DefaultModalHeader from "./ModalHeaders/DefaultModalHeader";
import Calculator from "./Calculator";
import ChangeBillModalHeader from "./ModalHeaders/ChangeBillModalHeader";
import { useSelector, useDispatch } from "react-redux";
import { set_icon_svg, set_universal_name } from "../store/redux_variables";

export default function ActionModal({ state, set_state, id }) {
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
        {/* <TouchableOpacity
          style={styles.ModalBackgroundClose}
          onPress={() => set_state(false)}
        ></TouchableOpacity>
      </View>
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          {/* <View style={styles.modalHeaderCloseWrap}> */}
        {/* </View> */}
        {/* </View> */}
        <TouchableOpacity
          style={styles.ModalBackgroundClose}
          onPress={() => set_state(false)}
        ></TouchableOpacity>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            {/* <View style={styles.modalHeaderCloseWrap}> */}
            {/* <NavBarCustomButton
                style={styles.any_style}
                onPress={() => set_state(false)}
                svg_height={20}
                svg_width={20}
                iconSrc={`<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4566 7.04236L14.0847 1.41424L12.6705 2.76263e-05L7.0424 5.62813L1.41434 0L0.000117302 1.4142L5.62818 7.04235L0.190232 12.4803L1.60445 13.8945L7.04239 8.45657L12.4803 13.8946L13.8945 12.4804L8.4566 7.04236Z" fill="white"/>
          </svg>`}
              ></NavBarCustomButton> */}
            {/* </View> */}
            {/* <DefaultModalHeader></DefaultModalHeader> */}
            <ChangeBillModalHeader></ChangeBillModalHeader>
            {/* <CategoriesModalHeader></CategoriesModalHeader> */}
            {/* <View>
            <Text style={styles.newBill}>Новый счет</Text>
            <Text style={styles.newName}>Название</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            ></TextInput>
          </View> */}
          </View>
          {/* <Calculator></Calculator> */}
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
    paddingBottom: 60,
    paddingRight: 1,
    width: "15%",
  },
  modalHeader: {
    backgroundColor: "#B0ADE5",
    height: 250,
    width: "100%",
    flexDirection: "row",
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
