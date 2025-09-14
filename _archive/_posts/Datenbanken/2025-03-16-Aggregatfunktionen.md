---
layout: single
title: "Aggregatfunktionen in SQL"
date: 2025-03-16 00:00:02
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

## Grundsätzliche Syntax von Aggregatfunktionen
Aggregatfunktionen werden in der `SELECT`-Anweisung verwendet und fassen die Werte einer Spalte in einem Wert zusammen. Die grundlegende Syntax lautet:

```sql
SELECT aggregatfunktion(spaltenname)
FROM tabellenname
WHERE bedingung;
```

- `aggregatfunktion` gibt die Art der Aggregation an (z.B. `SUM`, `AVG`, `COUNT`, `MIN`, `MAX`).
- `spaltenname` ist die Spalte, auf die die Aggregatfunktion angewendet wird.
- `tabellenname` ist die Tabelle, aus der die Daten abgerufen werden. 
- `bedingung` ist die Bedingung, nach der die Tabelle gefiltert wird, **bevor** die Aggregatfunktion angewandt wird.

**Vorsicht!**  
Vermeiden Sie diesen häufigen Fehler:

```sql
SELECT spaltenname, aggregatfunktion(spaltenname)
FROM tabellenname;
```

Die Aggregatfunktion gibt nur einen einzigen Wert zurück. MariaDB weiß nicht welcher Wert in `spaltenname` damit korrespondieren soll und gibt einfach den Wert der ersten Zeile aus.

### DISTINCT
Bei jeder der folgenden Aggregatfunktionen kann das Schlüsselwort `DISTINCT` hinzugefügt werden, um doppelte Werte genau einmal einfließen zu lassen:

```sql
SELECT aggregatfunktion(DISTINCT spaltenname)
FROM tabellenname;
```

**Beispiel Tabelle:**  
Ab jetzt nutzen wir eine Tabelle `bestellung` mit den Spalten `id`, `produkt`, `menge` und `preis`.

## 1. COUNT
Die `COUNT`-Funktion zählt die Anzahl der Zeilen. 

**Beispiel Tabelle:**
```sql
SELECT COUNT(*) AS anzahlBestellung
FROM bestellung
WHERE Menge > 2;
```
**Erklärung:** Diese Abfrage zählt die Anzahl der Bestellungen mit einer `Menge` > 2.

{: .notice--info}
Mit `COUNT(spaltenname)` lässt sich die Anzahl der Zeilen zählen die nicht `NULL` in der Spalte `spaltenname` ist.

## 2. AVG
Die `AVG`-Funktion berechnet den Durchschnittswert einer Spalte. Sie kann nur auf **numerische Werte** angewendet werden.

**Beispiel:**
```sql
SELECT AVG(preis) AS durchschnittsPreis
FROM bestellung;
```
**Erklärung:** Diese Abfrage berechnet den durchschnittlichen Preis aller verkauften Produkte.

{: .notice--info}
Die `AVG`-Funktion ignoriert alle `NULL` Werte.

## 3. SUM
Die `SUM`-Funktion berechnet die Summe einer Spalte. Sie kann nur auf numerische Werte angewendet werden.

**Beispiel:**
```sql
SELECT SUM(menge) AS gesamtMenge
FROM bestellung;
```
**Erklärung:** Diese Abfrage berechnet die gesamte Anzahl an bestellten Produkten.

{: .notice--info}
Die `SUM`-Funktion ignoriert alle `NULL` Werte.

## 4. MIN und MAX
Die `MIN`- und `MAX`-Funktionen ermitteln den kleinsten bzw. größten Wert in einer Spalte.

**Beispiel:**
```sql
SELECT MIN(preis) AS minPreis, MAX(preis) AS maxPreis
FROM bestellung;
```
**Erklärung:** Diese Abfrage ermittelt den niedrigsten und höchsten Preis aller verkauften Produkte.

{: .notice--info}
Die `MIN`- und `MAX`-Funktionen können auch auf nicht numerische Werte wie `VARCHAR`'s angewendet werden.

## Zusammenfassung
Aggregatfunktionen in SQL sind leistungsstarke Werkzeuge, die es ermöglichen, Daten aus einer Tabelle zu aggregieren und zusammenzufassen. Mit den grundlegenden Aggregatfunktionen wie `SUM`, `AVG`, `COUNT`, `MIN` und `MAX` können Sie komplexe Datenanalysen durchführen und wichtige Kennzahlen extrahieren.