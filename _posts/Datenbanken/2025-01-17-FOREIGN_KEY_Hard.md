---
layout: single
title: "FOREIGN KEY"
date: 2025-01-17 00:00:03
permalink: /Datenbanken/foreign-key-hard
categories:
  - Datenbanken
tags:
  - FOREIGN KEY
  - SQL
difficulty: "hard"
header:
    teaser:  "assets/images/foreign_key_hard.jpg"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/foreign_key_hard.jpg # Hintergrundbild
---

A `FOREIGN KEY` is a critical component of relational databases, ensuring that relationships between tables remain valid. It enforces **referential integrity**, preventing orphaned records and maintaining data consistency.

---

## Understanding Referential Integrity
Referential integrity is a set of rules that ensures consistency in relationships between tables. It guarantees:
1. **Foreign key values must match primary key values in the referenced table** – You cannot insert a value that does not exist.
2. **Updates and deletions must not leave orphaned records** – When a referenced record is modified or deleted, related records must be handled appropriately.

**Example of a referential integrity violation:**
```sql
INSERT INTO Orders (OrderID, CustomerID, OrderDate) 
VALUES (1, 999, '2025-02-01');
```
- If `CustomerID = 999` does not exist in the `Customers` table, the database will reject this insert.

---

## Implementing a `FOREIGN KEY` with Referential Integrity
### **Example: Customers and Orders**
```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100)
);
```

```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) 
    ON DELETE SET NULL 
    ON UPDATE CASCADE
);
```
- `ON DELETE SET NULL`: If a referenced customer is deleted, `CustomerID` in `Orders` is set to `NULL` rather than being invalid.
- `ON UPDATE CASCADE`: If a `CustomerID` changes, it updates in all related rows.

---

## Referential Integrity Enforcement Mechanisms
Different databases handle referential integrity constraints in various ways:

| Option           | Effect on Delete/Update of Referenced Row |
|-----------------|------------------------------------------|
| `CASCADE`       | Deletes/updates all related rows.       |
| `SET NULL`      | Sets foreign key values to `NULL`.      |
| `RESTRICT`      | Prevents deletion/update (default).     |
| `NO ACTION`     | Same as `RESTRICT` unless explicitly overridden. |

---

## Summary
A `FOREIGN KEY` enforces **referential integrity**, ensuring valid relationships between tables. Proper configuration of **ON DELETE** and **ON UPDATE** options helps maintain data consistency while preventing issues like orphaned records.

