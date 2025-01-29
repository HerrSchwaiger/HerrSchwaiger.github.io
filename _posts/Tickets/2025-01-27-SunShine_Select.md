---
layout: single
title: "Ticket #425: Kategorien nicht im Sale"
date: 2025-01-26
permalink: /Tickets/425/
categories:
  - Tickets
tags:
  - SQL
  - SELECT
  - SunshineGmbH
read_time: false
published: false
---

**Priorität:** Mittel; 
**Status:** Offen;
**Kunde:** SunshineGmbH;

### Problemstellung
Hallo Support-Team,  
wir möchten gerne eine Liste aller Kategorien, die aktuell nicht im Sale sind. Die relevanten Informationen befinden sich in unserer Tabelle `Kategorie`. Wir sind uns allerdings unsicher, wie wir diese Abfrage korrekt formulieren können. Könnt ihr uns dabei helfen?

Die relevanten Tabelle sieht wie folgt aus:

#### Tabelle: Kategorie

| Spaltenname    | Datentyp      | Beschreibung                |
|----------------|---------------|-----------------------------|
| ID             | INTEGER       | Eindeutige Kategorie-ID     |
| KategorieName  | VARCHAR(50)   | Name der Kategorie          |
| ImSale         | BOOL          | Gibt an, ob die Kategorie im Sale ist |


#### Beispielhafte Daten

| ID | KategorieName | ImSale |
|----|---------------|--------|
| 1  | Elektronik    | True   |
| 2  | Haushalt      | False  |
| 3  | Sport         | False  |


Bitte stellen Sie uns die passende SQL-Abfrage zeitnah zur Verfügung.

Mit freundlichen Grüßen,  
SunshineGmbH

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