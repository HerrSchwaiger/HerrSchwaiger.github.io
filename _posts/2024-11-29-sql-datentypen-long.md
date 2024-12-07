---
layout: single
title: "SQL-Datentypen: Für Entwickler"
date: 2024-11-29
permalink: /Datenbanken/datentypen_long
categories: 
  - Datenbanken
tags: 
  - Advanced
  - SQL-Datentypen
header:
    teaser:  "assets/images/datentypen2.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/datentypen2.png # Hintergrundbild
---

Datenbanken sind das Herzstück moderner Anwendungen, und die korrekte Wahl von Datentypen in SQL ist entscheidend für die Performance, Skalierbarkeit und Genauigkeit der gespeicherten Daten. In diesem Beitrag betrachten wir die wichtigsten SQL-Datentypen: **INT**, **DECIMAL**, **CHAR**, **VARCHAR**, **BOOLEAN** und **DATE**. Neben einer Einführung in die Funktionalitäten der einzelnen Datentypen werden auch ihre Vor- und Nachteile sowie mögliche Anwendungsszenarien erläutert.

Der Datentyp **INT** wird verwendet, um ganze Zahlen zu speichern. Er ist ideal für Anwendungen, bei denen mit Zählern, IDs oder numerischen Kategorien gearbeitet wird. **INT** belegt 4 Bytes Speicher und kann sowohl positive als auch negative Werte aufnehmen, wobei der Bereich durch das Attribut **UNSIGNED** erweitert werden kann. Damit eignet sich **INT** hervorragend für Primärschlüssel oder Zähler. 
**Deklaration:** 
```sql
column_name INT
```
Zusätzlich gibt es Varianten wie **TINYINT** (1 Byte) für kleine Werte oder **BIGINT** (8 Bytes) für sehr große Zahlen, die je nach Anforderung eingesetzt werden können.

Wann immer exakte Zahlen mit Nachkommastellen erforderlich sind, wie bei Preisen oder Gehältern, ist der Datentyp **DECIMAL** die beste Wahl. Anders als Gleitkomma-Datentypen wie **FLOAT** vermeidet **DECIMAL** Rundungsfehler und bietet feste Genauigkeit. Die Anzahl der Stellen vor und nach dem Komma wird durch die Parameter **precision** und **scale** festgelegt, was eine präzise Steuerung ermöglicht. 
**Deklaration:**
```sql
column_name DECIMAL(precision, scale)
```
Ein typisches Beispiel ist `DECIMAL(10, 2)`, das Zahlen bis zu 10 Stellen speichern kann, von denen zwei für Nachkommastellen reserviert sind, wie `12345678.90`. Der Speicherbedarf variiert je nach Präzision.

Der Datentyp **CHAR** ist optimiert für kurze Zeichenfolgen mit einer festen Länge. Dies macht ihn effizient bei konstanten Daten wie Kürzeln oder Codes. Unbenutzte Stellen werden automatisch mit Leerzeichen aufgefüllt, was **CHAR** im Vergleich zu variablen Datentypen wie **VARCHAR** für bestimmte Anwendungen performanter macht.
**Deklaration:**
```sql
column_name CHAR(length)
```
Ein Beispiel ist `CHAR(3)`, das genau drei Zeichen speichert. Typische Einsatzgebiete sind Länderkürzel wie `DE` oder `US`.

Im Gegensatz zu **CHAR** speichert **VARCHAR** Zeichenketten mit variabler Länge, was es ideal für Daten wie Namen oder E-Mails macht. Der maximale Speicherplatz wird durch den **length**-Parameter definiert, jedoch wird nur die tatsächlich genutzte Länge belegt.
**Deklaration:**
```sql
column_name VARCHAR(length)
```
Ein Beispiel ist `VARCHAR(255)`, das bis zu 255 Zeichen aufnehmen kann. **VARCHAR** ist effizienter bei variablen Daten, jedoch nicht so performant wie **CHAR** bei konstanten Längen.

Mit **BOOLEAN** können logische Werte wie `TRUE` oder `FALSE` gespeichert werden. Dieser Datentyp eignet sich für Statusinformationen oder Entscheidungslogik, z. B. ob ein Zimmer verfügbar ist.
**Deklaration:**
```sql
column_name BOOLEAN
```
In vielen SQL-Dialekten, wie MySQL, wird **BOOLEAN** intern als **TINYINT(1)** gespeichert, wobei `0` für `FALSE` und `1` für `TRUE` steht.

Mit **DATE** lassen sich Kalenderdaten wie Geburtstage oder Buchungsdaten speichern. Der Datentyp unterstützt Werte im Format `YYYY-MM-DD` und ermöglicht einfache Berechnungen wie die Altersbestimmung über Differenzen.
**Deklaration:**
```sql
column_name DATE
```
Die unterstützten Werte reichen je nach SQL-Implementierung von `0001-01-01` bis `9999-12-31`.

Die Wahl der richtigen Datentypen ist entscheidend, um eine performante und gut skalierbare Datenbank zu gestalten. Ob für einfache Ganzzahlen, präzise Dezimalwerte oder komplexe Zeichenketten – jeder Datentyp hat seinen spezifischen Anwendungsbereich. Mit einem tiefen Verständnis der Datentypen können Entwickler sicherstellen, dass ihre Datenbank sowohl effizient als auch flexibel bleibt.