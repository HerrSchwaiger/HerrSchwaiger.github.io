---
layout: single
title: "SQL-Datentypen: Basic"
date: 2024-11-29
permalink: /Datenbanken/datentypen
categories: 
  - Datenbanken
tags: 
  - SQL-Datentypen
  - SQL
difficulty: "easy"
words_per_minute: 170

header:
    teaser:  "assets/images/datentypen.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/datentypen.png # Hintergrundbild
---

SQL (Structured Query Language) bietet eine Vielzahl von Datentypen, um Daten strukturiert und effizient zu speichern. In diesem Beitrag betrachten wir die wichtigsten Datentypen für numerische, textuelle, logische und zeitbezogene Daten: **INT**, **DECIMAL**, **CHAR**, **VARCHAR**, **BOOLEAN**, und **DATE**. Für jeden Datentyp erklären wir, was er darstellt, wie er deklariert wird und welche Parameter angepasst werden können.

---

## 1. INT (Ganzzahlen)

### **Was wird dargestellt?**
Der Datentyp `INT` wird verwendet, um ganze Zahlen (positive oder negative) zu speichern. Typische Anwendungsfälle sind IDs, Zähler oder numerische Kategorien.

### **Deklaration in SQL**
```sql
column_name INT;
```

### **Parameter und Besonderheiten**
- `INT` hat einen festen Speicherbereich: 4 Bytes (32 Bit).
- **Wertebereich:** 
  - Standardmäßig: `-2.147.483.648` bis `2.147.483.647`.
  - Bei `UNSIGNED` (nur positive Werte): `0` bis `4.294.967.295`.
- **Beispiele:**
  - `INT` für IDs oder Zähler.

---

## 2. DECIMAL (Dezimalzahlen)

### **Was wird dargestellt?**
`DECIMAL` (oder `NUMERIC`) wird verwendet, um Zahlen mit einer festen Anzahl von Nachkommastellen zu speichern. Typische Anwendungen sind Preise, Gehälter oder Messwerte.

### **Deklaration in SQL**
```sql
column_name DECIMAL(precision, scale);
```

### **Parameter**
- **`precision`**: Maximale Anzahl aller Stellen (vor und nach dem Komma).
- **`scale`**: Anzahl der Nachkommastellen.
- **Beispiele:** 
  - `DECIMAL(10, 2)`: Maximal 10 Stellen, davon 2 Nachkommastellen (`12345678.90`).
  - `DECIMAL(5, 0)`: Maximal 5 ganze Stellen, keine Nachkommastellen.

### **Besonderheiten**
- Speicherbedarf hängt von der Präzision ab.
- Präziser als `FLOAT` oder `DOUBLE`, da Rundungsfehler vermieden werden.

---

## 3. CHAR (Feste Zeichenkette)

### **Was wird dargestellt?**
`CHAR` speichert Zeichenketten mit fester Länge. Es eignet sich für Daten mit einer konstanten Länge wie Ländercodes (`DE`, `US`) oder Abteilungsnamen (`HR`, `IT`).

### **Deklaration in SQL**
```sql
column_name CHAR(length);
```

### **Parameter**
- **`length`**: Die feste Anzahl an Zeichen (max. 255).
- **Beispiele:**
  - `CHAR(3)`: Speichert genau 3 Zeichen (`'ABC'`, `'HR '`). Unbenutzte Stellen werden mit Leerzeichen aufgefüllt.
  - `CHAR(10)` für Telefonnummern mit fixer Länge.

### **Besonderheiten**
- Feste Länge macht `CHAR` schneller für Abfragen als `VARCHAR`, wenn die Länge gleich bleibt.
- Platzverschwendung, wenn Daten kürzer als die definierte Länge sind.

---

## 4. VARCHAR (Variable Zeichenkette)

### **Was wird dargestellt?**
`VARCHAR` speichert Zeichenketten mit variabler Länge. Es wird oft für längere Texte verwendet, deren Länge nicht festgelegt ist, wie Namen, Adressen oder E-Mails.

### **Deklaration in SQL**
```sql
column_name VARCHAR(length);
```

### **Parameter**
- **`length`**: Maximale Anzahl an Zeichen (1 bis 65.535, abhängig von der maximalen Zeilengröße).
- **Beispiele:**
  - `VARCHAR(255)` für Namen oder URLs.
  - `VARCHAR(320)` für E-Mail-Adressen.

### **Besonderheiten**
- Speichereffizienter als `CHAR` bei variablen Zeicherketten-Längen.
- Erfordert zusätzlichen Speicher für die Länge der Zeichenkette.

---

## 5. BOOLEAN (Logische Werte)

### **Was wird dargestellt?**
`BOOLEAN` repräsentiert logische Werte (`TRUE`/`FALSE`). Es wird häufig für Flags oder Statusangaben verwendet.

### **Deklaration in SQL**
```sql
column_name BOOLEAN;
```

### **Parameter**
- Keine Parameter

### **Besonderheiten**
- Kann auch abgekürzt als `BOOL` verwendet werden
- In MariaDB sind `BOOL` und `BOOLEAN` eigentlich ein `tinyint(1)`. Dabei ist 0 false und alle anderen Werte sind true. `TRUE` und `FALSE` sind synonyme für `1` und `0`.

---

## 6. DATE (Datum)

### **Was wird dargestellt?**
`DATE` speichert ein Kalenderdatum im Format `YYYY-MM-DD`. Es wird verwendet für Geburtsdaten, Buchungen oder Ereignisdaten.

### **Deklaration in SQL**
```sql
column_name DATE;
```

### **Parameter**
- Keine Parameter erforderlich.
- **Unterstützte Werte:**
  - `0001-01-01` bis `9999-12-31` (je nach SQL-Implementierung).

### **Besonderheiten**
- Für Zeitstempel kann `DATETIME` oder `TIMESTAMP` verwendet werden.
- Ermöglicht einfache Berechnungen (z. B. Alter berechnen mit `DATEDIFF`).

---

## Vergleich der Datentypen

| **Datentyp** | **Typische Daten**             | **Parameter**                         | **Beispiel**               |
|--------------|--------------------------------|---------------------------------------|----------------------------|
| `INT`        | IDs, Zähler, Ganzzahlen        | `UNSIGNED` (nur positive Werte)       | `INT` für eine Zimmernummer|
| `DECIMAL`    | Preise, Messwerte              | `precision, scale`                    | `DECIMAL(10,2)` für Gehalt |
| `CHAR`       | Kürzel, Codes                 | Feste Länge                            | `CHAR(3)` für `HR`, `DE`   |
| `VARCHAR`    | Namen, Texte                  | Maximale Länge                         | `VARCHAR(255)` für Namen   |
| `BOOLEAN`    | Wahr/Falsch, Statusflags      | Keine                                  | `BOOLEAN` für Verfügbarkeit|
| `DATE`       | Kalenderdatum                 | Keine                                  | `DATE` für Geburtsdatum    |

---

## Fazit

Die Wahl des richtigen Datentyps in SQL ist entscheidend für die Effizienz und Genauigkeit der Datenbank. Jeder Datentyp hat seine Stärken und ist für spezifische Anwendungen optimiert. Verstehen Sie die Anforderungen Ihrer Daten, um die optimale Balance zwischen Speicherplatz und Funktionalität zu finden.

