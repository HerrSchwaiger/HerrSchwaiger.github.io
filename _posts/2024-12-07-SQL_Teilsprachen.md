---
layout: single
title: "SQL-Teilsprachen"
date: 2024-12-07
permalink: /Datenbanken/teilsprachen
categories:
    - Datenbanken
tags:
    - SQL-Teilsprachen
    - SQL
difficulty: "medium"
header:
    teaser:  "assets/images/teilsprachen.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/teilsprachen.png # Hintergrundbild
---
Structured Query Language (SQL) ist eine der zentralen Technologien in der Welt der Datenbanken. SQL besteht aus mehreren Teilsprachen, die jeweils spezifische Aufgaben übernehmen. In diesem Beitrag werfen wir einen Blick auf die wichtigsten SQL-Teilsprachen und ihre Funktionen.

---

### 1. **Data Definition Language (DDL)**  
Die DDL ist verantwortlich für die Struktur einer Datenbank. Mit ihrer Hilfe können Tabellen, Schemata und andere Datenbankobjekte definiert oder verändert werden.

#### Wichtige Befehle:
- `CREATE`: Erstellen von Tabellen, Datenbanken oder anderen Objekten.
- `ALTER`: Ändern bestehender Objekte (z. B. Hinzufügen von Spalten).
- `DROP`: Löschen von Objekten wie Tabellen oder Schemata.

#### Beispiel:
```sql
CREATE TABLE Mitarbeiter (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Abteilung VARCHAR(50)
);
```

---

### 2. **Data Manipulation Language (DML)**  
Die DML wird verwendet, um Daten in einer Datenbank zu manipulieren. Sie ermöglicht das Einfügen, Aktualisieren und Löschen von Daten.

#### Wichtige Befehle:
- `INSERT`: Einfügen von Daten in Tabellen.
- `UPDATE`: Aktualisieren von bestehenden Daten.
- `DELETE`: Löschen von Daten.

#### Beispiel:
```sql
INSERT INTO Mitarbeiter (ID, Name, Abteilung)
VALUES (1, 'Max Mustermann', 'IT');
```

---

### 3. **Data Query Language (DQL)**  
Die DQL ist eine Teilmenge der SQL-Operationen, die sich ausschließlich auf das Abfragen von Daten konzentriert. Ihr Hauptziel ist das Abrufen von Daten aus einer oder mehreren Tabellen.

#### Wichtige Befehle:
- `SELECT`: Abfragen von Daten.

#### Beispiel:
```sql
SELECT Name, Abteilung FROM Mitarbeiter WHERE Abteilung = 'IT';
```
---

### 4. **Data Control Language (DCL)**  
Die DCL dient der Verwaltung von Berechtigungen und Zugriffsrechten in der Datenbank.

#### Wichtige Befehle:
- `GRANT`: Erteilen von Berechtigungen.
- `REVOKE`: Entziehen von Berechtigungen.

#### Beispiel:
```sql
GRANT SELECT, INSERT ON Mitarbeiter TO BenutzerX;
```

---

### 5. **Transaction Control Language (TCL)**  
Die TCL wird verwendet, um Transaktionen in der Datenbank zu verwalten. Sie sorgt dafür, dass Datenkonsistenz und -integrität gewährleistet werden.

#### Wichtige Befehle:
- `COMMIT`: Bestätigen einer Transaktion.
- `ROLLBACK`: Zurücknehmen einer Transaktion.
- `SAVEPOINT`: Setzen eines Zwischenstandes in einer Transaktion.

#### Beispiel:
```sql
BEGIN TRANSACTION;
UPDATE Mitarbeiter SET Abteilung = 'HR' WHERE ID = 1;
ROLLBACK;
```

