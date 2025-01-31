---
layout: single
title: "Ticket #347: Problem mit Datenbankeinträgen"
date: 2025-01-21
permalink: /Tickets/347
categories: 
    - Tickets
tags:
    - BuchWurm
read_time: false
open: false
---

**Priorität:** Hoch;  
**Status:** Offen;  
**Kunde:** BuchWurm;

Moin, 

könnt ihr uns mal bitte erklären, wie wir diese verdammten Daten in unsere Tabellen rein bekommen? Wir haben schon gefühlt alles ausprobiert aber nix klappt bei dem Mist. 
#### Die Daten

| Vorname | Geburtsdatum | Nachname | Titel         |
|---------|--------------|----------|---------------|
| Sophia  | 1980-04-15   | Meyer    | Das Licht     |
| Anna    | 1990-07-30   | Fischer  | Gluecklich    |
| Sophia  | 1980-04-15   | Meyer    | Der Verfall   |
| Chris   | 1965-12-12   | Hansen   | Atemnot       |
| Anna    | 1990-07-30   | Fischer  | Reiselust     |

#### Unsere Tabellen

```sql
CREATE TABLE Autor (
    ID INT PRIMARY KEY,
    Nachname VARCHAR(50),
    Vorname VARCHAR(50),
    Geburtsdatum DATE
);

CREATE TABLE Buch (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Titel VARCHAR(100),
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(ID)
);
```

Mit Excel hatten wir solche Probleme nicht.
Schaut euch das an und meldet euch so schnell wie möglich zurück. Wir brauchen eine Lösung, und zwar gestern.

Grüße,  
BuchWurm

{% include comments.html %}