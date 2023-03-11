import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  TextInput,
} from "react-native";
import SimpleButton from "./SimpeButton";
export default function Calculator({ stringBalance, set_stringBalance }) {
  const [isOperatorPressed, set_isOperatorPressed] = useState(false);
  const [stringBalance, set_stringBalance] = useState("");
  function Calculator(oper = "") {
    let check = false;
    stringBalance.split("").forEach((el) => {
      if (el == "+") {
        let x = stringBalance.split("+");
        set_stringBalance(
          (Number(x[0]) + Number(x[1])).toFixed(2).toString() + oper
        );
        check = true;
      }
      if (el == "-") {
        let x = stringBalance.split("-");
        set_stringBalance(
          (Number(x[0]) - Number(x[1])).toFixed(2).toString() + oper
        );
        check = true;
      }
      if (el == "*") {
        let x = stringBalance.split("*");
        set_stringBalance(
          (Number(x[0]) * Number(x[1])).toFixed(2).toString() + oper
        );
        check = true;
      }
      if (el == "÷") {
        let x = stringBalance.split("÷");
        set_stringBalance(
          (Number(x[0]) / Number(x[1])).toFixed(2).toString() + oper
        );
        check = true;
      }
    });
    if (!check) {
      set_stringBalance(stringBalance + oper);
    }
  }
  return (
    <View style={styles.modalBody}>
      <View style={styles.modalBodyBalance}>
        <Text style={styles.modalBodyBalanceText}>Баланс</Text>
        <Text style={styles.modalBodyBalanceAmount}>{stringBalance} ₽</Text>
      </View>
      <View>
        <View style={styles.modalBodyButtons}>
          <View style={styles.modalBodyButtonsOperators}>
            <SimpleButton
              height={50}
              width={50}
              borderRadius={50}
              backgroundColor="#DFDDDA"
              color="black"
              text="÷"
              onPress={() => {
                set_isOperatorPressed(true);
                if ("+-÷*".includes(stringBalance.slice(-1))) {
                  set_stringBalance(stringBalance.slice(0, -1) + "÷");
                  //Calculator();
                } else {
                  Calculator("÷");
                }
              }}
            ></SimpleButton>
            <SimpleButton
              height={50}
              width={50}
              borderRadius={50}
              backgroundColor="#DFDDDA"
              color="black"
              text="X"
              onPress={() => {
                set_isOperatorPressed(true);
                if ("+-÷*".includes(stringBalance.slice(-1))) {
                  set_stringBalance(stringBalance.slice(0, -1) + "*");
                  //Calculator();
                } else {
                  Calculator("*");
                }
              }}
            ></SimpleButton>
            <SimpleButton
              height={50}
              width={50}
              borderRadius={50}
              backgroundColor="#DFDDDA"
              color="black"
              text="—"
              onPress={() => {
                set_isOperatorPressed(true);
                if ("+-÷*".includes(stringBalance.slice(-1))) {
                  set_stringBalance(stringBalance.slice(0, -1) + "-");
                  //Calculator();
                } else {
                  Calculator("-");
                }
              }}
            ></SimpleButton>
            <SimpleButton
              height={50}
              width={50}
              borderRadius={50}
              backgroundColor="#DFDDDA"
              color="black"
              text="+"
              onPress={() => {
                set_isOperatorPressed(true);
                if ("+-÷*".includes(stringBalance.slice(-1))) {
                  set_stringBalance(stringBalance.slice(0, -1) + "+");

                  //Calculator();
                } else {
                  Calculator("+");
                  //set_stringBalance(stringBalance + "+");
                }
              }}
            ></SimpleButton>
          </View>
          <View>
            <View style={styles.flexRow}>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text="7"
                onPress={() => {
                  set_stringBalance(stringBalance + "7");
                }}
              ></SimpleButton>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text="8"
                onPress={() => {
                  set_stringBalance(stringBalance + "8");
                }}
              ></SimpleButton>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text="9"
                onPress={() => {
                  set_stringBalance(stringBalance + "9");
                }}
              ></SimpleButton>
            </View>
            <View style={styles.flexRow}>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text="4"
                onPress={() => {
                  set_stringBalance(stringBalance + "4");
                }}
              ></SimpleButton>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text="5"
                onPress={() => {
                  set_stringBalance(stringBalance + "5");
                }}
              ></SimpleButton>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text="6"
                onPress={() => {
                  set_stringBalance(stringBalance + "6");
                }}
              ></SimpleButton>
            </View>
            <View style={styles.flexRow}>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text="1"
                onPress={() => {
                  set_stringBalance(stringBalance + "1");
                }}
              ></SimpleButton>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text="2"
                onPress={() => {
                  set_stringBalance(stringBalance + "2");
                }}
              ></SimpleButton>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text="3"
                onPress={() => {
                  set_stringBalance(stringBalance + "3");
                }}
              ></SimpleButton>
            </View>
            <View style={styles.flexRow}>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={100}
                borderRadius={15}
                backgroundColor="#DFDDDA"
                color="black"
                text="0"
                onPress={() => {
                  set_stringBalance(stringBalance + "0");
                }}
              ></SimpleButton>
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={50}
                width={50}
                borderRadius={50}
                backgroundColor="#DFDDDA"
                color="black"
                text=","
                onPress={() => {
                  set_stringBalance(stringBalance + ".");
                }}
              ></SimpleButton>
            </View>
          </View>
          <View>
            <SimpleButton
              style={styles.modalBodyNumberButtons}
              height={50}
              width={50}
              borderRadius={50}
              backgroundColor="#DFDDDA"
              color="black"
              text="←"
              onPress={() => {
                set_stringBalance(stringBalance.slice(0, -1));
              }}
            ></SimpleButton>
            {isOperatorPressed ? (
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={160}
                width={50}
                borderRadius={15}
                backgroundColor="#DFDDDA"
                color="black"
                text="="
                onPress={() => {
                  set_isOperatorPressed(false);
                  Calculator();
                }}
              ></SimpleButton>
            ) : (
              <SimpleButton
                style={styles.modalBodyNumberButtons}
                height={160}
                width={50}
                borderRadius={15}
                backgroundColor="#DFDDDA"
                color="black"
                text="✓"
                onPress={() => {
                  set_stringBalance(stringBalance.slice(0, -1));
                }}
              ></SimpleButton>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
