import * as SQLite from "expo-sqlite";
global.db = SQLite.openDatabase("db.DebitCredit");

export default function SqlQuery(sqlCode, sqlCompleted, sqlError = "Error") {
  db.transaction((tx) => {
    tx.executeSql(
      sqlCode,
      null,
      () => console.log(sqlCompleted),
      (txObj, error) => console.log(sqlError, error)
    );
  });
}
