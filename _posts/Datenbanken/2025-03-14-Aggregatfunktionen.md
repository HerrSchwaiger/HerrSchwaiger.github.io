---
layout: single
title: "Aggregatfunktionen in SQL"
date: 2025-03-14 00:00:02
permalink: /Datenbanken/Aggregatfunktionen/
categories:
  - Datenbanken
tags:
  - SQL
  - Aggregatfunktionen
difficulty: medium
published: true
header:
    teaser: "assets/images/aggregate_functions.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/aggregate_functions.jpg
---

Aggregatfunktionen in SQL sind leistungsstarke Werkzeuge, die es ermöglichen, Daten aus einer Tabelle zu aggregieren und zusammenzufassen. Diese Funktionen sind besonders nützlich für die Analyse großer Datensätze und die Extraktion wichtiger Kennzahlen. In diesem Post werden wir die grundlegenden Aggregatfunktionen in MariaDB erkunden und deren Anwendung anhand von Beispielen veranschaulichen.

## Grundsätzliche Syntax von Aggregatfunktionen
Aggregatfunktionen werden in der `SELECT`-Anweisung verwendet und fassen die Werte einer Spalte zusammen. Die grundlegende Syntax lautet:

```sql
SELECT aggregatfunktion(spaltenname)
FROM tabellenname;
```

- `aggregatfunktion` gibt die Art der Aggregation an (z.B. `SUM`, `AVG`, `COUNT`, `MIN`, `MAX`).
- `spaltenname` ist die Spalte, auf die die Aggregatfunktion angewendet wird.
- `tabellenname` ist die Tabelle, aus der die Daten abgerufen werden.

### Beispiel Tabelle
Ab jetzt nutzen wir eine Tabelle `bestellung` mit den Spalten `id`, `produkt`, `menge` und `preis`. 

### 1. COUNT: Anzahl der Zeilen zählen
Die `COUNT`-Funktion zählt die Anzahl der Zeilen in einer Spalte. 

#### Beispiel:
```sql
SELECT COUNT(*) AS anzahlBestellung
FROM bestellung;
```
**Erklärung:** Diese Abfrage zählt die Gesamtanzahl der Zeilen in der Tabelle `bestellung`.

Da bei `COUNT(*)` auch `NULL`-Werte miteinbezogen werden, kann dies durch eine explizite Angabe einer Spalte verhindert werden:

```sql
SELECT COUNT(preis) AS anzahlBestellung
FROM bestellung;
```
**Erklärung:** Diese Abfrage zählt die Gesamtanzahl der Zeilen in der Tabelle `bestellung` die keinen `NULL` Wert in der Spalte `preis` haben.

### 2. AVG: Durchschnittswert berechnen
Die `AVG`-Funktion berechnet den Durchschnittswert einer Spalte. Sie kann nur auf numerische Werte angewendet werden.

#### Beispiel:
```sql
SELECT AVG(preis) AS durchschnittspreis
FROM bestellung;
```
**Erklärung:** Diese Abfrage berechnet den durchschnittlichen Preis aller verkauften Produkte.

### 3. SUM: Summe berechnen
Die `SUM`-Funktion berechnet die Summe einer Spalte. Sie kann nur auf numerische Werte angewendet werden.

#### Beispiel:
```sql
SELECT SUM(menge) AS gesamtmenge
FROM bestellung;
```
**Erklärung:** Diese Abfrage berechnet die gesamte Anzahl an bestellten Produkten.

### 4. MIN und MAX: Minimal- und Maximalwerte ermitteln
Die `MIN`- und `MAX`-Funktionen ermitteln den kleinsten bzw. größten Wert in einer Spalte.

#### Beispiel:
```sql
SELECT MIN(preis) AS minPreis, MAX(preis) AS maxPreis
FROM bestellung;
```
**Erklärung:** Diese Abfrage ermittelt den niedrigsten und höchsten Preis aller verkauften Produkte.

## Zusammenfassung
Aggregatfunktionen in SQL sind leistungsstarke Werkzeuge, die es ermöglichen, Daten aus einer Tabelle zu aggregieren und zusammenzufassen. Mit den grundlegenden Aggregatfunktionen wie `SUM`, `AVG`, `COUNT`, `MIN` und `MAX` können Sie komplexe Datenanalysen durchführen und wichtige Kennzahlen extrahieren.