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
        bill_color text
      );`,
    "DB created"
  );
  SqlQuery(
    `CREATE TABLE if not exists ExpensesCategories (
        category_id integer PRIMARY KEY AUTOINCREMENT not null,
        category_name text,
        subcategory_name text,
        subcategory_icon text,
        subcategory_color text
      );`,
    "DB created"
  );
  SqlQuery(
    `CREATE TABLE if not exists IncomesCategories (
        category_id integer PRIMARY KEY AUTOINCREMENT not null,
        category_name text,
        category_icon text,
        category_color text
    );`,
    "DB created"
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
    "DB created"
  );

  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM sqlite_master where type='table';",
      [],
      (_, { rows }) => console.log(JSON.stringify(rows))
    );
  });
}
