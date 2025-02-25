---
layout: single
title: "Aggregatsfunktionen in SQL"
date: 2025-02-24 00:00:01
permalink: /Datenbanken/Aggregatsfunktionen-Easy/
categories:
  - Datenbanken
tags:
  - SQL
  - Aggregatsfunktionen
difficulty: easy
published: false
header:
    teaser: "assets/images/aggregatsfunktionen_Easy.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/aggregatsfunktionen_Easy.png
---

Aggregatsfunktionen in SQL helfen uns, Daten aus einer Tabelle zusammenzufassen. Diese Funktionen sind besonders nützlich, um große Datenmengen zu analysieren und wichtige Kennzahlen herauszufinden. In diesem Post lernen wir die grundlegenden Aggregatsfunktionen in MariaDB kennen und sehen uns einige Beispiele an.

## Grundsätzliche Syntax von Aggregatsfunktionen
Aggregatsfunktionen werden in der `SELECT`-Anweisung verwendet, um die Werte einer Spalte zusammenzufassen. Die grundlegende Syntax sieht so aus:

```sql
SELECT aggregatsfunktion(spaltenname)
FROM tabellenname;
```

- `aggregatsfunktion` gibt an, wie die Daten zusammengefasst werden sollen (z.B. `SUM`, `AVG`, `COUNT`, `MIN`, `MAX`).
- `spaltenname` ist die Spalte, auf die die Aggregatsfunktion angewendet wird.
- `tabellenname` ist die Tabelle, aus der die Daten kommen.

### Beispiel
Angenommen, wir haben eine Tabelle `verkäufe` mit den Spalten `id`, `produkt`, `menge` und `preis`. Um die Gesamtmenge aller verkauften Produkte zu berechnen, können wir die `SUM`-Funktion verwenden:

```sql
SELECT SUM(menge) AS gesamtmenge
FROM verkäufe;
```

Das Ergebnis könnte so aussehen:

| gesamtmenge |
|-------------|
| 150         |

## Erweiterte Funktionen von Aggregatsfunktionen
Neben den grundlegenden Aggregatsfunktionen gibt es auch einige erweiterte Funktionen, die uns helfen, Daten gezielt zu filtern und zusammenzufassen.

### 1. COUNT: Anzahl der Zeilen zählen
Die `COUNT`-Funktion zählt die Anzahl der Zeilen in einer Spalte. Sie kann auch verwendet werden, um die Anzahl der eindeutigen Werte in einer Spalte zu zählen.

#### Beispiel:
```sql
SELECT COUNT(*) AS anzahl_verkäufe
FROM verkäufe;
```
**Erklärung:** Diese Abfrage zählt die Gesamtanzahl der Zeilen in der Tabelle `verkäufe`.

### 2. AVG: Durchschnittswert berechnen
Die `AVG`-Funktion berechnet den Durchschnittswert einer Spalte.

#### Beispiel:
```sql
SELECT AVG(preis) AS durchschnittspreis
FROM verkäufe;
```
**Erklärung:** Diese Abfrage berechnet den durchschnittlichen Preis aller verkauften Produkte.

### 3. MIN und MAX: Minimal- und Maximalwerte ermitteln
Die `MIN`- und `MAX`-Funktionen ermitteln den kleinsten bzw. größten Wert in einer Spalte.

#### Beispiel:
```sql
SELECT MIN(preis) AS min_preis, MAX(preis) AS max_preis
FROM verkäufe;
```
**Erklärung:** Diese Abfrage ermittelt den niedrigsten und höchsten Preis aller verkauften Produkte.

## Zusammenfassung
Aggregatsfunktionen in SQL sind nützliche Werkzeuge, um Daten aus einer Tabelle zusammenzufassen. Mit den grundlegenden Aggregatsfunktionen wie `SUM`, `AVG`, `COUNT`, `MIN` und `MAX` können wir komplexe Datenanalysen durchführen und wichtige Kennzahlen herausfinden.