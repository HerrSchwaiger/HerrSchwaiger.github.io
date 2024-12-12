---
layout: single
title: "Tabellenmodell"
date: 2024-12-09
permalink: /Datenbanken/tabellenmodell
categories:
    - Datenbanken
tags:
    - Basic
    - Normalisierung
    - Tabellenmodell
header:
    teaser:  "assets/images/tabellenmodell.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/tabellenmodell.png # Hintergrundbild
---

Das Tabellenmodell ist eine weitere Methode die Struktur einer Datenbank grafisch darzustellen. Ähnlich wie das ER-Modell bildet es die Grundlage für das Design relationaler Datenbanken und hilft, die Struktur einer Datenbank klar zu definieren, bevor sie implementiert wird.

In diesem Post verwenden wir die normalisierten Tabellen aus dem [Normalisierung's-Post](/Datenbanken/Normalisierung) und zeigen, wie diese in ein ER-Modell umgewandelt werden können.

---

## Ausgangspunkt: Die normalisierten Tabellen

Aus der Normalisierung haben wir folgende Tabellen:


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

## Schritt 1: Tabellen

Jede Tabelle wird ähnlich wie eine Klasse im UML-Klassendiagramm als rechteckiger Kasten mit dem Namen der Tabelle ganz oben dargestellt:

![image-center](/assets/images/Tabellenmodell_1.pdf){: .align-center}

## Schritt 2: Spalten

Jede Spalte einer Tabelle wird im Tabellenmodell wie ein Attribut im UML-Klassendiagramm dargestellt. Der oder die Primärschlüssel werden mit **PK** markiert, während Fremdschlüssel mit **FK** markiert werden.

![image-center](/assets/images/Tabellenmodell_2.pdf){: .align-center}

**PK** ist die Abkürzung für "primary key" (dt.: Primärschlüssel) und **FK** für "foreign key" (dt.: Fremdschlüssel)
{: .notice--primary}

## Schritt 3: Beziehungen
Beziehungen werden durch Linien zwischen den beiden betroffenen Attributen dargestellt. Diese sind in der Regel ein **FK** und auf der anderen Seite ein **PK**. Die Kardinalitäten werden wie im ER-Modell am Anfang und Ende der Linien abgebildet. Bei 1-n Beziehungen ist das "n" immer auf der Seite des **FK**.

![image-center](/assets/images/Tabellenmodell_3.pdf){: .align-center}

Im Tabellenmodell gibt es **keine** n-m-Beziehungen. Eine n-m-Beziehung im ER-Modell entspricht im Tabellenmodell einer eigenen Tabelle. Diese Tabelle wird wiederum mit den Tabellen zwischen denen die n-m-Beziehung bestand mit jeweils einer 1-n Beziehung verbunden.
{: .notice--primary}