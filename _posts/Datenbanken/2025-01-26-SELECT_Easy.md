---
layout: single
title: "SELECT"
date: 2025-01-26 00:00:01
permalink: /Datenbanken/SELECT-Easy/
categories:
  - Datenbanken
tags:
  - SQL
  - SELECT
difficulty: easy
published: false
header:
    teaser: "assets/images/selectEasy.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/selectEasy.png
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
