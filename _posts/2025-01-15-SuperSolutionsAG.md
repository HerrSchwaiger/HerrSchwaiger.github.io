---
layout: single
title: "Ticket #7: Tabellen lassen sich nicht erstellen"
date: 2025-01-15
permalink: /Tickets/SuperSolutions_15012025
read_time : false
categories:
    - Tickets
---

**Priorität:** Hoch;  
**Status:** Offen;  
**Kunde:** SuperSolutionsAG;

Sehr geehrte ByteConnect GmbH,

um endlich unsere Mitarbeiter-Informationen digital zu speichern
haben wir versucht mit folgendem Code die nötigen Tabellen zu erstellen:

```sql
CREATE TABLE Teams (
    TeamID INT PRIMARY KEY,
    TeamName VARCHAR(100),
    Teamleiter INT,
    FOREIGN KEY (Teamleiter) REFERENCES Mitarbeiter(MitarbeiterID)
);

CREATE TABLE Mitarbeiter (
    MitarbeiterID INT PRIMARY KEY,
    Name VARCHAR(100),
    TeamID INT,
    FOREIGN KEY (TeamID) REFERENCES Teams(TeamID)
);
```
Dabei kommen immer die folgenden Fehler:

```
Can't create table `supersolutionsag`.`teams` (errno: 150 "Foreign key constraint is incorrectly formed")
Can't create table `supersolutionsag`.`mitarbeiter` (errno: 150 "Foreign key constraint is incorrectly formed")
```

Wie können wir das Problem endlich beheben?

Mit freundlichen Grüßen,  
Friedrich Kaspar  
SuperSolutions AG

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