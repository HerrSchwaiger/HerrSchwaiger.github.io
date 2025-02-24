---
layout: single
title: "SELECT"
date: 2025-01-28 00:00:01
permalink: /Datenbanken/SELECT/
categories:
  - Datenbanken
tags:
  - SQL
  - SELECT
  - ORDER_BY
  - LIMIT
difficulty: easy
published: true
header:
    teaser: "assets/images/selectEasy.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/selectEasy.png"
---

Der `SELECT`-Befehl in SQL dient dazu, Daten aus einer Datenbank abzufragen. Hier lernst du die einfachste Form der Abfrage kennen.

## Grundsätzliche Syntax von SELECT
Die grundlegende Syntax von `SELECT` lautet:

```sql
SELECT spaltenname1, spaltenname2, ...
FROM tabellenname;
```

- `SELECT` gibt an, welche Spalten der Tabelle abgefragt werden sollen.
- `FROM` gibt die Tabelle an, aus der die Daten abgerufen werden.

### Beispiel
Angenommen, wir haben eine Tabelle `kunden` mit den Spalten `name` und `stadt`. Um die Nachnamen und Städte aller Kunden abzurufen, kannst du folgende Abfrage verwenden:

```sql
SELECT name, stadt
FROM kunden;
```

Das Ergebnis könnte so aussehen:

| name          | stadt      |
|---------------|------------|
| Müller        | Berlin     |
| Mustermann    | München    |

## Ergebnisse einschränken mit WHERE
Mit der `WHERE`-Klausel kannst du Ergebnisse filtern. Die Syntax lautet:

```sql
SELECT spaltenname1, spaltenname2, ...
FROM tabellenname
WHERE bedingung;
```

### Beispiel
Um alle Kunden aus Berlin anzuzeigen, kannst du folgende Abfrage verwenden:

```sql
SELECT name, stadt
FROM kunden
WHERE stadt = 'Berlin';
```

Das Ergebnis könnte so aussehen:

| name          | stadt   |
|---------------|---------|
| Müller        | Berlin  |

## Erweiterte Funktionen von SELECT
In diesem Beitrag lernen wir die Grundlagen der erweiterten Funktionen von `SELECT` in SQL kennen. Diese Funktionen helfen dabei, Daten gezielt zu filtern, zu sortieren und zu begrenzen.

### 1. Das Sternchen (`*`)
Mit dem Sternchen können Sie alle Spalten einer Tabelle auswählen. Es ist praktisch, aber achten Sie darauf, es nicht bei großen Tabellen zu verwenden, wenn nur wenige Spalten benötigt werden.

#### Beispiel:
```sql
SELECT * FROM kunden;
```
**Erklärung:** Hier werden alle Spalten aus der Tabelle `kunden` ausgewählt.

### 2. WHERE mit `AND` und `OR`
Mit `AND` und `OR` können Sie mehrere Bedingungen kombinieren, um gezielt Daten auszuwählen.

**Wahrheitstabelle**

| a | b | a AND b | a OR b |
|---|---|---------|--------|
|True | True | True | True |
|True | False | False | True |
|False | True | False | True |
|False | False | False | False |

#### Beispiel mit `AND`:
```sql
SELECT * FROM kunde
WHERE land = 'Deutschland' AND status = 'Aktiv';
```
**Erklärung:** Es werden nur aktive Kunden aus Deutschland angezeigt.

#### Beispiel mit `OR`:
```sql
SELECT * FROM mitarbeiter
WHERE abteilung = 'IT' OR abteilung = 'HR';
```
**Erklärung:** Es werden alle Mitarbeiter aus den Abteilungen IT oder HR zurückgegeben.

### 3. `ORDER BY`
Mit `ORDER BY` können Sie die Ergebnisse sortieren – entweder aufsteigend (`ASC`) oder absteigend (`DESC`).

#### Beispiel:
```sql
SELECT * FROM kunden
ORDER BY name ASC;
```
**Erklärung:** Die Kunden werden nach ihrem Namen in aufsteigender Reihenfolge sortiert.

### 4. `LIMIT`
Das Schlüsselwort `LIMIT` begrenzt die Anzahl der zurückgegebenen Ergebnisse.
Das Schlüsselwort `OFFSET` kann dabei hinzugefügt werden, um nicht die ersten Ergebnisse sondern die nach dem OFFSET abzurufen.

#### Beispiel:
```sql
SELECT * FROM produkt
ORDER BY preis ASC
LIMIT 3 OFFSET 1;
```
**Erklärung:** Nur die 2. bis 4. günstigsten Produkte werden angezeigt.

## Fazit
**SELECT** Befehle müssen immer nach der **gleichen Reihenfolge** zusammengesetzt werden:

```sql
SELECT Spalten FROM Tabelle
WHERE Bedingung
ORDER BY Spalte
LIMIT MaxAusgabe OFFSET WirdUebersprungen
```