---
layout: single
title: "Ticket #138: Daten einfügen"
date: 2025-01-21
permalink: /Tickets/138
read_time: false
tags:
    - SunshineGmbH
categories: 
    - Tickets
published: false
---
**Priorität:** Hoch;  
**Status:** Offen;  
**Kunde:** Sunshine GmbH;

Hallo, 

kann uns mal bitte jemand erklären, warum wir diese blöden Daten nicht in die Tabellen einfügen können? Wir versuchen das schon ewig, und es klappt einfach nicht! Wir wissen echt nicht mehr weiter, das hält uns komplett auf. Hier sind die Daten, die wir einfügen wollen:

#### Daten zum Einfügen

| KategorieName | ImSale | ProduktName | Preis  |
|---------------|--------|-------------|--------|
| Elektronik    | True     | Smartphone  | 499.99 |
| Elektronik    | True     | Tablet      | 299.99 |
| Haushalt      | False   | Staubsauger | 89.99  |
| Haushalt      | True     | Trockner    | 369.99 |
| Sport         | False   | Yogamatte   | 19.99  |

Und hier sind die Tabellen, so wie wir sie von euch haben:

```sql
CREATE TABLE Kategorie (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    KategorieName VARCHAR(50),
    ImSale BOOL
);

CREATE TABLE Produkt (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ProduktName VARCHAR(50),
    Preis DECIMAL(5,2),
    Kategorie INT,
    FOREIGN KEY (Kategorie) REFERENCES Kategorie(ID)
);
```

Keine Ahnung, warum das nicht geht, aber das ist echt nervig! Wir sitzen hier und kommen nicht weiter. Wisst Ihr wie viel Geld uns das kostet?
Fixed das und zwar ASAP!

Grüße,  
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