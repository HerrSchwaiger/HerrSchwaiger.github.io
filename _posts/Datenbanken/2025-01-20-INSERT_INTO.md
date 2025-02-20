---
layout: single
title: "INSERT INTO"
date: 2025-01-20 00:00:02
permalink: /sql/insert-into-medium/
categories: Datenbanken
difficulty: medium
tags:
- SQL
- INSERT INTO
published: true
header:
    teaser:  "assets/images/insertInto.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/insertInto.png # Hintergrundbild
---

Der Befehl `INSERT INTO` ist einer der Grundpfeiler von SQL und ermöglicht das Einfügen neuer Daten in eine Tabelle. In diesem Artikel lernst du die Grundlagen, Anwendungsbeispiele und wichtige Tipps zur Nutzung von `INSERT INTO` kennen.

---

### Syntax von INSERT INTO
Die Grundstruktur des `INSERT INTO`-Befehls sieht wie folgt aus:

```sql
INSERT INTO Tabellenname (spalte1, spalte2, spalte3, ...)
VALUES (wert1, wert2, wert3, ...);
```

#### Erklärung der Komponenten:
- **tabellenname**: Der Name der Tabelle, in die Daten eingefügt werden sollen.
- **spalte1, spalte2, spalte3**: Die Namen der Spalten, in die Werte eingefügt werden sollen.
- **wert1, wert2, wert3**: Die Werte, die in die entsprechenden Spalten eingetragen werden.

---

### Einfaches Beispiel
Angenommen, wir haben eine Tabelle `Kunde` mit den Spalten `id`, `name` und `email`. Um einen neuen Kunden hinzuzufügen, verwenden wir:

```sql
INSERT INTO Kunde (id, name, email)
VALUES (1, 'Max Mustermann', 'max.mustermann@example.com');
```

Nach der Ausführung dieses Befehls enthält die Tabelle einen neuen Datensatz mit den angegebenen Werten.

---

### Spaltennamen weglassen
Falls die Werte in der **gleichen Reihenfolge wie in der Tabellendefinition (CREATE TABLE)** angegeben werden, können die Spaltennamen weggelassen werden. Das reduziert den Code, birgt aber auch das Risiko von Fehlern, wenn sich die Tabellendefinition ändert. Beispiel:

```sql
INSERT INTO Kunde
VALUES (1, 'Max Mustermann', 'max.mustermann@example.com');
```

Hier werden die Werte automatisch den Spalten `id`, `name` und `email` zugeordnet.

---

### Einfügen mehrerer Datensätze gleichzeitig
Mit `INSERT INTO` können auch mehrere Datensätze gleichzeitig hinzugefügt werden. Dies ist effizienter als mehrere einzelne Befehle auszuführen:

```sql
INSERT INTO Kunde (id, name, email)
VALUES 
  (2, 'Anna Müller', 'anna.mueller@example.com'),
  (3, 'Peter Schmidt', 'peter.schmidt@example.com');
```

---

### Optional: Spalten weglassen
Falls nicht alle Spalten gefüllt werden sollen (z. B. weil sie Standardwerte haben), können Spalten ausgelassen werden. Beispiel:

```sql
INSERT INTO Kunde (id, name)
VALUES (4, 'Lena Fischer');
```

In diesem Fall wird die `email`-Spalte automatisch mit einem Standardwert (NULL) gefüllt.

#### Häufige Fehler
1.	**Primärschlüssel nicht angegeben:**
Wenn ein Primärschlüssel ohne `AUTO_INCREMENT` definiert ist, darf er beim `INSERT` nicht leer bleiben

1. **NULL-Werte in Pflichtfeldern**:
Wenn ein Feld als `NOT NULL` definiert ist, müssen Werte dafür angegeben werden. Ansonsten führt dies zu einem Fehler.

---

### Fazit
Der Befehl `INSERT INTO` ist unverzichtbar, um Daten in SQL-Datenbanken zu schreiben. Ob für das Hinzufügen einzelner oder mehrerer Datensätze, die Flexibilität dieses Befehls macht ihn zu einem wichtigen Werkzeug.
