---
layout: single
title: "CREATE TABLE"
date: 2025-01-16 00:00:03
permalink: /Datenbanken/create-table-hard/
categories:
  - Datenbanken
tags:
  - CREATE TABLE
  - SQL
difficulty: "hard"
header:
    teaser:  "assets/images/createTableHard.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/createTableHard.png # Hintergrundbild
---

The `CREATE TABLE` statement in SQL is fundamental for defining the structure of a database. Beyond basic table creation, advanced features like `PRIMARY KEY`, `UNIQUE KEY`, `NOT NULL`, `AUTO INCREMENT`,  `CREATE TABLE LIKE`, and `CREATE TABLE SELECT` enable developers to efficiently design complex database schemas and manage data with greater flexibility.

---

## Core Features of `CREATE TABLE`

A typical `CREATE TABLE` statement defines the table structure, specifying columns, their data types, and constraints:

```sql
CREATE TABLE ExampleTable (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(255) UNIQUE
);
```

### Key Concepts:
1. **`PRIMARY KEY`**: Ensures that each row in the table is uniquely identifiable.
2. **`NOT NULL`**: Prevents a column from containing `NULL` values.
3. **`AUTO INCREMENT`**: Automatically generates unique numeric values for a column.
4. **`UNIQUE KEY`**: Ensures all values in a column or combination of columns are distinct.

---

## `PRIMARY KEY`
A `PRIMARY KEY` is a unique identifier for each row in a table. It combines the constraints of `UNIQUE KEY` and `NOT NULL`.

### Example:
```sql
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL
);
```
- The `CustomerID` column must contain unique, non-NULL values.

---

## `NOT NULL`
The `NOT NULL` constraint ensures that a column cannot have a `NULL` value.

### Example:
```sql
CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Department VARCHAR(50) NOT NULL
);
```
- Both `Name` and `Department` must have valid values.

---

## `AUTO INCREMENT`
The `AUTO INCREMENT` attribute generates unique numeric values for a column automatically when a new row is inserted.

### Example:
```sql
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL
);
```
- `ProductID` values start from 1 and increment with each new row.

---

## `UNIQUE KEY`
A `UNIQUE KEY` ensures that all values in a column or combination of columns are distinct across all rows in the table.

### Example:
```sql
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) UNIQUE,
    Username VARCHAR(100),
    UNIQUE (Username, Email)
);
```
- The `Email` column must contain unique values.
- The combination of `Username` and `Email` must also be unique.
---

## `CREATE TABLE LIKE`
The `CREATE TABLE LIKE` statement creates a new table with the same structure as an existing table, including column definitions and indexes, but without copying data.

### Syntax:
```sql
CREATE TABLE NewTable LIKE ExistingTable;
```

### Example:
```sql
CREATE TABLE Archive LIKE Orders;
```
- `Archive` replicates the structure of `Orders` but remains empty.

### Benefits:
- Simplifies schema replication for backup or testing purposes.
- Ensures consistency without manually redefining columns.

---

## `CREATE TABLE SELECT`
The `CREATE TABLE SELECT` statement allows for creating a new table and simultaneously populating it with data from an existing table based on a query.

### Syntax:
```sql
CREATE TABLE NewTable AS SELECT * FROM ExistingTable WHERE condition;
```

### Example:
```sql
CREATE TABLE OldOrders AS 
SELECT * FROM Orders WHERE OrderDate < '2025-01-01';
```
- This creates `OldOrders`, containing all rows from `Orders` where the order date is before January 1, 2025.

### Limitations:
- Constraints like `PRIMARY KEY`, `UNIQUE KEY`, and `FOREIGN KEY` are not copied.
- Indexes must be added manually if needed.

---

## Summary
- **`PRIMARY KEY`**: Ensures each row has a unique, non-NULL identifier.
- **`NOT NULL`**: Prevents columns from containing `NULL` values.
- **`AUTO INCREMENT`**: Automatically generates unique numbers for rows.
- **`UNIQUE KEY`**: Enforces uniqueness for one or more columns.
- **`CREATE TABLE LIKE`**: Duplicates table structure without data.
- **`CREATE TABLE SELECT`**: Creates and populates a table based on a query.

By mastering these features, you can design robust and efficient database systems for complex requirements. Refer to the official SQL or MariaDB documentation for further insights.

