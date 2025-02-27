---
layout: single
title: "Aggregate Functions in SQL"
date: 2025-02-24 00:00:03
permalink: /Datenbanken/Aggregatfunktionen-Hard/
categories:
  - Datenbanken
tags:
  - SQL
  - Aggregatfunktionen
difficulty: hard
published: true
header:
    teaser: "assets/images/aggregatfunktionen_Hard.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/aggregatfunktionen_Hard.png
---

Aggregate functions in SQL are powerful tools that allow you to aggregate and summarize data from a table. These functions are particularly useful for analyzing large datasets and extracting key metrics. In this post, we will explore the fundamental aggregate functions in MariaDB and illustrate their usage with examples.

## Basic Syntax of Aggregate Functions
Aggregate functions are used in the `SELECT` statement to summarize the values of a column. The basic syntax is:

```sql
SELECT aggregate_function(column_name)
FROM table_name;
```

- `aggregate_function` specifies the type of aggregation (e.g., `SUM`, `AVG`, `COUNT`, `MIN`, `MAX`).
- `column_name` is the column on which the aggregate function is applied.
- `table_name` is the table from which the data is retrieved.

### Example table
From now on we use a table named `order`, which has the columns `id`, `product`, `quantity` and `price`.

### 1. COUNT: Counting Rows
The `COUNT` function counts the number of rows in a column.

#### Example:
```sql
SELECT COUNT(*) AS totalOrder
FROM order;
```
**Explanation:** This query counts the total number of rows in the `order` table.

Using `COUNT(DISTINCT column)`, we can count unique values:

```sql
SELECT COUNT(DISTINCT product) AS uniqueProducts
FROM order;
```
**Explanation:** This query counts the number of distinct products in the `order` table.

### 2. AVG: Calculating the Average Value
The `AVG` function calculates the average value of a column. It can only be applied to numeric values.

#### Example:
```sql
SELECT AVG(price) AS averagePrice
FROM order;
```
**Explanation:** This query calculates the average price of all sold products.

#### Example with Condition:
To calculate the percentage of "smartphone" in order we can transform the varchar into a numeric value by using a basic condition:

```sql
SELECT AVG(product = "smartphone") AS percentageOfSmartphones
FROM order;
```
**Explanation:** This query filters only female customers and calculates their average order price.

### 3. SUM: Calculating the Total
The `SUM` function calculates the sum of a column. It can only be applied to numeric values.

#### Example:
```sql
SELECT SUM(quantity) AS totalQuantity
FROM order;
```
**Explanation:** This query calculates the total quantity of ordered products.

### 4. MIN and MAX: Finding Minimum and Maximum Values
The `MIN` and `MAX` functions retrieve the smallest and largest value in a column.

#### Example:
```sql
SELECT MIN(price) AS minPrice, MAX(price) AS maxPrice
FROM order;
```
**Explanation:** This query finds the lowest and highest price among all sold products.

## Summary
Aggregate functions in SQL are essential tools for summarizing and analyzing data. With functions like `SUM`, `AVG`, `COUNT`, `MIN`, and `MAX`, you can perform complex data analysis and extract meaningful insights.

