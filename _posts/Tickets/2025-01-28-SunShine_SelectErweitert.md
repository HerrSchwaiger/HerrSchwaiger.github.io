---
layout: single
title: "Ticket #634: Sortierung und Filterung von Mitarbeitern"
date: 2025-01-28
permalink: /Tickets/634/
categories:
  - Tickets
tags:
  - SQL
  - SELECT
  - ORDER_BY
  - LIMIT
read_time: false
---

**Priorität:** Mittel; **Status:** Offen; **Kunde:** Sunshine GmbH  

Sehr geehrtes ByteConnect-Team,

für einen internen Audit benötigen wir Ihre Unterstützung bei der Erstellung einer SQL-Abfrage für unsere Tabelle `Mitarbeiter`. Die Abfrage soll die ersten 10 Mitarbeiter ausgeben, die  aus der Abteilung mit der ID 7 sind oder mehr als 5000€ im Monat verdienen, und die Ergebnisse in einer aufsteigenden Reihenfolge sortieren.

#### Anforderungen:
1. Es sollen **alle** Spalten der Tabelle `Mitarbeiter` in der Ausgabe enthalten sein.
2. Die Abfrage soll Mitarbeiter zurückgeben, die entweder mehr als 5000€ verdienen **oder** in der Abteilung mit der ID 7 sind.
3. Die Ergebnisse sollen nach dem Eintrittsdatum in **aufsteigender Reihenfolge** (ASC) sortiert werden.
4. Es sollen maximal die ersten 10 Ergebnisse angezeigt werden.

#### Unsere Tabelle:
**Mitarbeiter**
- **Mitarbeiter_id**: ID des Mitarbeiter. (INT)
- **Abteilung_id**: ID der Abteilung. (INT)
- **Eintrittsdatum**: Datum des Arbeitseintritts. (DATE)
- **Gehalt**: Gehalt des Mitarbeiters. (DECIMAL(10,2))

Bitte stellen Sie die SQL-Abfrage zum nächstmöglichen Zeitpunkt bereit. Sollten Sie Rückfragen haben, stehen wir Ihnen gerne zur Verfügung.

Mit freundlichen Grüßen,  
Sunshine GmbH  

<!-- Platzhalter für die Info-Box -->
<div id="response-box" class="notice" style="display: none;">
  <h3>ByteConnect GmbH:</h3>
  <pre id="response-message"></pre>
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
      rows="12"
      cols="50"
      required
    >
Sehr geehrtes Sunshine-Team,
wir haben Ihnen die passende SQL-Abfrage erstellt:



        //TODO


Wir sind jederzeit für Fragen für Sie erreichbar.
Mit freundlichen Grüßen,
Ihr ByteConnect Team
    </textarea>
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
