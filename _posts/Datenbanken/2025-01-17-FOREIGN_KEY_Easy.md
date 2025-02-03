---
layout: single
title: "FOREIGN KEY"
date: 2025-01-17 00:00:01
permalink: /Datenbanken/foreign-key-easy
categories:
  - Datenbanken
tags:
  - FOREIGN KEY
  - SQL
difficulty: "easy"
header:
    teaser:  "assets/images/ForeignKeyEasy.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/ForeignKeyEasy.png # Hintergrundbild
---

Ein `FOREIGN KEY` (Fremdschlüssel) stellt eine Beziehung zwischen zwei Tabellen her und gewährleistet, dass Werte in einer Spalte nur existierende Werte aus einer anderen Tabelle enthalten. Dies verbessert die Datenintegrität und vermeidet inkonsistente oder ungültige Daten.

---

## Verwendung eines `FOREIGN KEY`
Ein Fremdschlüssel wird in der untergeordneten Tabelle definiert und referenziert eine Spalte (meistens einen Primärschlüssel) einer übergeordneten Tabelle.

### **Beispiel: Kunden und Bestellungen**
```sql
CREATE TABLE Kunden (
    KundeID INT PRIMARY KEY,
    Name VARCHAR(100)
);
```
- Die Tabelle **Kunden** enthält eine eindeutige `KundeID`, die als `PRIMARY KEY` dient.

```sql
CREATE TABLE Bestellungen (
    BestellungID INT PRIMARY KEY,
    KundeID INT,
    BestellDatum DATE,
    FOREIGN KEY (KundeID) REFERENCES Kunden(KundeID)
);
```
- `KundeID` in **Bestellungen** ist ein Fremdschlüssel und referenziert `KundeID` in **Kunden**.

---

## Vorteile von `FOREIGN KEY`
1. **Datenintegrität**: Stellt sicher, dass nur existierende Werte in die Fremdschlüsselspalte eingefügt werden.
2. **Referenzielle Integrität**: Verhindert ungewollte Datenlöschungen oder -aktualisierungen.

---

## Fazit
Ein `FOREIGN KEY` sorgt für saubere Datenstrukturen und sichert die Beziehungen zwischen Tabellen. Er ist essenziell für relationale Datenbanken, um konsistente und referenzielle Integrität zu gewährleisten.
