---
layout: single
title: "Ticket #382: Autoren die vor 1990 geboren sind"
date: 2025-01-26
permalink: /Tickets/382/
categories:
  - Tickets
tags:
  - SQL
  - SELECT
  - BuchWurm
read_time: false
---

**Priorität:** Mittel;
**Status:** Offen;
**Kunde:** BuchWurm;

### Problemstellung
Hallo Support-Team,  

wir benötigen eine Möglichkeit, die Namen aller Autoren in unserer Datenbank herauszufinden, die vor 1990 geboren sind. Wir haben eine Tabelle `Autor`, in der die relevanten Informationen gespeichert sind, aber wir sind uns unsicher, wie wir die SQL-Abfrage korrekt formulieren können.

Die Tabelle `Autor` sieht wie folgt aus:

#### Tabelle: Autor

| Spaltenname    | Datentyp      | Beschreibung                |
|----------------|---------------|-----------------------------|
| ID             | INTEGER       | Eindeutige Autoren-ID       |
| Vorname        | VARCHAR(50)   | Vorname des Autors          |
| Nachname       | VARCHAR(50)   | Nachname des Autors         |
| Geburtsdatum   | DATE          | Geburtsdatum des Autors     |

#### Beispielhafte Daten

| ID | Vorname | Geburtsdatum | Nachname |
|----|---------|--------------|----------|
| 1  | Sophia  | 1980-04-15   | Meyer    |
| 2  | Anna    | 1990-07-30   | Fischer  |
| 3  | Chris   | 1965-12-12   | Hansen   |

Formulieren Sie uns die passende SQL-Abfrage bitte zum nächstmöglichen Zeitpunkt.

Mit freundlichen Grüßen,  
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