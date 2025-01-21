---
layout: single
title: "INSERT INTO"
date: 2025-01-20
permalink: /Datenbanken/insert-into-easy/
categories: Datenbanken
difficulty: easy
header:
    teaser: "assets/images/insertIntoEasy.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/insertIntoEasy.png # Hintergrundbild
---

Der SQL-Befehl `INSERT INTO` fügt neue Daten in eine Tabelle ein. 

### Syntax

```sql
INSERT INTO Tabellenname (spalte1, spalte2, spalte3)
VALUES (wert1, wert2, wert3);
```

- **tabellenname**: Name der Tabelle.
- **spalte1, spalte2, spalte3**: Spalten, in die Werte eingefügt werden.
- **wert1, wert2, wert3**: Werte, die eingefügt werden.

### Beispiel
Für eine Tabelle `Kunde` mit den Spalten `id`, `name`, `email`:

```sql
INSERT INTO Kunde (id, name, email)
VALUES (1, 'Max Mustermann', 'max.mustermann@example.com');
```

---

### Einfügen mehrerer Datensätze gleichzeitig
Mit `INSERT INTO` können auch mehrere Datensätze gleichzeitig hinzugefügt werden:

```sql
INSERT INTO Kunde (id, name, email)
VALUES 
  (2, 'Anna Müller', 'anna.mueller@example.com'),
  (3, 'Peter Schmidt', 'peter.schmidt@example.com');
```
