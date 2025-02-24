---
layout: single
title: "SELECT"
date: 2025-01-28 00:00:03
permalink: /Datenbanken/SELECT-Hard/
categories:
  - Datenbanken
tags:
  - SQL
  - SELECT
  - ORDER_BY
  - LIMIT
difficulty: hard
published: true
header:
    teaser: "assets/images/selectErweitertHard.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/selectErweitertHard.png
---

The `SELECT` statement in SQL is a foundational command used to retrieve data from a database. While the basics of `SELECT` are straightforward, mastering its advanced features is essential for crafting efficient and powerful queries. This post will dive deeper into its capabilities, focusing on advanced filtering and introducing the `LIMIT` clause for controlling result sets.

## Basic Syntax of SELECT
The basic structure of a `SELECT` query looks like this:

```sql
SELECT column_name1, column_name2, ...
FROM table_name;
```

- `SELECT` specifies the columns you want to retrieve.
- `FROM` indicates the table where the data resides.

### Example
If we have a table `customers` with the columns `id`, `name`, `city`, and `age`, a query to fetch names and cities would look like this:

```sql
SELECT name, city
FROM customers;
```

The result might be:

| name          | city      |
|---------------|-----------|
| John Smith    | New York  |
| Jane Doe      | Chicago   |

## Advanced Filtering with WHERE
The `WHERE` clause is used to filter records based on specific conditions. This section will cover more complex comparisons.

### Comparison Operators
The `WHERE` clause supports several comparison operators:

| Operator | Description       | Example                     |
|----------|-------------------|-----------------------------|
| `=`      | Equals            | `city = 'Chicago'`         |
| `<>`     | Not equals        | `city <> 'Chicago'`        |
| `<`      | Less than         | `age < 30`                 |
| `>`      | Greater than      | `age > 30`                 |
| `<=`     | Less than or equal | `age <= 25`               |
| `>=`     | Greater than or equal | `age >= 18`             |

#### Example
To find customers from Chicago:

```sql
SELECT name, city, age
FROM customers
WHERE city = 'Chicago'
```

## Limiting the Number of Results with LIMIT
The `LIMIT` clause is used to control the number of rows returned by a query. This is particularly useful when working with large datasets or when you want to preview data.

### Syntax
```sql
SELECT column_name1, column_name2, ...
FROM table_name
LIMIT number_of_rows;
```

- `LIMIT` specifies the maximum number of rows to return.

### Example
To retrieve only the first 3 customers from the `customers` table:

```sql
SELECT name, city
FROM customers
LIMIT 3;
```

The result might look like this:

| name          | city      |
|---------------|-----------|
| John Smith    | New York  |
| Jane Doe      | Chicago   |
| Alice Johnson | Boston    |

## Advanced SQL SELECT Functions
This post explores advanced SQL `SELECT` functions, providing a deeper understanding of how to optimize data retrieval with sorting, limiting, and combining conditions effectively.

### 1. The Asterisk (`*`)
The asterisk is a shorthand to select all columns in a table. While convenient, it can lead to inefficiencies if you don’t need all columns.

#### Example:
```sql
SELECT * FROM customers;
```
**Explanation:** This query retrieves all columns from the `customers` table.

### 2. `ORDER BY`: Sorting Results
`ORDER BY` allows you to sort query results by one or more columns, in ascending (`ASC`) or descending (`DESC`) order.

#### Syntax:
```sql
SELECT * FROM table
ORDER BY column [ASC|DESC];
```

#### Example:
```sql
SELECT * FROM customers
ORDER BY last_name DESC;
```
**Explanation:** Customers are sorted by their last names in descending order.

### 3. `LIMIT`: Restricting Results
`LIMIT` is used to constrain the number of rows returned by a query.

#### Syntax:
```sql
SELECT * FROM table
LIMIT number;
```

#### Example:
```sql
SELECT * FROM products
LIMIT 10;
```
**Explanation:** Only the first 10 rows from the `products` table are returned.

### 4. Combining `ORDER BY` and `LIMIT`
These two keywords can be combined to retrieve a specific subset of sorted data.

#### Example:
```sql
SELECT * FROM orders
ORDER BY order_date DESC
LIMIT 5;
```
**Explanation:** The 5 most recent orders (sorted by date) are returned.

### 5. Combining Conditions with `AND` and `OR`
`AND` and `OR` are used to combine conditions in the `WHERE` clause for more precise filtering.

#### Syntax:
```sql
SELECT * FROM table
WHERE condition1 [AND|OR] condition2;
```

**Truth-Table**

| a | b | a AND b | a OR b |
|---|---|---------|--------|
|True | True | True | True |
|True | False | False | True |
|False | True | False | True |
|False | False | False | False |

#### Example with `AND`:
```sql
SELECT * FROM customers
WHERE country = 'USA' AND status = 'Active';
```
**Explanation:** This query returns all active customers located in the USA.

#### Example with `OR`:
```sql
SELECT * FROM employees
WHERE department = 'Finance' OR department = 'Marketing';
```
**Explanation:** Employees from either the Finance or Marketing departments are returned.

#### Nested conditions

More advanced conditions can be created by using parentheses:
```sql
SELECT * FROM table
WHERE (x AND y) OR (z AND y);
```

#### Example
```sql
SELECT * FROM product
WHERE (price < 200 AND price > 100) OR (price < 100 AND sale = TRUE);
```

To select all products with a price between 100 and 200 or less than 100 but currently in sale.

## Summary
Advanced SQL `SELECT` functions provide greater control over data queries:

- **The asterisk (`*`)** retrieves all columns but should be used judiciously.
- **`ORDER BY`** sorts results for better readability.
- **`LIMIT`** focuses queries on a specific number of results.
- **`AND` and `OR`** combine conditions to handle complex queries.