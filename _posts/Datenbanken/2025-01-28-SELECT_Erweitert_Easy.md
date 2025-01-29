---
layout: single
title: "Erweiterte SELECT-Funktionen"
date: 2025-01-28 00:00:01
permalink: /Datenbanken/Select-Erweitert-Easy/
categories:
  - Datenbanken
tags:
  - SQL
  - SELECT
  - ORDER_BY
  - LIMIT
difficulty: easy
header:
    teaser: "assets/images/selectErweitertEasy.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/selectErweitertEasy.png
---

In diesem Beitrag lernen wir die Grundlagen der erweiterten Funktionen von `SELECT` in SQL kennen. Diese Funktionen helfen dabei, Daten gezielt zu filtern, zu sortieren und zu begrenzen.

### 1. Das Sternchen (`*`)
Mit dem Sternchen können Sie alle Spalten einer Tabelle auswählen. Es ist praktisch, aber achten Sie darauf, es nicht bei großen Tabellen zu verwenden, wenn nur wenige Spalten benötigt werden.

#### Beispiel:
```sql
SELECT * FROM kunden;
```
**Erklärung:** Hier werden alle Spalten aus der Tabelle `kunden` ausgewählt.

### 2. `ORDER BY`
Mit `ORDER BY` können Sie die Ergebnisse sortieren – entweder aufsteigend (`ASC`) oder absteigend (`DESC`).

#### Beispiel:
```sql
SELECT * FROM kunden
ORDER BY name ASC;
```
**Erklärung:** Die Kunden werden nach ihrem Namen in aufsteigender Reihenfolge sortiert.

### 3. `LIMIT`
Das Schlüsselwort `LIMIT` begrenzt die Anzahl der zurückgegebenen Ergebnisse.

#### Beispiel:
```sql
SELECT * FROM produkte
LIMIT 3;
```
**Erklärung:** Nur die ersten 3 Produkte werden angezeigt.

### 4. `AND` und `OR`
Mit `AND` und `OR` können Sie mehrere Bedingungen kombinieren, um gezielt Daten auszuwählen.

#### Beispiel mit `AND`:
```sql
SELECT * FROM kunden
WHERE land = 'Deutschland' AND status = 'Aktiv';
```
**Erklärung:** Es werden nur aktive Kunden aus Deutschland angezeigt.

#### Beispiel mit `OR`:
```sql
SELECT * FROM mitarbeiter
WHERE abteilung = 'IT' OR abteilung = 'HR';
```
**Erklärung:** Es werden alle Mitarbeiter aus den Abteilungen IT oder HR zurückgegeben.