---
layout: single
title: "Aggregatsfunktionen in SQL"
date: 2025-02-24 00:00:02
permalink: /Datenbanken/Aggregatsfunktionen/
categories:
  - Datenbanken
tags:
  - SQL
  - Aggregatsfunktionen
difficulty: medium
published: false
header:
    teaser: "assets/images/aggregatsfunktionen.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/aggregatsfunktionen.png
---

Aggregatsfunktionen in SQL sind leistungsstarke Werkzeuge, die es ermöglichen, Daten aus einer Tabelle zu aggregieren und zusammenzufassen. Diese Funktionen sind besonders nützlich für die Analyse großer Datensätze und die Extraktion wichtiger Kennzahlen. In diesem Post werden wir die grundlegenden Aggregatsfunktionen in MariaDB erkunden und deren Anwendung anhand von Beispielen veranschaulichen.

## Grundsätzliche Syntax von Aggregatsfunktionen
Aggregatsfunktionen werden in der `SELECT`-Anweisung verwendet und fassen die Werte einer Spalte zusammen. Die grundlegende Syntax lautet:

```sql
SELECT aggregatsfunktion(spaltenname)
FROM tabellenname;
```

- `aggregatsfunktion` gibt die Art der Aggregation an (z.B. `SUM`, `AVG`, `COUNT`, `MIN`, `MAX`).
- `spaltenname` ist die Spalte, auf die die Aggregatsfunktion angewendet wird.
- `tabellenname` ist die Tabelle, aus der die Daten abgerufen werden.

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
Neben den grundlegenden Aggregatsfunktionen bietet SQL auch erweiterte Funktionen, die es ermöglichen, Daten gezielt zu filtern und zu aggregieren.

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
Aggregatsfunktionen in SQL sind leistungsstarke Werkzeuge, die es ermöglichen, Daten aus einer Tabelle zu aggregieren und zusammenzufassen. Mit den grundlegenden Aggregatsfunktionen wie `SUM`, `AVG`, `COUNT`, `MIN` und `MAX` können Sie komplexe Datenanalysen durchführen und wichtige Kennzahlen extrahieren.