---
layout: single
title: "Erweiterte SELECT-Funktionen"
date: 2025-01-28 00:00:02
permalink: /Datenbanken/Select-Erweitert-medium/
categories:
  - Datenbanken
tags:
  - SQL
  - SELECT
  - ORDER_BY
  - LIMIT
difficulty: medium
published: true
header:
    teaser: "assets/images/selectErweitert.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/selectErweitert.png
---

In diesem Beitrag werden wir erweiterte Funktionen von `SELECT` in SQL behandeln, um spezifische Datenabfragen effizienter zu gestalten. Diese Funktionen sind besonders hilfreich, wenn Daten gefiltert, sortiert oder in begrenzten Mengen ausgegeben werden sollen.

## Grundlagen der erweiterten SELECT-Funktionen
Die grundlegende SQL-SELECT-Anweisung wird durch zusätzliche Schlüsselwörter erweitert. Im Fokus stehen:

- **Das Sternchen (`*`)**: Auswahl aller Spalten.
- **ORDER BY**: Sortieren der Ergebnisse.
- **LIMIT**: Begrenzen der Anzahl der zurückgegebenen Ergebnisse.
- Kombinationen mit **AND** und **OR** für flexible und präzise Abfragen.

### 1. Das Sternchen (`*`): Alle Spalten auswählen
Das Sternchen steht für "alle Spalten". Es ermöglicht, alle Spalten einer Tabelle ohne explizite Auflistung der Spaltennamen auszuwählen. Dies ist nützlich, aber sollte mit Bedacht eingesetzt werden, um unnötige Datenmengen zu vermeiden.

#### Beispiel:
```sql
SELECT * FROM kunden;
```
**Erklärung:** Alle Spalten aus der Tabelle `kunden` werden angezeigt.

### 2. `ORDER BY`: Ergebnisse sortieren
Mit `ORDER BY` können Abfragen aufsteigend (`ASC`) oder absteigend (`DESC`) sortiert werden.

#### Syntax:
```sql
SELECT * FROM tabelle
ORDER BY spalte [ASC|DESC];
```

#### Beispiel:
```sql
SELECT * FROM kunden
ORDER BY name ASC;
```
**Erklärung:** Hier werden alle Kunden nach dem Namen in aufsteigender Reihenfolge sortiert.

### 3. `LIMIT`: Ergebnisse begrenzen
`LIMIT` beschränkt die Anzahl der zurückgegebenen Datensätze.
`OFFSET` verschiebt die abgerufenen Zeilen um den abstand.

#### Syntax:
```sql
SELECT * FROM tabelle
LIMIT anzahl OFFSET abstand;
```

#### Beispiel:
```sql
SELECT * FROM produkt
ORDER BY preis ASC
LIMIT 5 OFFSET 5;
```
**Erklärung:** Nur die 6. - 10. günstigsten Produkte werden abgerufen.

### 4. Kombination von `ORDER BY` und `LIMIT`
Die beiden Schlüsselwörter können kombiniert werden, um eine sortierte und begrenzte Ergebnisliste zu erstellen.

#### Beispiel:
```sql
SELECT * FROM bestellungen
ORDER BY datum DESC
LIMIT 10;
```
**Erklärung:** Die letzten 10 Bestellungen (nach Datum absteigend) werden angezeigt.

### 5. Bedingungen mit `AND` und `OR`
Mit `AND` und `OR` können komplexe Filterbedingungen erstellt werden.

#### Syntax:
```sql
SELECT * FROM tabelle
WHERE bedingung1 [AND|OR] bedingung2;
```

#### Beispiel mit `AND`:
```sql
SELECT * FROM kunden
WHERE land = 'Deutschland' AND status = 'Aktiv';
```
**Erklärung:** Es werden nur aktive Kunden aus Deutschland zurückgegeben.

#### Beispiel mit `OR`:
```sql
SELECT * FROM mitarbeiter
WHERE abteilung = 'IT' OR abteilung = 'HR';
```
**Erklärung:** Es werden alle Mitarbeiter aus den Abteilungen IT oder HR zurückgegeben.

## Zusammenfassung
Mit den erweiterten Funktionen von `SELECT` können Sie Ihre Abfragen deutlich flexibler gestalten:

- **Das Sternchen (`*`)** ermöglicht die Auswahl aller Spalten.
- **`ORDER BY`** sortiert Ihre Ergebnisse.
- **`LIMIT`** begrenzt die Anzahl der zurückgegebenen Datensätze.
- **`AND` und `OR`** ermöglichen komplexe Filterbedingungen.