---
layout: single
title: "CREATE TABLE"
date: 2025-01-16
permalink: /Datenbanken/create-table-easy
categories:
  - Datenbanken
tags:
  - CREATE TABLE
  - SQL
difficulty: "easy"
header:
    teaser:  "assets/images/createTableEasy.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/createTableEasy.png # Hintergrundbild
---

Die SQL-Anweisung `CREATE TABLE` wird verwendet, um Tabellen in einer Datenbank zu erstellen. Dabei spielen zwei wichtige Konzepte eine zentrale Rolle: **PRIMARY KEY** und **FOREIGN KEY**.

---

### `PRIMARY KEY`
Ein `PRIMARY KEY` sorgt dafür, dass jede Zeile in der Tabelle eindeutig identifizierbar ist.

**Beispiel:**
```sql
CREATE TABLE Kunden (
    KundeID INT PRIMARY KEY,
    Name VARCHAR(100)
);
```
- `KundeID` ist der Primärschlüssel und garantiert, dass keine zwei Zeilen die gleiche ID haben.

---

### `FOREIGN KEY`
Ein `FOREIGN KEY` verknüpft zwei Tabellen miteinander und stellt sicher, dass nur existierende Werte aus der referenzierten Tabelle eingefügt werden können.

**Beispiel:**
```sql
CREATE TABLE Bestellungen (
    BestellungID INT PRIMARY KEY,
    KundeID INT,
    BestellDatum DATE,
    FOREIGN KEY (KundeID) REFERENCES Kunden(KundeID)
);
```
- `KundeID` in der Tabelle **Bestellungen** verweist auf `KundeID` in der Tabelle **Kunden**.
- MariaDB erlaubt standardmäßig nicht, einen Kunden zu löschen, wenn er in einer Bestellung referenziert wird.

---

## Zusammenfassung
- **`PRIMARY KEY`**: Eindeutige Identifikation jeder Zeile.
- **`FOREIGN KEY`**: Verknüpfung von Tabellen.

Nutze diese Elemente, um Datenbanken übersichtlich und relational zu gestalten.

