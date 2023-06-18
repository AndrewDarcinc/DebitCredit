import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  triggerBillsScreen: true,
  triggerCategoriesScreen: true,
  value1: 0,
  NavBar_color: ["white", "black", "black", "black"],
  calculator_value: 0,
  icon_svg: `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M319.825-120Q307-120 298.5-128.625T290-150v-100h-60q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-310h60v-110h-60q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-480h60v-330q0-12.75 8.625-21.375T320-840h230q87.818 0 148.909 61.128Q760-717.744 760-629.872T698.909-481Q637.818-420 550-420H350v110h140q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T490-250H350v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625ZM350-480h200q63 0 106.5-43.929Q700-567.857 700-630q0-63-43.5-106.5T550-780H350v300Z" fill="#919192"/></svg>`,
  universal_name: "Дебетовая карта",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value1 += 1;
    },
    decrement: (state) => {
      state.value1 -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value1 += action.payload;
    },
    setAmount: (state, action) => {
      state.value1 = action.payload;
    },
    switchTowhite: (state, action) => {
      state.NavBar_color = action.payload;
    },
    set_calculator_value: (state, action) => {
      state.calculator_value = action.payload;
    },
    set_icon_svg: (state, action) => {
      state.icon_svg = action.payload;
    },
    set_universal_name: (state, action) => {
      state.universal_name = action.payload;
    },
    set_triggerBillsScreen: (state) => {
      state.triggerBillsScreen = !state.triggerBillsScreen;
    },
    set_triggerCategoriesScreen: (state) => {
      state.triggerCategoriesScreen = !state.triggerCategoriesScreen;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setAmount,
  set_calculator_value,
  set_icon_svg,
  set_universal_name,
  set_triggerBillsScreen,
  set_triggerCategoriesScreen,
} = counterSlice.actions;
export default counterSlice.reducer;
