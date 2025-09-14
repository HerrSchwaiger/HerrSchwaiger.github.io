---
layout: single
title: "INSERT INTO"
date: 2025-01-20 00:00:03
permalink: /Datenbanken/Insert-Into-Hard/
categories: Datenbanken
tags:
- SQL
- INSERT INTO
difficulty: hard
published: true
header:
    teaser: "assets/images/insert_into_hard.jpg"
    overlay_color: "#000" # Background overlay color
    overlay_filter: "0.7" # Transparency of the overlay
    overlay_image: /assets/images/insert_into_hard.jpg # Background image
---

The SQL command `INSERT INTO` is a core element for adding data to a table. This article provides an in-depth guide, including advanced options like the use of `SET` for assigning values to columns.

---

### Basic Syntax of INSERT INTO
The basic structure of the `INSERT INTO` command is as follows:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3);
```

- **table_name**: The name of the table to insert data into.
- **column1, column2, column3**: The names of the columns receiving values.
- **value1, value2, value3**: The corresponding values for the columns.

### Example
Consider a table `Customer` with columns `id`, `name`, and `email`:

```sql
INSERT INTO Customer (id, name, email)
VALUES (1, 'John Doe', 'john.doe@example.com');
```

This command adds a new row to the `Customer` table.

---

### Using INSERT INTO with SET
An alternative to specifying column names and values in parentheses is to use the `SET` syntax:

```sql
INSERT INTO table_name
SET column1 = value1, column2 = value2, column3 = value3;
```

#### Example:

```sql
INSERT INTO Customer
SET id = 2, name = 'Jane Smith', email = 'jane.smith@example.com';
```

This approach can make the query more readable, especially when dealing with long lists of columns and values.
**But:** `SET` only allows to insert one row at a time.
---

### Multiple Row Insertion
To insert multiple rows in one command, use the following syntax:

```sql
INSERT INTO table_name (column1, column2, column3)
VALUES 
    (value1a, value2a, value3a),
    (value1b, value2b, value3b);
```

#### Example:

```sql
INSERT INTO Customer (id, name, email)
VALUES 
    (3, 'Alice Brown', 'alice.brown@example.com'),
    (4, 'Bob White', 'bob.white@example.com');
```

This is more efficient than executing separate `INSERT` commands for each row.

---

### Key Points to Remember
1. **Column Order Matters**: Ensure the order of columns matches the order of values.
2. **Handling Default Values**: If a column has a default value, it can be omitted in the `INSERT INTO` statement.
3. **NULL Values**: Be cautious when inserting `NULL` values into columns that do not allow them.

#### Example with Default Values:

```sql
INSERT INTO Customer (name, email)
VALUES ('Charlie Grey', 'charlie.grey@example.com');
```

Here, the `id` column will automatically be assigned a default value (e.g., auto-increment).

---

### Common Errors
1. **Constraints Violations**: Attempting to insert a duplicate value into a primary key column will fail.

2. **Data Type Mismatches**: Ensure values match the column data types.

---

### Conclusion
The `INSERT INTO` command is highly versatile, with options to simplify data insertion using `SET`, multiple rows, and default values. Mastery of these techniques will greatly enhance your ability to interact with SQL databases effectively.
