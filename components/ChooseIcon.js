import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";

export default function ModalView({ state, set_state }) {
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
        <TouchableOpacity
          style={styles.ModalBackgroundClose}
          onPress={() => set_state(false)}
        ></TouchableOpacity>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <View>
              <View style={styles.headerTitle}>
                <SvgXml
                  xml={`<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V20C0 22.7614 2.23858 25 5 25H23C25.7614 25 28 22.7614 28 20V5C28 2.23858 25.7614 0 23 0H5ZM12.9031 13.4273V17.2767H14.8136V13.4273H18.663V11.5168H14.8136V7.67444H12.9031V11.5168H9.06075V13.4273H12.9031Z" fill="#327896"/>
                  </svg>
`}
                  width={48}
                  height={48}
                ></SvgXml>
                <Text>Категория</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  headerTitle: {},
  ModalBackgroundClose: {
    width: "100%",
    height: "100%",
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
    width: "40%",
  },
  flexRow: {
    flexDirection: "row",
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
