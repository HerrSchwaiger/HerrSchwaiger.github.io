---
layout: single
title: "SQL-Funktionen und Operatoren"
date: 2025-03-10 00:00:02
permalink: /Datenbanken/SQL-Funktionen/
categories:
  - Datenbanken
tags:
  - SQL
  - Funktionen
difficulty: medium
published: true
header:
    teaser: "assets/images/sql_functions.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/sql_functions.jpg
---

SQL-Funktionen und Operatoren sind grundlegende Werkzeuge, die es ermöglichen, Daten in einer Datenbank zu manipulieren und zu analysieren. Diese Funktionen und Operatoren sind besonders nützlich für die Durchführung von Berechnungen, die Formatierung von Daten und die Extraktion wichtiger Informationen. In diesem Post werden wir einige wichtige SQL-Funktionen und Operatoren in MariaDB erkunden und deren Anwendung anhand von Beispielen veranschaulichen.

### Aliase in SQL

Aliase sind temporäre Namen, die in SQL-Abfragen verwendet werden, um Spalten oder Tabellen umzubenennen. Sie werden mit dem `AS`-Schlüsselwort definiert und verbessern die Lesbarkeit von Abfragen, indem sie komplexen Ausdrücken oder langen Spaltennamen kürzere, aussagekräftige Namen geben.

**Syntax:**

```sql
SELECT Spalte AS Aliasname
FROM Tabellenname;
```

- `Spalte`: Die Spalte, die umbenannt werden soll.
- `Aliasname`: Der neue Name, der in der Ergebnismenge angezeigt wird.

### Beispiel Tabelle

Wir nutzen eine Tabelle `produkte` mit den folgenden Beispieldaten:

| id | name       | preis | bestand | kategorie  |
|----|------------|-------|---------|------------|
| 1  | Laptop     | 999.99| 10      | Elektronik |
| 2  | Smartphone | 599.99| 20      | Elektronik |
| 3  | Tisch      | 149.99| 5       | Möbel      |

### 1. Arithmetische Operatoren: Berechnungen durchführen

Arithmetische Operatoren wie `+`, `-`, `*` und `/` werden verwendet, um mathematische Berechnungen durchzuführen.

#### Beispiel:

```sql
SELECT preis * bestand AS Gesamtwert
FROM produkte;
```

**Erwartete Ausgabe:**

| Gesamtwert |
|-------------|
| 9999.90     |
| 11999.80    |
| 749.95      |

**Erklärung:** Diese Abfrage berechnet den Gesamtwert des Lagerbestands für jedes Produkt. Der Alias `Gesamtwert` benennt die berechnete Spalte um, sodass sie im Ergebnis leichter lesbar ist.

### 2. TIMESTAMPDIFF: Differenz zwischen zwei Datumsangaben berechnen

**Syntax:**

```sql
TIMESTAMPDIFF(unit, datetime_expr1, datetime_expr2)
```

- `unit`: Die Zeiteinheit für die Differenz (z.B. `YEAR`, `MONTH`, `DAY`).
- `datetime_expr1`, `datetime_expr2`: Die Datumsangaben, zwischen denen die Differenz berechnet wird.

**Beschreibung:**

Berechnet die Differenz zwischen zwei Datumsangaben in der angegebenen Zeiteinheit.

#### Beispiel:

```sql
SELECT TIMESTAMPDIFF(YEAR, einfuehrungsdatum, CURDATE()) AS Produktalter
FROM produkte;
```

**Erwartete Ausgabe:**

| Produktalter |
|--------------|
| 2            |
| 1            |
| 3            |

**Erklärung:** Diese Abfrage berechnet das Alter jedes Produkts basierend auf dem Einführungsdatum und dem aktuellen Datum. `CURDATE()` gibt das aktuelle Datum zurück. Der Alias `Produktalter` macht das Ergebnis verständlicher.

### 3. ROUND: Werte runden

**Syntax:**

```sql
ROUND(X), ROUND(X, D)
```

- `X`: Der Wert, der gerundet werden soll.
- `D`: Die Anzahl der Dezimalstellen, auf die gerundet werden soll. Standardmäßig ist `D` 0, wenn nicht angegeben. `D` kann negativ sein, um Ziffern links des Dezimalpunkts zu runden.

**Beschreibung:**

Rundet den Wert `X` auf `D` Dezimalstellen.

#### Beispiel:

```sql
SELECT ROUND(preis, 2) AS GerundeterPreis
FROM produkte;
```

**Erwartete Ausgabe:**

| GerundeterPreis |
|-----------------|
| 1000.00         |
| 600.00          |
| 150.00          |

**Erklärung:** Diese Abfrage rundet den Preis jedes Produkts auf zwei Dezimalstellen. Der Alias `GerundeterPreis` gibt der gerundeten Spalte einen aussagekräftigen Namen.

### 4. CONCAT_WS: Zeichenketten mit Trennzeichen verknüpfen

**Syntax:**

```sql
CONCAT_WS(separator, str1, str2, ...)
```

- `separator`: Das Trennzeichen, das zwischen den Zeichenketten eingefügt wird.
- `str1, str2, ...`: Die Zeichenketten, die verknüpft werden sollen.

**Beschreibung:**

Verknüpft zwei oder mehr Zeichenketten mit einem Trennzeichen dazwischen.

#### Beispiel:

```sql
SELECT CONCAT_WS(' - ', name, kategorie) AS Produktbeschreibung
FROM produkte;
```

**Erwartete Ausgabe:**

| Produktbeschreibung       |
|---------------------------|
| Laptop - Elektronik       |
| Smartphone - Elektronik   |
| Tisch - Möbel             |

**Erklärung:** Diese Abfrage verknüpft den Namen und die Kategorie jedes Produkts zu einer Beschreibung mit einem Bindestrich dazwischen. Der Alias `Produktbeschreibung` macht das Ergebnis leicht verständlich.

## Zusammenfassung

SQL-Funktionen und Operatoren sind leistungsstarke Werkzeuge, die es ermöglichen, Daten in einer Datenbank zu manipulieren und zu analysieren. Mit Funktionen wie `ROUND`, `CONCAT_WS`, `TIMESTAMPDIFF` und arithmetischen Operatoren können Sie komplexe Datenanalysen durchführen und wichtige Informationen extrahieren. Aliase verbessern die Lesbarkeit und Verständlichkeit Ihrer SQL-Abfragen. Diese Funktionen sind unverzichtbar für die effiziente Verwaltung und Analyse von Datenbanken.