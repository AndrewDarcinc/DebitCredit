import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../store/counterSlice";

export default function StartScreen({ navigation }) {
  const count = useSelector((state) => state.counter.value1);
  const dispatch = useDispatch();

  return (
    <View style={styles.startScreen}>
      <View style={styles.startScreen__container}>
        <View style={styles.startScreen__title}>
          <Text>{count}</Text>
          <CustomButton
            onPress={() => dispatch(incrementByAmount(50))}
            height={50}
            width={50}
            text="sdfsdfg"
          />
          <Text style={styles.startScreen__titleDebit}>DEBIT</Text>
          <Text style={styles.startScreen__titleCredit}>CREDIT</Text>
        </View>
        <Text style={styles.startScreen__description}>
          Простое управление личными финансами
        </Text>
        <CustomButton
          height={42}
          text={"НАЧАТЬ"}
          onPress={() => navigation.navigate("MainScreen")}
          width={140}
        ></CustomButton>
        <Text style={styles.startScreen_wrapper}>
          <Text style={styles.startScreen__privacyPolicy}>
            Продолжая, Вы соглашаетесь с{" "}
          </Text>
          <Text
            style={styles.startScreen__privacyPolicyLink}
            onPress={() => alert("goooo")}
          >
            Политикой конфиденциальности.
          </Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    backgroundColor: "#fff",
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  startScreen__container: {
    backgroundColor: "#fff",
    alignItems: "center",
    position: "relative",
    top: "33%",
    justifyContent: "center",
  },
  startScreen__title: {
    backgroundColor: "#fff",
  },
  startScreen__titleDebit: {
    fontSize: 40,
    textAlign: "right",
  },
  startScreen__titleCredit: {
    fontSize: 40,
    marginTop: -20,
    textAlign: "right",
  },
  startScreen__description: {
    fontSize: 18,
    paddingHorizontal: "10%",
    paddingTop: 5,
    textAlign: "center",
    marginBottom: "30%",
  },
  startScreen__privacyPolicy: {
    fontSize: 18,
  },
  startScreen__privacyPolicyLink: {
    fontSize: 18,
    color: "#327896",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  startScreen_wrapper: {
    textAlign: "center",
    marginTop: "10%",
  },
});
