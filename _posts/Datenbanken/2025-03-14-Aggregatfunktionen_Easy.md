---
layout: single
title: "Aggregatfunktionen in SQL"
date: 2025-03-11 00:00:01
permalink: /Datenbanken/Aggregatfunktionen-Easy/
categories:
  - Datenbanken
tags:
  - SQL
  - Aggregatfunktionen
difficulty: easy
published: true
header:
    teaser: "assets/images/aggregate_functions_easy.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/aggregate_functions_easy.jpg

toc: true
toc_label: "Inhalt"
---


Aggregatfunktionen in SQL sind leistungsstarke Werkzeuge, die es ermöglichen, Daten aus einer Tabelle zu aggregieren bzw. zusammenzufassen. Diese Funktionen sind besonders nützlich für die Analyse großer Datensätze und die Extraktion wichtiger Kennzahlen. In diesem Post werden wir die grundlegenden Aggregatfunktionen in MariaDB erkunden und deren Anwendung anhand von Beispielen veranschaulichen.

<style>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
<figure>
  <img src="/assets/images/Aggregierung.png" width="300" class="center"/>
  <figcaption>Fig1: Aggregatfunktionen fassen mehrere Werte zu einem einzigen Wert zusammen.</figcaption>
</figure>

**Beispiel Tabelle:**  
Ab jetzt nutzen wir eine Tabelle `bestellung` mit den Spalten `id`, `produkt`, `menge` und `preis`.

## 1. COUNT
Die `COUNT`-Funktion zählt die Anzahl der Zeilen. 

**Beispiel Tabelle:**
```sql
SELECT COUNT(*) AS anzahlBestellung
FROM bestellung;
```
**Erklärung:** Diese Abfrage zählt die Anzahl der Bestellungen.


## 2. AVG
Die `AVG`-Funktion berechnet den Durchschnittswert einer Spalte. Sie kann nur auf **numerische Werte** angewendet werden.

**Beispiel:**
```sql
SELECT AVG(preis) AS durchschnittspreis
FROM bestellung;
```
**Erklärung:** Diese Abfrage berechnet den durchschnittlichen Preis aller verkauften Produkte.

## 3. SUM
Die `SUM`-Funktion berechnet die Summe einer Spalte. Sie kann nur auf numerische Werte angewendet werden.

**Beispiel:**
```sql
SELECT SUM(menge) AS gesamtmenge
FROM bestellung;
```
**Erklärung:** Diese Abfrage berechnet die gesamte Anzahl an bestellten Produkten.

## 4. MIN und MAX
Die `MIN`- und `MAX`-Funktionen ermitteln den kleinsten bzw. größten Wert in einer Spalte.

**Beispiel:**
```sql
SELECT MIN(preis) AS minPreis, MAX(preis) AS maxPreis
FROM bestellung;
```
**Erklärung:** Diese Abfrage ermittelt den niedrigsten und höchsten Preis aller verkauften Produkte.

## Zusammenfassung
Aggregatfunktionen in SQL sind leistungsstarke Werkzeuge, die es ermöglichen, Daten aus einer Tabelle zu aggregieren und zusammenzufassen. Mit den grundlegenden Aggregatfunktionen wie `SUM`, `AVG`, `COUNT`, `MIN` und `MAX` können Sie komplexe Datenanalysen durchführen und wichtige Kennzahlen extrahieren.