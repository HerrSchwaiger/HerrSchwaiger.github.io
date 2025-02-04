---
layout: single
title: "SELECT"
date: 2025-01-26 00:00:03
permalink: /Datenbanken/SELECT-Hard/
categories:
  - Datenbanken
tags:
  - SQL
  - SELECT
difficulty: hard
published: false
header:
    teaser: "assets/images/selectHard.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/selectHard.png
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
| `!=`     | Not equals        | `city != 'Chicago'`        |
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

## Conclusion
The `SELECT` statement, combined with the `WHERE` clause and the `LIMIT` keyword, provides powerful tools to extract and control data efficiently.
