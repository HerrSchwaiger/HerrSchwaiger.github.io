---
layout: single
title: "SQL-Funktionen und Operatoren"
date: 2025-03-10 00:00:01
permalink: /Datenbanken/SQL-Funktionen-Easy/
categories:
  - Datenbanken
tags:
  - SQL
  - Funktionen
difficulty: easy
published: true
header:
    teaser: "assets/images/sql_functions_easy.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/sql_functions_easy.jpg
---

SQL-Funktionen und Operatoren helfen uns, Daten in einer Datenbank zu bearbeiten und zu analysieren. Sie machen es leicht, Berechnungen zu machen, Daten zu formatieren und wichtige Informationen zu finden. Hier erklären wir einfache SQL-Funktionen und Operatoren mit Beispielen.

### Aliase in SQL

Aliase sind vorübergehende Namen, die wir in SQL-Abfragen verwenden, um Spalten oder Tabellen umzubenennen. Sie machen unsere Abfragen leichter lesbar.

**Syntax:**

```sql
SELECT Spalte AS NeuerName
FROM Tabelle;
```

- `Spalte`: Die Spalte, die wir umbenennen möchten.
- `NeuerName`: Der neue Name, der in den Ergebnissen angezeigt wird.

### Beispiel Tabelle

Wir verwenden eine Tabelle `produkte` mit einfachen Beispieldaten:

| id | name       | preis | bestand | kategorie  |
|----|------------|-------|---------|------------|
| 1  | Laptop     | 999.99| 10      | Elektronik |
| 2  | Smartphone | 599.99| 20      | Elektronik |
| 3  | Tisch      | 149.99| 5       | Möbel      |

### 1. Arithmetische Operatoren: Einfache Berechnungen

Arithmetische Operatoren wie `+`, `-`, `*` und `/` helfen uns, einfache mathematische Berechnungen zu machen.

#### Beispiel:

```sql
SELECT preis * bestand AS Gesamtwert
FROM produkte;
```

**Erwartete Ausgabe:**

| Gesamtwert |
|------------|
| 9999.90    |
| 11999.80   |
| 749.95     |

**Erklärung:** Diese Abfrage berechnet den Gesamtwert des Lagerbestands für jedes Produkt. Der Alias `Gesamtwert` macht das Ergebnis leichter lesbar.

### 2. ROUND: Werte runden

**Syntax:**

```sql
ROUND(X), ROUND(X, D)
```

- `X`: Der Wert, der gerundet werden soll.
- `D`: Die Anzahl der Dezimalstellen, auf die gerundet werden soll. Wenn nicht angegeben, wird auf ganze Zahlen gerundet.

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

**Erklärung:** Diese Abfrage rundet den Preis jedes Produkts auf zwei Dezimalstellen. Der Alias `GerundeterPreis` gibt der gerundeten Spalte einen verständlichen Namen.

### 3. CONCAT_WS: Zeichenketten mit Trennzeichen verknüpfen

**Syntax:**

```sql
CONCAT_WS(Trennzeichen, str1, str2, ...)
```

- `Trennzeichen`: Das Zeichen, das zwischen den Zeichenketten eingefügt wird.
- `str1, str2, ...`: Die Zeichenketten, die verbunden werden sollen.

**Beschreibung:**

Verbindet zwei oder mehr Zeichenketten mit einem Trennzeichen dazwischen.

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

**Erklärung:** Diese Abfrage verbindet den Namen und die Kategorie jedes Produkts zu einer Beschreibung mit einem Bindestrich dazwischen. Der Alias `Produktbeschreibung` macht das Ergebnis leicht verständlich.

## Zusammenfassung

SQL-Funktionen und Operatoren sind einfache, aber nützliche Werkzeuge, die uns helfen, Daten in einer Datenbank zu bearbeiten und zu analysieren. Mit Funktionen wie `ROUND` und `CONCAT_WS` sowie arithmetischen Operatoren können wir einfache Berechnungen durchführen und Daten formatieren. Aliase machen unsere Abfragen leichter lesbar. Diese Werkzeuge sind wichtig für die einfache Verwaltung und Analyse von Datenbanken.