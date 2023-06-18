import React from "react";
import InitialData from "./InitialData";

export default function check_isDatabaseEmpty() {
  //   is_firstLaunch === true
  //     ? () => {
  //         InitialData();
  //         dispatch(set__is_firstLaunch());
  //       }
  //     : () => {};
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM Bills;",
      [],
      (_, { rows }) =>
        // rows._array.forEach((el) => {
        //   console.log(el);
        // }),

        rows._array.length === 0 ? InitialData() : {}
      //console.log(JSON.stringify(rows))
    );
  });
}
