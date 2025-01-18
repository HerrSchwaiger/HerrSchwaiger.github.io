---
layout: single
title: "CREATE TABLE"
date: 2025-01-16
permalink: /Datenbanken/create-table
categories:
  - Datenbanken
tags:
  - CREATE TABLE
  - SQL
difficulty: "medium"
header:
    teaser:  "assets/images/createTable.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/createTable.png # Hintergrundbild
---
Die SQL-Anweisung `CREATE TABLE` ist eine der grundlegendsten Operationen, um eine Datenbankstruktur aufzubauen. Mit ihr werden Tabellen erstellt, die später Daten aufnehmen können. In diesem Beitrag beschäftigen wir uns mit vier wichtigen Konzepten: **PRIMARY KEY**, **AUTO INCREMENT**, **FOREIGN KEY** und **NOT NULL**. Diese Elemente sind essenziell, um Daten konsistent und relational zu speichern.

---

## Syntax
Ein einfaches Beispiel für die Erstellung einer Tabelle sieht wie folgt aus:

```sql
CREATE TABLE BeispielTabelle (
    ID INT,
    Name VARCHAR(100)
);
```

### Wichtige Elemente
1. **Spaltendefinition**: Jede Spalte hat einen Namen und einen Datentyp.
2. **Constraints**: Einschränkungen wie `PRIMARY KEY`, `NOT NULL` oder `FOREIGN KEY` sorgen dafür, dass die Daten konsistent bleiben.

---

## `PRIMARY KEY`
Ein `PRIMARY KEY` ist eine eindeutige Kennung für jede Zeile in einer Tabelle. Es darf keine doppelten Werte in der Spalte geben, und der Wert darf nicht `NULL` sein.

### Beispiel:
```sql
CREATE TABLE Kunden (
    KundeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100)
);
```
In diesem Beispiel ist `KundeID` der Primärschlüssel. Es stellt sicher, dass jeder Kunde eine eindeutige ID hat.

---

## `AUTO INCREMENT`
Das Schlüsselwort `AUTO INCREMENT` wird verwendet, um automatisch einen neuen Wert zu generieren, wenn eine Zeile eingefügt wird. Es wird häufig mit `PRIMARY KEY` kombiniert.

### Beispiel:
```sql
CREATE TABLE Produkte (
    ProduktID INT AUTO_INCREMENT PRIMARY KEY,
    ProduktName VARCHAR(100),
    Preis DECIMAL(10, 2)
);
```

Wenn ein neuer Datensatz eingefügt wird, erhöht sich `ProduktID` automatisch um 1.

### Einfügen von Daten:
```sql
INSERT INTO Produkte (ProduktName, Preis) 
VALUES ('Laptop', 999.99);
```
Die `ProduktID` wird automatisch generiert.

---

## `NOT NULL`
Das Schlüsselwort `NOT NULL` stellt sicher, dass eine Spalte keinen `NULL`-Wert enthalten kann. Es wird verwendet, um sicherzustellen, dass wichtige Felder immer ausgefüllt sind.

### Beispiel:
```sql
CREATE TABLE Mitarbeiter (
    MitarbeiterID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Abteilung VARCHAR(50) NOT NULL
);
```
In diesem Beispiel müssen sowohl der Name als auch die Abteilung jedes Mitarbeiters angegeben werden.

---

## `FOREIGN KEY`
Ein `FOREIGN KEY` definiert eine Beziehung zwischen zwei Tabellen, indem er auf den `PRIMARY KEY` einer anderen Tabelle verweist. Dies stellt sicher, dass die Daten konsistent und relational bleiben.

### Beispiel:
Zwei Tabellen: **Bestellungen** und **Kunden**.

```sql
CREATE TABLE Kunden (
    KundeID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE Bestellungen (
    BestellungID INT AUTO_INCREMENT PRIMARY KEY,
    KundeID INT,
    BestellDatum DATE,
    FOREIGN KEY (KundeID) REFERENCES Kunden(KundeID)
);
```

- Die Tabelle **Bestellungen** referenziert die Tabelle **Kunden** über `KundeID`.
- Standardmäßig erlaubt MariaDB keine Löschung eines Datensatzes in der referenzierten Tabelle (z. B. `Kunden`), wenn dieser noch in einer anderen Tabelle referenziert wird (z. B. `Bestellungen`). Um dieses Verhalten anzupassen, können Optionen wie `ON DELETE CASCADE` oder `ON DELETE SET NULL` verwendet werden.

---

## Zusammenfassung
Mit `PRIMARY KEY`, `AUTO INCREMENT`, `FOREIGN KEY` und `NOT NULL` kannst du:

1. **Daten eindeutig identifizieren** (PRIMARY KEY).
2. **Automatisch IDs generieren** (AUTO INCREMENT).
3. **Tabellen relational verknüpfen** (FOREIGN KEY).
4. **Wichtige Felder verpflichtend machen** (NOT NULL).

Ein korrektes Datenbankdesign sorgt dafür, dass die Daten konsistent bleiben und leicht abgefragt werden können. Nutze diese Funktionen, um leistungsstarke, skalierbare Datenbanken zu erstellen.