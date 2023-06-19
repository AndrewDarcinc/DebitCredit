import * as SQLite from "expo-sqlite";
import "./globaldb";
import SqlQuery from "./globaldb";
export default function create_tables() {
  SqlQuery(
    `CREATE TABLE if not exists Bills (
        bill_id integer PRIMARY KEY AUTOINCREMENT not null,
        bill_name text,
        amount float,
        bill_icon text,
        is_archived integer
      );`,
    "Table created: Bills"
  );
  SqlQuery(
    `CREATE TABLE if not exists ExpensesCategories (
        category_id integer PRIMARY KEY AUTOINCREMENT,
        category_name text,
        category_icon text,
        is_archived integer
      );`,
    "Table created: ExpensesCategories"
  );
  SqlQuery(
    `CREATE TABLE if not exists IncomesCategories (
        category_id integer PRIMARY KEY AUTOINCREMENT,
        category_name text,
        category_icon text,
        is_archived integer
    );`,
    "Table created: IncomesCategories"
  );
  SqlQuery(
    `CREATE TABLE if not exists Operations (
        operation_id integer PRIMARY KEY AUTOINCREMENT not null,
        date datetime,
        cost float,
        bill_id integer,
        Expenses_Category_id integer,
        Incomes_Category_id integer,
        FOREIGN KEY (bill_id) REFERENCES Bills(bill_id)
        FOREIGN KEY (Expenses_Category_id) REFERENCES ExpensesCategories(category_id)
        FOREIGN KEY (Incomes_Category_id) REFERENCES IncomesCategories(category_id)
    );`,
    "Table created: Operations"
  );
  SqlQuery(
    `CREATE TABLE if not exists Icons(
    icon_id integer PRIMARY KEY AUTOINCREMENT not null,
    svg text
  );`,
    "Table created: Icons"
  );

  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM sqlite_master where type='table';",
      [],
      (_, { rows }) =>
        rows._array.forEach((el) => {
          console.log(el);
        })
      //console.log(JSON.stringify(rows))
    );
  });
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT bill_id, bill_name, amount FROM Bills;",
      [],
      (_, { rows }) =>
        rows._array.forEach((el) => {
          console.log(el);
        })
      //console.log(JSON.stringify(rows))
    );
  });
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT category_id, category_name, is_archived FROM IncomesCategories;",
      [],
      (_, { rows }) =>
        rows._array.forEach((el) => {
          console.log(el);
        })
      //console.log(JSON.stringify(rows))
    );
  });
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM Operations;",
      [],
      (_, { rows }) =>
        rows._array.forEach((el) => {
          console.log(el);
        })
      //console.log(JSON.stringify(rows))
    );
  });
}
