import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import NavBarCustomButton from "../NavbarCustomButton";
import ChooseIcon from "../ChooseIcon";

export default function DefaultModalHeader({ state, set_state }) {
  const [CImodalVisible, setCIModalVisible] = useState(false);
  //const [text, onChangeText] = useState("");
  function setCIModalState(isVisible) {
    setCIModalVisible(isVisible);
  }
  return (
    <View style={styles.flexRow}>
      <ChooseIcon
        state={CImodalVisible}
        set_state={setCIModalState}
      ></ChooseIcon>
      <View>
        <Text style={styles.newBill}>Новый счет</Text>
        <Text style={styles.newName}>Название</Text>
        <TextInput
          style={styles.input}
          onChangeText={set_state}
          value={state}
        ></TextInput>
      </View>
      <View style={styles.headerIconBackground}>
        <View style={styles.headerIconBackgroundWrapp}>
          <NavBarCustomButton
            svg_width={72}
            svg_height={47}
            onPress={() => setCIModalVisible(true)}
            color="red"
            iconSrc={`<svg width="128" height="85" viewBox="0 0 128 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5443 0.619799C4.21247 1.45513 2.20462 3.29542 1.02956 5.67429L0 7.7588V42.4902V77.2215L1.02956 79.306C1.59602 80.4526 2.7039 81.9267 3.49178 82.582C6.56974 85.1413 2.99886 84.9986 64 84.9986C125.001 84.9986 121.43 85.1413 124.508 82.582C125.296 81.9267 126.404 80.4526 126.97 79.306L128 77.2215V42.4902V7.7588L126.97 5.67429C126.404 4.52777 125.296 3.0536 124.508 2.39833C121.428 -0.162998 125.032 -0.0214394 63.8299 0.0134496C16.5533 0.0403181 7.90698 0.131755 6.5443 0.619799ZM40.603 32.4738C42.6828 33.0565 43.1932 33.8068 42.3708 35.0733C41.7447 36.0373 41.664 36.055 40.5545 35.4763C38.978 34.6538 38.0267 34.7151 37.1466 35.6964C36.1044 36.8582 36.6919 37.6061 39.8696 39.1633C43.163 40.777 43.8921 41.8181 43.6329 44.539C43.3634 47.3662 41.8075 48.9406 39.015 49.2113C36.4744 49.4575 35.3487 49.1664 33.8194 47.8683C32.3876 46.6528 32.3784 46.5958 33.416 45.3386L34.2094 44.3774L35.0923 45.1923C36.837 46.8028 39.3282 46.8445 40.1598 45.2773C40.9489 43.7895 40.2246 42.8804 37.1081 41.4475C34.6268 40.3066 34.0512 39.8559 33.5587 38.6668C33.1055 37.572 33.0641 36.8987 33.3782 35.7217C34.1851 32.6992 36.9582 31.4524 40.603 32.4738ZM57.0101 32.8376C57.412 33.174 57.6398 34.0101 57.6398 35.1478V36.9304L56.3923 36.0341C55.5663 35.441 54.5674 35.1382 53.4356 35.1382C48.6615 35.1382 46.3813 41.2382 49.8484 44.7359C51.9072 46.8128 53.7055 46.8725 57.3416 44.9841C57.5054 44.8991 57.6398 45.6611 57.6398 46.6772C57.6398 48.323 57.5201 48.5721 56.5466 48.9506C55.9455 49.1848 54.2565 49.3104 52.7932 49.2298C50.5767 49.1078 49.8473 48.8748 48.4214 47.8326C42.9325 43.8212 44.0483 34.9806 50.3402 32.6294C52.1524 31.9525 56.0998 32.0756 57.0101 32.8376ZM20.8696 32.9097C21.853 33.1824 23.0849 34.0053 24.0986 35.0668C28.0813 39.2383 26.8744 45.5724 21.5851 48.2601C20.68 48.7201 19.2171 48.9065 16.5168 48.9065H12.7205V40.6856V32.4646L16 32.467C17.8035 32.4682 19.995 32.6675 20.8696 32.9097ZM31.0062 40.6856V48.9065H29.4161H27.8261V40.6856V32.4646H29.4161H31.0062V40.6856ZM81.3166 37.7693C82.4233 40.5769 83.4222 42.9686 83.5367 43.0841C83.6516 43.1996 84.6982 40.8576 85.863 37.8792L87.9805 32.4646H89.7471C90.9985 32.4646 91.4572 32.6106 91.32 32.9659C88.9819 39.0197 84.3707 49.4491 83.9616 49.6071C83.6619 49.7234 83.1726 49.5678 82.874 49.2622C82.3533 48.7285 75.9255 33.4636 75.9255 32.7606C75.9255 32.5725 76.6859 32.4738 77.6149 32.542L79.3044 32.6651L81.3166 37.7693ZM102.161 33.8682V35.2718H99.1801H96.1988V37.0764V38.881H98.9814H101.764V40.2845V41.6881H98.9814H96.1988V43.8937V46.0994H99.1801H102.161V47.503V48.9065H97.5901H93.0186V40.6856V32.4646H97.5901H102.161V33.8682ZM112.355 33.1203C115.778 34.7589 115.647 40.394 112.155 41.7407C111.497 41.9949 111.329 42.25 111.591 42.5972C113.437 45.0455 115.591 47.997 115.829 48.4053C116.047 48.7782 115.62 48.9065 114.16 48.9065H112.2L110.112 45.6983C108.963 43.9338 107.868 42.4902 107.677 42.4902C107.485 42.4902 107.329 43.9338 107.329 45.6983V48.9065H105.739H104.149V40.6856V32.4646H107.567C109.907 32.4646 111.417 32.6715 112.355 33.1203ZM70.8699 33.4194C72.4289 34.094 74.5338 36.2731 75.1062 37.8042C75.7311 39.4773 75.6178 42.7524 74.8836 44.2146C73.9713 46.0324 73.1568 46.8773 71.49 47.7355C66.7142 50.1942 61.2818 48.0191 59.7903 43.0504C58.2269 37.8439 61.9906 32.8668 67.491 32.866C68.6458 32.8656 70.1663 33.1147 70.8699 33.4194ZM16.2981 40.6856V46.0994L17.7888 46.0933C19.7525 46.0857 21.0421 45.3864 22.1496 43.7285C24.5247 40.1727 21.884 35.2746 17.5901 35.2726L16.2981 35.2718V40.6856ZM107.727 37.6779C107.727 39.9473 107.781 40.084 108.676 40.084C110.047 40.084 111.404 38.8256 111.404 37.5548C111.404 36.0317 110.627 35.2718 109.07 35.2718H107.727V37.6779Z" /></svg>`}
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
