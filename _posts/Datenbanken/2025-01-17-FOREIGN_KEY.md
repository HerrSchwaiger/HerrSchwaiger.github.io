---
layout: single
title: "FOREIGN KEY"
date: 2025-01-17 00:00:02
permalink: /Datenbanken/foreign-key-medium/
categories:
  - Datenbanken
tags:
  - FOREIGN KEY
  - SQL
difficulty: "medium"
header:
    teaser:  "assets/images/foreign_key.jpg"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/foreign_key.jpg # Hintergrundbild
---

Ein `FOREIGN KEY` (Fremdschlüssel) stellt sicher, dass Werte in einer Tabelle nur dann eingefügt werden können, wenn sie in einer anderen Tabelle existieren. Dies ist ein zentraler Bestandteil der **referenziellen Integrität** in relationalen Datenbanken.

---

## Was ist referenzielle Integrität?
Referenzielle Integrität ist eine Regel, die sicherstellt, dass Beziehungen zwischen Tabellen konsistent bleiben. Sie bedeutet:
1. **Kein Verweis auf nicht existierende Daten**: Eine Tabelle kann keinen Fremdschlüsselwert enthalten, der nicht im Primärschlüssel der referenzierten Tabelle existiert.
2. **Gültige Aktualisierungen und Löschungen**: Änderungen in der referenzierten Tabelle dürfen keine „verwaisten“ Einträge in der abhängigen Tabelle hinterlassen.

**Beispiel einer Verletzung der referenziellen Integrität:**
```sql
INSERT INTO Bestellungen (BestellungID, KundeID, BestellDatum) 
VALUES (1, 999, '2025-02-01');
```
- Falls `KundeID = 999` nicht in der **Kunden**-Tabelle existiert, wird dieser Befehl fehlschlagen.

---

## Implementierung eines `FOREIGN KEY` mit referenzieller Integrität
### **Beispiel: Kunden und Bestellungen**
```sql
CREATE TABLE Kunde (
    KundeID INT PRIMARY KEY,
    Name VARCHAR(100)
);
```

```sql
CREATE TABLE Bestellung (
    BestellungID INT PRIMARY KEY,
    KundeID INT,
    BestellDatum DATE,
    FOREIGN KEY (KundeID) REFERENCES Kunde(KundeID) 
);
```

`FOREIGN KEY (KundeID)` : Die `(KundeID)` in der aktuellen Tabelle `Bestellung` wird als Fremdschlüssel definiert.  
`REFERENCES Kunden(KundeID)`: Dieser Teil legt das Ziel der Referenzierung fest, also hier die Spalte `KundeID` der Tabelle `Kunde`.

**Vorsicht:**
  - Der Fremdschlüssel und die referenzierte Spalte müssen den exakt gleichen Datentyp haben.
  - Die referenzierte Spalte, darf keine Duplikate enthalten. Sie muss also `PRIMARY KEY` oder `UNIQUE` sein.

## Zusammenfassung
Ein `FOREIGN KEY` sorgt für **referenzielle Integrität**, indem er sicherstellt, dass es keine inkonsistenten oder ungültigen Verweise gibt. Dadurch bleibt die Datenbank stabil, und Beziehungen zwischen Tabellen bleiben erhalten.

