---
layout: single
title: SQL-Cheatsheet
date: 2024-12-16
permalink: /Datenbanken/sql-cheatsheet
categories:
  - Datenbanken
tags:
  - Basic
  - SQL
words_per_minute: 170
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

### Beispiel

Der folgende Befehl erstellt eine neue Datenbank namens testDb;

```sql
CREATE DATABASE testDb;
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

### Beispiel
Der folgende Befehl erstellt eine neue Tabelle namens **Person** mit den Spalten ID, Vorname und Geburtsdatum.

```sql
CREATE TABLE Person (
    ID INTEGER,
    Vorname VARCHAR(50),
    Geburtsdatum DATE
)
```

Eine Erklärung zu den SQL-Datentypen finden Sie unter dem Tag [Datentypen](/tags/#sql-datentypen)
