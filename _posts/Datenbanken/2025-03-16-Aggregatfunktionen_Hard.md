---
layout: single
title: "Aggregate Functions in SQL"
date: 2025-03-16 00:00:03
permalink: /Datenbanken/Aggregatfunktionen-Hard/
categories:
  - Datenbanken
tags:
  - SQL
  - Aggregatfunktionen
difficulty: hard
published: true
header:
    teaser: "assets/images/aggregate_functions_hard.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/aggregate_functions_hard.jpg

toc: true
---

Aggregate functions in SQL are powerful tools that allow you to aggregate or summarize data from a table. These functions are particularly useful for analyzing large datasets and extracting key metrics. In this post, we will explore the basic aggregate functions in MariaDB and illustrate their application with examples.

<style>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
<figure>
  <img src="/assets/images/Aggregierung.png" width="300" class="center"/>
  <figcaption>Fig1: Aggregate functions summarize multiple values to just a single one.</figcaption>
</figure>

## Basic Syntax of Aggregate Functions
Aggregate functions are used in the `SELECT` statement and summarize the values of a column into a single value. The basic syntax is:

```sql
SELECT aggregate_function(column_name)
FROM table_name
WHERE condition;
```

- `aggregate_function` specifies the type of aggregation (e.g., `SUM`, `AVG`, `COUNT`, `MIN`, `MAX`).
- `column_name` is the column to which the aggregate function is applied.
- `table_name` is the table from which the data is retrieved.
- `condition` is the condition by which the table is filtered **before** the aggregate function is applied.

**Caution!**
Avoid this common mistake:

```sql
SELECT column_name, aggregate_function(column_name)
FROM table_name;
```

The aggregate function returns only a single value. MariaDB does not know which value in `column_name` should correspond to it and simply returns the value of the first row.

### DISTINCT
The `DISTINCT` keyword can be added to any of the following aggregate functions to include each duplicate value only once:

```sql
SELECT aggregate_function(DISTINCT column_name)
FROM table_name;
```

**Example Table:**  
From now on, we will use a table `order` with the columns `id`, `product`, `quantity` and `price`.

## 1. COUNT
The `COUNT` function counts the number of rows in the table or a column.

**Example Table:**
```sql
SELECT COUNT(*) AS orderAmount
FROM order
WHERE quantity > 2;
```
**Explanation:** This query counts the number of orders with a `quantity` > 2.

{: .notice--info}
`COUNT(column_name)` counts the number of rows that are not `NULL` in the specified column.

## 2. AVG
The `AVG` function calculates the average value of a column. It can only be applied to **numeric values**.

**Example:**
```sql
SELECT AVG(price) AS averagePrice
FROM order;
```
**Explanation:** This query calculates the average price of all sold products.

{: .notice--info}
The `AVG` function ignores all `NULL` values.

## 3. SUM
The `SUM` function calculates the sum of a column. It can only be applied to numeric values.

**Example:**
```sql
SELECT SUM(quantity) AS totalQuantity
FROM order;
```
**Explanation:** This query calculates the total quantity of ordered products.

{: .notice--info}
The `SUM` function ignores all `NULL` values.

## 4. MIN and MAX
The `MIN` and `MAX` functions determine the smallest and largest values in a column, respectively.

**Example:**
```sql
SELECT MIN(price) AS minPrice, MAX(price) AS maxPrice
FROM order;
```
**Explanation:** This query determines the lowest and highest prices of all sold products.

{: .notice--info}
The `MIN` and `MAX` functions can also be applied to non-numeric values such as `VARCHAR`s.

`NULL` values are generally omitted in the `MIN` and `MAX` function. If the provided column is empty or has only `NULL` values, the result will be `NULL`.

## Summary
Aggregate functions in SQL are powerful tools that allow you to aggregate and summarize data from a table. With basic aggregate functions like `SUM`, `AVG`, `COUNT`, `MIN`, and `MAX`, you can perform complex data analyses and extract key metrics.