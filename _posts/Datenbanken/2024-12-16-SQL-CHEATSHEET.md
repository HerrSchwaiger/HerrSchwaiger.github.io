---
layout: single
title: SQL-Cheatsheet
date: 2025-02-25
permalink: /Datenbanken/sql-cheatsheet
categories:
  - Datenbanken
tags:
  - SQL
words_per_minute: 170
difficulty: "easy"
header:
  teaser: assets/images/cheatsheet.png
  overlay_color: "#000"
  overlay_filter: "0.7"
  overlay_image: /assets/images/cheatsheet.png
toc: "true"
toc_label: Inhalt
---

SQL (Structured Query Language) ist der Schlüssel zur Verwaltung, Abfrage und Manipulation von Daten in relationalen Datenbanken. Ob Anfänger oder erfahrener Entwickler – ein kompaktes Cheatsheet hilft dir, die wichtigsten Befehle und Konzepte jederzeit griffbereit zu haben. Perfekt für den täglichen Gebrauch und als Lernhilfe!

## CREATE DATABASE

Erstellen von Datenbanken.

### Syntax

```sql
CREATE DATABASE databaseName;
```

## CREATE TABLE

Erstellen von Tabellen.

### Syntax
```sql
CREATE TABLE tabellenName (
    spaltenName datentyp,
    spaltenName datentyp,
    ...
);
```

### Fremdschlüssel

Erstellen von Tabellen mit Fremdschlüssel.

```sql
CREATE TABLE tabellenName (
    spaltenName datentyp,
    fk_Spalte datentyp,
    FOREIGN KEY (fk_Spalte) f_tabellenName(ID)
);
```

Die Spalte `fk_Spalte` referenziert nun die Spalte `ID` der Tabelle `f_tabellenName`.

## ALTER TABLE

Verändern der Tabellenstruktur.

### Syntax
```sql
-- Hinzufügen einer Spalte
ALTER TABLE tabellenName
ADD COLUMN spaltenName datentyp;

-- Entfernen einer Spalte
ALTER TABLE tabellenName
DROP COLUMN spaltenName;

-- Ändern einer Spaltendefinition
ALTER TABLE tabellenName
MODIFY COLUMN spaltenName datentyp;
```

## INSERT INTO

Einfügen von Daten.

### Syntax

```sql
INSERT INTO tabellenName (spalte1, spalte2)
VALUES (wert1_1, wert1_2),
       (wert2_1, wert2_2);
```

## DELETE

Löschen von Daten.

### Syntax

```sql
DELETE FROM tabellenName
WHERE bedingung;
```
## UPDATE

Verändern von Daten.

### Syntax

```sql
UPDATE tabellenName
SET spaltenName = wert1
WHERE bedingung;
```

## SELECT

Abrufen von Daten.

### Syntax
```sql
SELECT spalte1, spalte2,...
FROM tabellenName
WHERE bedingung;
```