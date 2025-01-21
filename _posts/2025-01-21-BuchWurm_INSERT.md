---
layout: single
title: "Ticket #347: Problem mit Datenbankeinträgen"
date: 2025-01-21
permalink: /Tickets/347
categories: 
    - Tickets
tags:
    - BuchWurm
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

<!-- Platzhalter für die Info-Box -->
<div id="response-box" class="notice" style="display: none;">
  <h3>ByteConnect GmbH:</h3>
  <p id="response-message"></p>
</div>


<form
  action=""
  class="fs-form"
  method="POST"
  onsubmit="handleFormSubmit(event)"
>
  <div class="fs-field">
    <label class="fs-label" for="message"></label>
    <textarea
      class="fs-textarea"
      id="message"
      name="message"
      required
    ></textarea>
    <p class="fs-description">Antwort an den Kunden</p>
  </div>
  <div class="fs-button-group">
    <button class="btn btn-primary" type="submit">Abschicken</button>
  </div>
</form>

<script>
  function handleFormSubmit(event) {
    event.preventDefault(); // Verhindert den Standard-Submit
    const formData = new FormData(event.target);
    const message = formData.get("message");

    // Fügt die Antwort in die Info-Box ein
    const responseBox = document.getElementById("response-box");
    const responseMessage = document.getElementById("response-message");
    responseMessage.textContent = message;

    // Zeigt die Info-Box an
    responseBox.style.display = "block";

    // Optional: Formular zurücksetzen
    event.target.reset();
  }
</script>