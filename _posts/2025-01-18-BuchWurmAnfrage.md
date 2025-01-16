---
layout: single
title: "Ticket #154: Foreign Key Constraint?"
date: 2025-01-16
permalink: /Tickets/BuchWurm_18012025
read_time : false
categories:
    - Tickets
---

**Priorität:** Mittel;  
**Status:** Offen;  
**Kunde:** BuchWurm;

Hallo,

wir verzweifeln langsam an diesem blöden SQL. Wir versuchen nun seit Tagen unsere Buch und Autor Tabellen zu erstellen aber scheitern immer wieder am selben Fehler:

```
 Can't create table `buchwurm`.`buch` (errno: 150 "Foreign key constraint is incorrectly formed")
```

Das ist unser Code:
```sql
CREATE TABLE Autor (
    AutorID INT PRIMARY KEY,
    Name VARCHAR(100),
    Geburtsdatum DATE
);

CREATE TABLE Buch (
    BuchID INT PRIMARY KEY,
    Titel VARCHAR(50),
    AutorID VARCHAR(50),
    ISBN VARCHAR(75),
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);
```

Bitte helft uns wir wissen einfach nicht mehr weiter!

Danke und viele Grüße,  
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