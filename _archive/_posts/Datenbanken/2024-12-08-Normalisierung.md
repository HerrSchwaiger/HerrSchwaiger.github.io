---
layout: single
title: "Datenbank-Normalisierung"
date: 2024-12-08
permalink: /Datenbanken/normalisierung-medium/
categories:
    - Datenbanken
tags:
    - Normalisierung
difficulty: "medium"
header:
    teaser:  "assets/images/normalisierung.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/normalisierung.png # Hintergrundbild
---

Die Datenbank-Normalisierung ist ein essenzieller Prozess, um Redundanzen in Datenbanken zu minimieren und Datenkonsistenz sicherzustellen. Sie hilft, eine gut strukturierte Datenbank zu erstellen, die effizient arbeitet und einfach zu warten ist.

---

# Die Normalformen

## Ausgangstabelle
Ein Unternehmen speichert folgende Daten in einer Tabelle:

| PersNr | Name          | AbtNr | AbtName   | ProjNr | Kurzbez           | Rolle             |
|--------|---------------|-------|-----------|--------|-------------------|-------------------|
| 1123   | Thomas Maier  | 4     | Hardware  | 5522, 4029   | 3D-Chip DeForce, Fotohandy m500  | Test              |
| 3232   | Müller Peter  | 3     | Forschung | 9000   | Kryptographie     | Controll          |
| 6792   | Lutz Seifert  | 4     | Hardware  | 5522   | 3D-Chip DeForce   | Leiter Hardware   |

---

## 1. Normalform (1.NF)

Die erste Normalform (1.NF) verlangt, dass in den einzelnen Zellen nur atomare Werte
vorkommen. Dies bedeutet, dass nicht mehrere Informationen in einer Zelle stehen dürfen.
{: .notice--primary}

**Kriterium:** Alle Attribute müssen atomar sein.

**Problem:** 
1. Das Attribut „Name“ ist nicht atomar.
2. ProjNr und KurzBez sind haben teilweise zwei Werte in einer Zeile

**Lösung:** 
1. Aufteilung des Namens in „Vorname“ und „Nachname“.
2. Aufteilung der Doppel-Werte auf zwei Zeilen

**Nach der Aufteilung:**

| PersNr | Vorname | Nachname | AbtNr | AbtName   | ProjNr | Kurzbez           | Rolle             |
|--------|---------|----------|-------|-----------|--------|-------------------|-------------------|
| 1123   | Thomas  | Maier    | 4     | Hardware  | 5522   | 3D-Chip DeForce   | Test              |
| 1123   | Thomas  | Maier    | 4     | Hardware  | 4029   | Fotohandy m500    | Test              |
| 3232   | Peter   | Müller   | 3     | Forschung | 9000   | Kryptographie     | Controll          |
| 6792   | Lutz    | Seifert  | 4     | Hardware  | 5522   | 3D-Chip DeForce   | Leiter Hardware   |

---

## 2. Normalform (2.NF)

Eine Tabelle ist genau dann in zweiter Normalform (2.NF), wenn sie in der 1.NF ist und jedes nicht zum Primärschlüssel gehörende Attribut voll funktional abhängig vom gesamten Primärschlüssel ist.  
**Hinweis:** Die zweite Normalform kann nur bei einem zusammengesetzten Schlüssel verletzt sein.
{: .notice--primary}

**Kriterium:** Die Tabelle muss in der 1.NF sein, und jedes Nicht-Schlüssel-Attribut muss vollständig vom Primärschlüssel abhängen.

**Problem:** "ProjNr", "KurzBez" und "Rolle" hängen nicht direkt von PersNr ab.

**Lösung:** Aufteilen in mehrere Tabellen mit IDs.

**Mitarbeiter-Tabelle:**

| PersNr | Vorname | Nachname | AbtNr | AbtName   | 
|--------|---------|----------|-------|-----------|
| 1123   | Thomas  | Maier    | 4     | Hardware  | 
| 3232   | Peter   | Müller   | 3     | Forschung | 
| 6792   | Lutz    | Seifert  | 4     | Hardware  | 


**Projekt-Tabelle:**

| ProjNr   | KurzBez        |
|----------|----------------|
| 5522     | 3D-Chip        |
| 4029     | Fotohandy m500 |
| 9000     | Kryptographie  |

**Rollen-Tabelle:**

| PersNr | ProjNr  | Rolle           |
|--------|---------|-----------------|
| 1123   | 5522    | Test            |
| 1123   | 4029    | Leiter Hardware |
| 3232   | 9000    | Kryptographie   |
| 6792   | 5522    | Leiter Hardware |

Die Rolle hängt weder direkt nur von der "PersNr" noch nur von der "ProjNr" ab, sondern von beiden.
{: .notice--warning}

---

## 3. Normalform (3.NF)

Eine Tabelle ist genau dann in dritter Normalform (3.NF), wenn sie in der 2.NF ist und
für jede funktionale Abhängigkeit X → Y gilt: X ist Teil des Primärschlüssels.
{: .notice--primary}

**Kriterium:** Tabelle muss in der 2.NF sein und darf keine transitiven Abhängigkeiten aufweisen.

**Transitive Abhängigkeiten** treten in relationalen Datenbanken auf, wenn ein Nicht-Schlüssel-Attribut indirekt über ein anderes Nicht-Schlüssel-Attribut von einem Primärschlüssel abhängt.

**Problem:** "AbtName" hängt indirekt von der "AbtNr" ab.

**Lösung:** Aufteilen in eine zusätzliche Abteilungs-Tabelle.

**Mitarbeiter-Tabelle:**

| PersNr | Vorname | Nachname | AbtNr | 
|--------|---------|----------|-------|
| 1123   | Thomas  | Maier    | 4     | 
| 3232   | Peter   | Müller   | 3     | 
| 6792   | Lutz    | Seifert  | 4     | 

**Abteilungs-Tabelle:**

| AbtNr | AbtName   | 
|-------|-----------|
| 4     | Hardware  | 
| 3     | Forschung | 

**Projekt-Tabelle:**

| ProjNr   | KurzBez        |
|----------|----------------|
| 5522     | 3D-Chip        |
| 4029     | Fotohandy m500 |
| 9000     | Kryptographie  |

**Rollen-Tabelle:**

| PersNr | ProjNr  | Rolle           |
|--------|---------|-----------------|
| 1123   | 5522    | Test            |
| 1123   | 4029    | Leiter Hardware |
| 3232   | 9000    | Kryptographie   |
| 6792   | 5522    | Leiter Hardware |

---

## Vorteile der Normalisierung
- **Reduzierte Redundanz:** Informationen werden nicht mehrfach gespeichert.
- **Bessere Konsistenz:** Datenanomalien wie Einfüge-, Änderungs- oder Löschanomalien werden vermieden.
- **Einfachere Wartung:** Änderungen in der Datenstruktur sind leichter durchzuführen.