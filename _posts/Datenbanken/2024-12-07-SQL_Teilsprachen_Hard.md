---
layout: single
title: "SQL-Teilsprachen"
date: 2024-12-07 00:00:03
permalink: /Datenbanken/SQL-Teilsprachen-Hard
categories:
    - Datenbanken
tags:
    - SQL-Teilsprachen
    - SQL
difficulty: "hard"
header:
    teaser:  "assets/images/teilsprachen2.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/teilsprachen2.png # Hintergrundbild
---


**SQL (Structured Query Language)** ist weit mehr als nur eine Abfragesprache. Es handelt sich um ein komplexes Framework, das aus mehreren Teilsprachen besteht, die spezifische Aufgaben innerhalb eines Datenbankmanagementsystems (DBMS) erfüllen. In diesem Beitrag vertiefen wir die Funktionsweise der fünf zentralen Teilsprachen: DDL, DML, DQL, DCL und TCL.

---

Die **Data Definition Language (DDL)** bildet das Fundament jeder relationalen Datenbank. Sie ermöglicht die Definition und Verwaltung der Struktur einer Datenbank. Mit DDL-Befehlen wie `CREATE`, `ALTER` und `DROP` können neue Datenbankobjekte erstellt, bestehende Strukturen geändert oder entfernt werden. Im Gegensatz zu anderen Teilsprachen sind die Änderungen durch DDL-Befehle dauerhaft, da sie automatisch einen Commit auslösen. 

#### Beispiel:
```sql
CREATE TABLE Mitarbeiter (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Abteilung VARCHAR(50)
);
```

Die **Data Manipulation Language (DML)** konzentriert sich auf die Verwaltung und Manipulation der tatsächlichen Daten in einer Datenbank. Mit Befehlen wie `INSERT`, `UPDATE` und `DELETE` können Sie Daten hinzufügen, aktualisieren oder löschen. Ein entscheidender Vorteil von DML ist, dass Änderungen transaktionsgesteuert sind. Das bedeutet, dass Sie mehrere Operationen zu einer logischen Einheit zusammenfassen können, die entweder vollständig abgeschlossen (Commit) oder vollständig zurückgenommen (Rollback) wird.

#### Beispiel:
```sql
INSERT INTO Mitarbeiter (ID, Name, Abteilung)
VALUES (1, 'Max Mustermann', 'IT');
```

Die **Data Query Language (DQL)** ist eine eigenständige Teilsprache, die sich auf das Abrufen von Daten konzentriert. Im Zentrum steht der Befehl `SELECT`, der durch mächtige Funktionen wie Filterung, Gruppierung und Aggregation erweitert wird. DQL erlaubt es Ihnen, präzise Abfragen zu formulieren, beispielsweise um alle Projekte anzuzeigen, die nach einem bestimmten Datum beginnen, oder um Projekte nach Startjahr zu gruppieren. Mit Anweisungen wie `WHERE` können Sie spezifische Bedingungen festlegen, während `GROUP BY` und `HAVING` es Ihnen ermöglichen, aggregierte Daten zu analysieren. Die Ergebnisse können mit `ORDER BY` sortiert werden, um eine benutzerfreundliche Darstellung zu gewährleisten.

#### Beispiel:
```sql
SELECT Name, Abteilung FROM Mitarbeiter WHERE Abteilung = 'IT';
```

Die **Data Control Language (DCL)** befasst sich mit der Verwaltung von Berechtigungen und Sicherheitsrichtlinien. Diese Teilsprache stellt sicher, dass nur autorisierte Benutzer auf sensible Daten zugreifen können. Mit `GRANT` können Sie bestimmten Benutzern Rechte wie Lesen oder Schreiben gewähren, während `REVOKE` diese Rechte entzieht. Diese Befehle spielen eine entscheidende Rolle, um die Integrität und Vertraulichkeit der Daten zu gewährleisten.

#### Beispiel:
```sql
GRANT SELECT, INSERT ON Mitarbeiter TO BenutzerX;
```

Abgerundet wird SQL durch die **Transaction Control Language (TCL)**, die Werkzeuge zur Verwaltung von Transaktionen bereitstellt. Eine Transaktion ist eine logische Einheit von Arbeitsschritten, die als Ganzes ausgeführt oder verworfen werden können. TCL-Befehle wie `COMMIT`, `ROLLBACK` und `SAVEPOINT` ermöglichen es Ihnen, den Zustand der Datenbank präzise zu steuern. Beispielsweise könnten Sie eine Transaktion starten, um ein neues Projekt hinzuzufügen, und die Änderungen mit `COMMIT` bestätigen oder mit `ROLLBACK` rückgängig machen, falls ein Fehler auftritt. Mit `SAVEPOINT` können Sie Zwischenschritte festlegen, um bei Bedarf zu einem bestimmten Punkt in der Transaktion zurückzukehren.

#### Beispiel:
```sql
BEGIN TRANSACTION;
UPDATE Mitarbeiter SET Abteilung = 'HR' WHERE ID = 1;
ROLLBACK;
```