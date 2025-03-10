---
layout: single
title: "SQL Functions and Operators"
date: 2025-03-10 00:00:03
permalink: /Datenbanken/SQL-Funktionen-Hard/
categories:
  - Datenbanken
tags:
  - SQL
  - Funktionen
difficulty: hard
published: true
header:
    teaser: "assets/images/sql_functions_hard.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/sql_functions_hard.jpg
---

SQL functions and operators are fundamental tools that enable the manipulation and analysis of data within a database. These functions and operators are particularly useful for performing calculations, formatting data, and extracting important information. In this post, we will explore some essential SQL functions and operators in MariaDB and demonstrate their application through examples.

### Aliases in SQL

Aliases are temporary names used in SQL queries to rename columns or tables. They are defined using the `AS` keyword and improve query readability by providing shorter, more meaningful names for complex expressions or long column names.

**Syntax:**

```sql
SELECT Column AS AliasName
FROM TableName;
```

- `Column`: The column to be renamed.
- `AliasName`: The new name displayed in the result set.

### Example Table

We will use a `products` table with the following sample data:

| id | name       | price | stock | category  |
|----|------------|-------|-------|-----------|
| 1  | Laptop     | 999.99| 10    | Electronics|
| 2  | Smartphone | 599.99| 20    | Electronics|
| 3  | Table      | 149.99| 5     | Furniture |

### 1. Arithmetic Operators: Performing Calculations

Arithmetic operators such as `+`, `-`, `*`, and `/` are used to perform mathematical calculations.

#### Example:

```sql
SELECT price * stock AS TotalValue
FROM products;
```

**Expected Output:**

| TotalValue |
|------------|
| 9999.90    |
| 11999.80   |
| 749.95     |

**Explanation:** This query calculates the total value of the stock for each product. The alias `TotalValue` renames the calculated column for better readability in the result.

### 2. TIMESTAMPDIFF: Calculate the Difference Between Two Dates

**Syntax:**

```sql
TIMESTAMPDIFF(unit, datetime_expr1, datetime_expr2)
```

- `unit`: The unit of time for the difference (e.g., `YEAR`, `MONTH`, `DAY`).
- `datetime_expr1`, `datetime_expr2`: The date expressions between which the difference is calculated.

**Description:**

Calculates the difference between two date expressions in the specified unit of time.

#### Example:

```sql
SELECT TIMESTAMPDIFF(YEAR, launch_date, CURDATE()) AS ProductAge
FROM products;
```

**Expected Output:**

| ProductAge |
|------------|
| 2          |
| 1          |
| 3          |

**Explanation:** This query calculates the age of each product based on the launch date and the current date. The alias `ProductAge` makes the result more understandable.

### 3. ROUND: Rounding Values

**Syntax:**

```sql
ROUND(X), ROUND(X, D)
```

- `X`: The value to be rounded.
- `D`: The number of decimal places to round to. Defaults to 0 if not specified. `D` can be negative to round digits to the left of the decimal point.

**Description:**

Rounds the value `X` to `D` decimal places.

#### Example:

```sql
SELECT ROUND(price, 2) AS RoundedPrice
FROM products;
```

**Expected Output:**

| RoundedPrice |
|--------------|
| 1000.00      |
| 600.00       |
| 150.00       |

**Explanation:** This query rounds the price of each product to two decimal places. The alias `RoundedPrice` gives the rounded column a meaningful name.

### 4. CONCAT_WS: Concatenate Strings with a Separator

**Syntax:**

```sql
CONCAT_WS(separator, str1, str2, ...)
```

- `separator`: The separator to insert between strings.
- `str1, str2, ...`: The strings to concatenate.

**Description:**

Concatenates two or more strings with a specified separator between them.

#### Example:

```sql
SELECT CONCAT_WS(' - ', name, category) AS ProductDescription
FROM products;
```

**Expected Output:**

| ProductDescription       |
|--------------------------|
| Laptop - Electronics     |
| Smartphone - Electronics|
| Table - Furniture        |

**Explanation:** This query concatenates the name and category of each product into a description with a hyphen separator. The alias `ProductDescription` makes the result more understandable.

## Summary

SQL functions and operators are powerful tools that enable the manipulation and analysis of data within a database. With functions like `ROUND`, `CONCAT_WS`, `TIMESTAMPDIFF`, and arithmetic operators, you can perform complex data analyses and extract important information. Aliases improve the readability and understandability of your SQL queries. These functions are essential for the efficient management and analysis of databases.