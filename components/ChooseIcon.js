import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import Polzunok from "./Polzunok";
import SimpleButton from "./SimpeButton";
import { useSelector, useDispatch } from "react-redux";
import { set_icon_svg } from "../store/redux_variables";
import * as SQLite from "expo-sqlite";

export default function ModalView({
  state,
  set_state,
  choosenIcon,
  set_choosenIcon,
}) {
  let icon_svg = useSelector((state) => state.counter.icon_svg);
  let previous_icon_svg = icon_svg;
  const dispatch = useDispatch();
  const [switchActive, set_switchActive] = useState(true);
  const [dbIconsItems, set_dbIconsItems] = useState([]);
  // useEffect(() => {
  //   db.transaction((tx) => {
  //     //console.log(1);
  //     tx.executeSql("SELECT * FROM Icons;", [], (_, { rows }) =>
  //       // rows._array.forEach((el) => {
  //       //   set_dbBills_Items(el);
  //       //   //console.log(dbBills_Items.bill_name);
  //       // })
  //       {
  //         //console.log(2);
  //         set_dbIconsItems(rows._array);
  //       }
  //     );
  //     //console.log(dbIconsItems[0].icon_svg);
  //   });
  // }, []);
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
                <View
                  style={{
                    width: "30%",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                  }}
                >
                  <SvgXml xml={icon_svg} width={48} height={48}></SvgXml>
                </View>
                <View
                  style={{
                    width: "70%",
                    justifyContent: "center",
                    height: 80,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 25,
                    }}
                  >
                    Иконка
                  </Text>
                </View>
              </View>
              <View style={styles.chooseIcon}>
                {/* <SimpleButton
                  style={styles.chooseIcon_buttonStyle}
                  height={"90%"}
                  width={"50%"}
                  borderRadius={0}
                  //backgroundColor="black"
                  text={"Иконка"}
                  fontSize={20}
                  fontWeight={switchActive ? "bold" : "200"}
                  onPress={() => {
                    if (!switchActive) {
                      set_switchActive(!switchActive);
                    }
                  }}
                ></SimpleButton>
                <SimpleButton
                  style={styles.chooseIcon_buttonStyle}
                  height={"90%"}
                  width={"50%"}
                  borderRadius={0}
                  //backgroundColor="black"
                  text={"Цвет"}
                  fontSize={20}
                  fontWeight={!switchActive ? "bold" : "200"}
                  onPress={() => {
                    if (switchActive) {
                      set_switchActive(!switchActive);
                    }
                  }}
                ></SimpleButton>
                {/* <View style={styles.activePolzunok}></View> */}
                {/* <Polzunok
                  left={switchActive ? "0%" : "50%"}
                  width={"50%"}
                ></Polzunok>  */}
              </View>
            </View>
          </View>
          <View style={styles.modalBody}>
            {/* {switchActive ? <Comp /> : <Comp2 />} */}
            {/* {dbIconsItems.length > 0 ? (
              dbIconsItems.map((value) => {
                return (
                  <TouchableOpacity
                    key={value.icon_id}
                    onPress={() => {
                      dispatch(set_icon_svg(value.svg));
                    }}
                  >
                    <Text>{value.icon_id}</Text>
                    <SvgXml
                      xml={value.svg}
                      height={50}
                      width={50}
                      fill={"black"}
                    ></SvgXml>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Text>Loading</Text>
            )} */}
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  set_icon_svg(
                    `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M353.775-383Q331-383 315.5-398.725q-15.5-15.726-15.5-38.5Q300-460 315.725-475.5q15.726-15.5 38.5-15.5Q377-491 392.5-475.275q15.5 15.726 15.5 38.5Q408-414 392.275-398.5q-15.726 15.5-38.5 15.5Zm253 0Q584-383 568.5-398.725q-15.5-15.726-15.5-38.5Q553-460 568.725-475.5q15.726-15.5 38.5-15.5Q630-491 645.5-475.275q15.5 15.726 15.5 38.5Q661-414 645.275-398.5q-15.726 15.5-38.5 15.5ZM480-140q142.375 0 241.188-98.948Q820-337.895 820-480.465 820-506 816-531q-4-25-10-46-20 5-43.262 7-23.261 2-48.738 2-97.115 0-183.557-40Q444-648 383-722q-34 81-97.5 141.5T140-487v7q0 142.375 98.812 241.188Q337.625-140 480-140Zm0 60q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" fill="#6495ED"/></svg>`
                  )
                );
              }}
            >
              <SvgXml
                xml={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M353.775-383Q331-383 315.5-398.725q-15.5-15.726-15.5-38.5Q300-460 315.725-475.5q15.726-15.5 38.5-15.5Q377-491 392.5-475.275q15.5 15.726 15.5 38.5Q408-414 392.275-398.5q-15.726 15.5-38.5 15.5Zm253 0Q584-383 568.5-398.725q-15.5-15.726-15.5-38.5Q553-460 568.725-475.5q15.726-15.5 38.5-15.5Q630-491 645.5-475.275q15.5 15.726 15.5 38.5Q661-414 645.275-398.5q-15.726 15.5-38.5 15.5ZM480-140q142.375 0 241.188-98.948Q820-337.895 820-480.465 820-506 816-531q-4-25-10-46-20 5-43.262 7-23.261 2-48.738 2-97.115 0-183.557-40Q444-648 383-722q-34 81-97.5 141.5T140-487v7q0 142.375 98.812 241.188Q337.625-140 480-140Zm0 60q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" fill="#6495ED"/></svg>`}
              ></SvgXml>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(
                  set_icon_svg(
                    `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M319.825-120Q307-120 298.5-128.625T290-150v-100h-60q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-310h60v-110h-60q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-480h60v-330q0-12.75 8.625-21.375T320-840h230q87.818 0 148.909 61.128Q760-717.744 760-629.872T698.909-481Q637.818-420 550-420H350v110h140q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T490-250H350v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625ZM350-480h200q63 0 106.5-43.929Q700-567.857 700-630q0-63-43.5-106.5T550-780H350v300Z" fill="#919192"/></svg>`
                  )
                );
              }}
            >
              <SvgXml
                xml={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M319.825-120Q307-120 298.5-128.625T290-150v-100h-60q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-310h60v-110h-60q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-480h60v-330q0-12.75 8.625-21.375T320-840h230q87.818 0 148.909 61.128Q760-717.744 760-629.872T698.909-481Q637.818-420 550-420H350v110h140q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T490-250H350v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625ZM350-480h200q63 0 106.5-43.929Q700-567.857 700-630q0-63-43.5-106.5T550-780H350v300Z" fill="#919192"/></svg>`}
              ></SvgXml>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(
                  set_icon_svg(
                    `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M220-120q-24.75 0-42.375-17.625T160-180v-390q0-14.25 6.375-27T184-618l260-195q8.295-6 17.344-9 9.049-3 18.853-3 9.803 0 18.717 3 8.915 3 17.086 9l260 195q11.25 8.25 17.625 21T800-570v390q0 24.75-17.625 42.375T740-120H560v-280H400v280H220Z" fill="red"/></svg>`
                  )
                );
              }}
            >
              <SvgXml
                xml={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M220-120q-24.75 0-42.375-17.625T160-180v-390q0-14.25 6.375-27T184-618l260-195q8.295-6 17.344-9 9.049-3 18.853-3 9.803 0 18.717 3 8.915 3 17.086 9l260 195q11.25 8.25 17.625 21T800-570v390q0 24.75-17.625 42.375T740-120H560v-280H400v280H220Z" fill="red"/></svg>
                `}
              ></SvgXml>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(
                  set_icon_svg(`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-342h680v-129H140v129Z" fill="#9F2D8D"/></svg>
                  `)
                );
              }}
            >
              <SvgXml
                xml={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-342h680v-129H140v129Z" fill="#9F2D8D"/></svg>
                `}
              ></SvgXml>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(
                  set_icon_svg(
                    `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M279.825-60Q267-60 258.5-68.625T250-90v-200h-60q-24 0-42-18t-18-42v-320h-10q-12.75 0-21.375-8.675Q90-687.351 90-700.175 90-713 98.625-721.5T120-730h130v-90h-30q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T220-880h120q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T340-820h-30v90h130q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T440-670h-10v320q0 24-18 42t-42 18h-60v200q0 12.75-8.675 21.375Q292.649-60 279.825-60ZM190-350h180v-80h-80q-8 0-14-6t-6-14q0-8 6-14t14-6h80v-80h-80q-8 0-14-6t-6-14q0-8 6-14t14-6h80v-80H190v320ZM600-80q-24 0-42-18t-18-42v-266q0-32 8-48.5t21-30.5q19-20 25-31t6-24v-30h-10q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 9-21.325t21-8.5h200q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T790-570h-10v30q0 12 7.5 25t26.5 33q13 14 19.5 29t6.5 47v266q0 24-18 42t-42 18H600Zm0-300h180v-26q0-18-10-32t-22-29q-15-19-21.5-35t-6.5-38v-30h-60v30q0 21-6 37t-21 35q-12 15-22.5 29.5T600-406v26Zm0 240h180v-80H600v80Z" fill="#1CD3A2"/></svg>`
                  )
                );
              }}
            >
              <SvgXml
                xml={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M279.825-60Q267-60 258.5-68.625T250-90v-200h-60q-24 0-42-18t-18-42v-320h-10q-12.75 0-21.375-8.675Q90-687.351 90-700.175 90-713 98.625-721.5T120-730h130v-90h-30q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T220-880h120q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T340-820h-30v90h130q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T440-670h-10v320q0 24-18 42t-42 18h-60v200q0 12.75-8.675 21.375Q292.649-60 279.825-60ZM190-350h180v-80h-80q-8 0-14-6t-6-14q0-8 6-14t14-6h80v-80h-80q-8 0-14-6t-6-14q0-8 6-14t14-6h80v-80H190v320ZM600-80q-24 0-42-18t-18-42v-266q0-32 8-48.5t21-30.5q19-20 25-31t6-24v-30h-10q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 9-21.325t21-8.5h200q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T790-570h-10v30q0 12 7.5 25t26.5 33q13 14 19.5 29t6.5 47v266q0 24-18 42t-42 18H600Zm0-300h180v-26q0-18-10-32t-22-29q-15-19-21.5-35t-6.5-38v-30h-60v30q0 21-6 37t-21 35q-12 15-22.5 29.5T600-406v26Zm0 240h180v-80H600v80Z" fill="#1CD3A2"/></svg>
                `}
              ></SvgXml>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(
                  set_icon_svg(
                    `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM350-620h140q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T490-680H350q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T350-620ZM230-120q-21 0-39.49-13.964Q172.02-147.927 166-168q-25-86-41.542-148.458-16.543-62.458-26.365-109.682-9.822-47.224-13.957-83.785Q80-546.486 80-580q0-92 64-156t156-64h200q27-36 68.5-58t91.5-22q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22t-5.5 24l91 91h57q12.75 0 21.375 8.625T880-630v227q0 10.242-5.5 18.121Q869-377 859-374l-91.926 30.297L713-163q-6.026 19.614-21.844 31.307Q675.338-120 655-120H540q-24.75 0-42.375-17.625T480-180v-20h-80v20q0 24.75-17.625 42.375T340-120H230Z" fill="#F3DA0B"/></svg>`
                  )
                );
              }}
            >
              <SvgXml
                xml={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM350-620h140q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T490-680H350q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T350-620ZM230-120q-21 0-39.49-13.964Q172.02-147.927 166-168q-25-86-41.542-148.458-16.543-62.458-26.365-109.682-9.822-47.224-13.957-83.785Q80-546.486 80-580q0-92 64-156t156-64h200q27-36 68.5-58t91.5-22q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22t-5.5 24l91 91h57q12.75 0 21.375 8.625T880-630v227q0 10.242-5.5 18.121Q869-377 859-374l-91.926 30.297L713-163q-6.026 19.614-21.844 31.307Q675.338-120 655-120H540q-24.75 0-42.375-17.625T480-180v-20h-80v20q0 24.75-17.625 42.375T340-120H230Z" fill="#F3DA0B"/></svg>
                `}
              ></SvgXml>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(
                  set_icon_svg(
                    `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M195-733q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T195-793h572q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T767-733H195Zm5 567q-12.75 0-21.375-8.625T170-196v-215h-25q-14.14 0-23.07-11T116-447l44-202q2-11 10.25-17.5T189-673h583q10.5 0 18.75 6.5T801-649l44 202q3 14-5.93 25T816-411h-25v215q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T731-196v-215H552v215q0 12.75-8.625 21.375T522-166H200Zm30-60h262v-185H230v185Z" fill="#293133"/></svg>`
                  )
                );
              }}
            >
              <SvgXml
                xml={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M195-733q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T195-793h572q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T767-733H195Zm5 567q-12.75 0-21.375-8.625T170-196v-215h-25q-14.14 0-23.07-11T116-447l44-202q2-11 10.25-17.5T189-673h583q10.5 0 18.75 6.5T801-649l44 202q3 14-5.93 25T816-411h-25v215q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T731-196v-215H552v215q0 12.75-8.625 21.375T522-166H200Zm30-60h262v-185H230v185Z" fill="#293133"/></svg>
                `}
              ></SvgXml>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(
                  set_icon_svg(`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M729.825-80Q717-80 708.5-88.625T700-110v-290h-55q-24.75 0-42.375-17.625T585-460v-245q0-79 48-127t127-48v770q0 12.75-8.675 21.375Q742.649-80 729.825-80Zm-415 0Q302-80 293.5-88.625T285-110v-338q-52-11-88.5-52.5T160-600.27V-850q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T220-850v250h65v-250q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T345-850v250h65v-250q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T470-850v249.73q0 58.27-36.5 99.77Q397-459 345-448v338q0 12.75-8.675 21.375Q327.649-80 314.825-80Z" fill="#3F888F"/></svg>
                  `)
                );
              }}
            >
              <SvgXml
                xml={`<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M729.825-80Q717-80 708.5-88.625T700-110v-290h-55q-24.75 0-42.375-17.625T585-460v-245q0-79 48-127t127-48v770q0 12.75-8.675 21.375Q742.649-80 729.825-80Zm-415 0Q302-80 293.5-88.625T285-110v-338q-52-11-88.5-52.5T160-600.27V-850q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T220-850v250h65v-250q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T345-850v250h65v-250q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T470-850v249.73q0 58.27-36.5 99.77Q397-459 345-448v338q0 12.75-8.675 21.375Q327.649-80 314.825-80Z" fill="#3F888F"/></svg>
                `}
              ></SvgXml>
            </TouchableOpacity>
          </View>
          <View style={styles.modalFooter}>
            <SimpleButton
              height={50}
              width={90}
              text="ОТМЕНИТЬ"
              fontSize={20}
              onPress={() => {
                dispatch(set_icon_svg(previous_icon_svg));
                //set_state(false);
              }}
            ></SimpleButton>
            <SimpleButton
              height={25}
              width={90}
              text="ГОТОВО"
              fontSize={20}
              onPress={() => {
                set_state(false);
              }}
            ></SimpleButton>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  activePolzunok: {
    position: "absolute",
    width: "50%",
    height: "5%",
    backgroundColor: "#606060",
    left: "50%",
    bottom: 15,
  },
  modalFooter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "auto",
    //backgroundColor: "blue",
    paddingRight: 20,
  },
  modalBody: {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Scroll_Body: {
    backgroundColor: "red",
  },
  chooseIcon_buttonStyle: {
    width: "50%",
  },
  chooseIcon: {
    flexDirection: "row",
    width: "100%",
  },
  headerTitle: {
    flexDirection: "row",
    width: "100%",
  },
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
    height: 100,
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
