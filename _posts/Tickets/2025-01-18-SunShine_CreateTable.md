---
layout: single
title: "Ticket #34: Fehler beim erstellen einer Tabelle"
date: 2025-01-18
permalink: /Tickets/#34/
read_time : false
tags:
  - SunshineGmbH
categories:
  - Tickets
open: false
---

**Priorität:** Niedrig;  
**Status:** Offen;  
**Kunde:** Sunshine GmbH;

Sehr geehrtes ByteConnect-Team,

im Rahmen unserer Digitalisierung versuchte ich die **Kategorie** und **Produkt** Tabellen zu erstellen.
Leider gibt SQL immer einen Fehler aus: 
```
    Can't create table `sunshinegmbh`.`produkte` (errno: 150 "Foreign key constraint is incorrectly formed")
```

Ich habe den folgenden Code ausgeführt:
```sql
CREATE TABLE Kategorie (
    KategorieID INT,
    Name VARCHAR(100),
    ImSale BOOLEAN
);
CREATE TABLE Produkte (
    ProduktID INT PRIMARY KEY,
    Preis Decimal(5,2),
    Kategorie VARCHAR(100),
    FOREIGN KEY (Kategorie) REFERENCES Kategorie(KategorieID)
);
````

Bitte helfen Sie mir.

Mit freundlichen Grüßen,  
Hans Sommer  
Sunshine GmbH

{% include comments.html %}