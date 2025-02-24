---
layout: single
title: "Aggregate Functions in SQL"
date: 2025-02-24 00:00:03
permalink: /Datenbanken/Aggregatsfunktionen-Hard/
categories:
  - Datenbanken
tags:
  - SQL
  - Aggregatsfunktionen
difficulty: hard
published: true
header:
    teaser: "assets/images/aggregatsfunktionen_Hard.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/aggregatsfunktionen_Hard.png
---

Aggregate functions in SQL are powerful tools that allow you to summarize and aggregate data from a table. These functions are particularly useful for analyzing large datasets and extracting key metrics. In this post, we will delve into the advanced capabilities of aggregate functions in MariaDB and illustrate their usage with examples.

## Basic Syntax of Aggregate Functions
Aggregate functions are used in the `SELECT` statement to aggregate the values of a column. The basic syntax is:

```sql
SELECT aggregate_function(column_name)
FROM table_name;
```

- `aggregate_function` specifies the type of aggregation (e.g., `SUM`, `AVG`, `COUNT`, `MIN`, `MAX`).
- `column_name` is the column to which the aggregate function is applied.
- `table_name` is the table from which the data is retrieved.

### Example
Suppose we have a table `sales` with the columns `id`, `product`, `quantity`, and `price`. To calculate the total quantity of all sold products, we can use the `SUM` function:

```sql
SELECT SUM(quantity) AS total_quantity
FROM sales;
```

The result might look like this:

| total_quantity |
|----------------|
| 150            |

## Advanced Aggregate Functions
Besides the basic aggregate functions, SQL also offers advanced functions that allow you to filter and aggregate data more effectively.

### 1. COUNT: Counting the Number of Rows
The `COUNT` function counts the number of rows in a column. It can also be used to count the number of distinct values in a column.

#### Example:
```sql
SELECT COUNT(*) AS number_of_sales
FROM sales;
```
**Explanation:** This query counts the total number of rows in the `sales` table.

### 2. AVG: Calculating the Average Value
The `AVG` function calculates the average value of a column.

#### Example:
```sql
SELECT AVG(price) AS average_price
FROM sales;
```
**Explanation:** This query calculates the average price of all sold products.

### 3. MIN and MAX: Finding Minimum and Maximum Values
The `MIN` and `MAX` functions find the smallest and largest values in a column, respectively.

#### Example:
```sql
SELECT MIN(price) AS min_price, MAX(price) AS max_price
FROM sales;
```
**Explanation:** This query finds the lowest and highest prices of all sold products.

## Conclusion
Aggregate functions in SQL are powerful tools that allow you to summarize and aggregate data from a table. With the basic aggregate functions like `SUM`, `AVG`, `COUNT`, `MIN`, and `MAX`, you can perform complex data analyses and extract key metrics.