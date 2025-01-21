---
layout: single
title: "Ticket #34: Fehler beim erstellen einer Tabelle"
date: 2025-01-18
permalink: /Tickets/SunShineGmbH_18012025
read_time : false
tags:
  - SunshineGmbH
categories:
  - Tickets
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
    ImSale BOOLEAN,

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