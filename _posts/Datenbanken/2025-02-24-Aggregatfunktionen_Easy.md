---
layout: single
title: "Aggregatfunktionen in SQL"
date: 2025-02-24 00:00:01
permalink: /Datenbanken/Aggregatfunktionen-Easy/
categories:
  - Datenbanken
tags:
  - SQL
  - Aggregatfunktionen
difficulty: easy
published: true
header:
    teaser: "assets/images/Aggregatfunktionen_Easy.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/Aggregatfunktionen_Easy.png
---

Aggregatfunktionen in SQL helfen uns, Daten aus einer Tabelle zusammenzufassen. Diese Funktionen sind besonders nützlich, um große Datenmengen zu analysieren und wichtige Kennzahlen herauszufinden. In diesem Post lernen wir die grundlegenden Aggregatfunktionen in MariaDB kennen und sehen uns einige Beispiele an.

## Grundsätzliche Syntax von Aggregatfunktionen
Aggregatfunktionen werden in der `SELECT`-Anweisung verwendet, um die Werte einer Spalte zusammenzufassen. Die grundlegende Syntax sieht so aus:

```sql
SELECT aggregatfunktion(spaltenname)
FROM tabellenname;
```

- `aggregatfunktion` gibt an, wie die Daten zusammengefasst werden sollen (z.B. `SUM`, `AVG`, `COUNT`, `MIN`, `MAX`).
- `spaltenname` ist die Spalte, auf die die Aggregatfunktion angewendet wird.
- `tabellenname` ist die Tabelle, aus der die Daten kommen.

### Beispiel Tabelle
Ab jetzt nutzen wir eine Tabelle `bestellung` mit den Spalten `id`, `produkt`, `menge` und `preis`. 

## Erweiterte Funktionen von Aggregatfunktionen
Neben den grundlegenden Aggregatfunktionen gibt es auch einige erweiterte Funktionen, die uns helfen, Daten gezielt zu filtern und zusammenzufassen.

### 1. COUNT: Anzahl der Zeilen zählen
Die `COUNT`-Funktion zählt die Anzahl der Zeilen in einer Spalte. 
#### Beispiel:
```sql
SELECT COUNT(*) AS anzahlBestellung
FROM bestellung;
```
**Erklärung:** Diese Abfrage zählt die Gesamtanzahl der Zeilen in der Tabelle `bestellung`.

Um alle unterschiedlichen Werte einer Spalte zu zählen, muss das Keyword `DISTINCT` hinzugefügt werden:
```sql
SELECT COUNT(DISTINCT produkt)
FROM bestellung
```
**Erklärung:** Diese Abfrage zählt die Gesamtzahl aller unterschiedlichen Produkte in der Tabelle `bestellung`.

### 2. AVG: Durchschnittswert berechnen
Die `AVG`-Funktion berechnet den Durchschnittswert einer Spalte. Sie kann nur auf Zahlen angewendet werden.

#### Beispiel:
```sql
SELECT AVG(preis) AS durchschnittspreis
FROM bestellung;
```
**Erklärung:** Diese Abfrage berechnet den durchschnittlichen Preis aller bestellten Produkte.

### 3. SUM: Summe berechnen
Die `SUM`-Funktion berechnet die Summe einer Spalte. Sie kann nur auf Zahlen angewendet werden.

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
**Erklärung:** Diese Abfrage ermittelt den niedrigsten und höchsten Preis aller Bestellungen.

## Zusammenfassung
Aggregatfunktionen in SQL sind nützliche Werkzeuge, um Daten aus einer Tabelle zusammenzufassen. Mit den grundlegenden Aggregatfunktionen wie `SUM`, `AVG`, `COUNT`, `MIN` und `MAX` können wir komplexe Datenanalysen durchführen und wichtige Kennzahlen herausfinden.