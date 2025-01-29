---
layout: single
title: "Ticket #527: Komplizierte Kundenfilterung"
date: 2025-01-28
permalink: /Tickets/527/
categories:
  - Tickets
tags:
  - SQL
  - SELECT
  - ORDER_BY
  - LIMIT
read_time: false
---

**Priorität:** Hoch; **Status:** Offen; **Kunde:** BuchWurm  

Sehr geehrtes ByteConnect-Team,

Für eine Kundenanfrage benötigen wir eine SQL-Abfrage, um aus unserer Tabelle `Bestellung` die neuesten Bestellungen des Kunden mit der ID 31 zu ermitteln. Die Ergebnisse sollen alle Spalten enthalten, nach dem Bestelldatum sortiert werden und nur eine begrenzte Anzahl von Einträgen anzeigen.

#### Anforderungen:
1. Bei der Abfrage sollen **alle** Spalten der Tabelle `Bestellung` abgerufen werden.
2. Die Abfrage soll nur Bestellungen enthalten die vom Kunden mit der ID 31 sind **und** deren Status "abgeschlossen" ist.
3. Die Ergebnisse müssen nach dem Bestelldatum **absteigend** sortiert werden.
4. Es sollen maximal die letzten 5 Bestellungen angezeigt werden.

#### Unsere Tabelle:
**Bestellung**
- **bestell_id**: Eindeutige ID der Bestellung. (INT)
- **kunde_id**: ID des Kunden. (INT)
- **status**: Status der Bestellung (z. B. "offen", "abgeschlossen"). (VARCHAR(50))
- **bestelldatum**: Datum der Bestellung. (DATE)
- **gesamtbetrag**: Gesamtbetrag der Bestellung. (DECIMAL(10,2))

Formulieren Sie uns die passende SQL-Abfrage bitte zum nächstmöglichen Zeitpunkt.

Mit freundlichen Grüßen,  
BuchWurm

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
Sehr geehrtes BuchWurm-Team,
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