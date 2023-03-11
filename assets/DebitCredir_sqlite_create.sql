CREATE TABLE ExpensesCategories (
	category_id integer PRIMARY KEY AUTOINCREMENT,
	category_name text,
	subcategory_name text,
	subcategory_icon text,
	subcategory_color text
);

CREATE TABLE IncomesCategories (
	category_id integer PRIMARY KEY AUTOINCREMENT,
	category_name text,
	category_icon text,
	category_color text
);

CREATE TABLE Bills (
	bill_id integer PRIMARY KEY AUTOINCREMENT,
	bill_name text,
	amount float,
	bill_icon text,
	bill_color text
);

CREATE TABLE Operations (
	operation_id integer PRIMARY KEY AUTOINCREMENT,
	date datetime,
	cost float,
	bill_id integer,
	Expenses_Category_id integer,
	Incomes_Category_id integer
);





