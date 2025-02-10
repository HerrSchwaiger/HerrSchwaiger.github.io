---
layout: single
title: "Use Case Diagramm"
date: 2025-01-14 00:00:01
permalink: /Anwendungsentwicklung/Use-Case-Easy/
categories: Anwendungsentwicklung
tags: [Use-Case-Diagramm, UML]
difficulty: easy
header:
    teaser: "/assets/images/useCaseEasy.png"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/useCaseEasy.png
---
Ein Use Case Diagramm gehört zur **Unified Modeling Language (UML)** und dient dazu, die Funktionalitäten eines Systems aus Sicht der Benutzer darzustellen. Es zeigt, welche Akteure mit dem System interagieren und welche Anwendungsfälle (Use Cases) ihnen zur Verfügung stehen. Wir erklären die einzelnen Bestandteile eines Use Case Diagramms an dem Beispiel einer Hotelbuchungs-Software.


![image-center](/assets/images/buchung_easy.png){: .align-center}

### Elemente eines Use Case Diagramms
Die Hauptbestandteile eines Use Case Diagramms sind:

1. **Akteure**:
   - Ein Akteur kann eine Person, ein anderes System oder ein Gerät sein, das mit dem System interagiert.
   - Beispiel im Diagramm: `Kunde`, `Benutzer`, und `Zahlungssystem`.

2. **Anwendungsfälle (Use Cases)**:
   - Ovale repräsentieren die Anwendungsfälle, also die spezifischen Funktionen des Systems.
   - Beispiel: `Zimmer suchen`, `Zimmer buchen`.

3. **Beziehungen**:
   - **Include**: Zeigt an, dass ein Use Case einen anderen zwingend einbindet. Beispiel: `Zimmer buchen` schließt `Zahlung durchführen` ein.
   - **Extend**: Zeigt optional erweiterte Funktionen. Beispiel: `Massage buchen` erweitert `Zimmer buchen`. Die Bedingung kann mithilfe eines Rechtecks dargestellt werden.
    In unserem Beispiel muss ein Termin frei sein, damit eine Massage gebucht werden kann.
   - **Generalisierung**: Ein `Kunde` kann alles, was ein `Benutzer` auch kann, und zusätzlich alle Anwendungsfälle, die mit ihm direkt verbunden sind.

4. **Systemgrenze**:
   - Ein Rechteck definiert die Grenze des Systems und zeigt, welche Anwendungsfälle dazu gehören.

### Vorteile von Use Case Diagrammen
- **Übersichtlichkeit**: Sie bieten eine einfache, visuelle Darstellung der Systemfunktionalitäten.
- **Kommunikation**: Erleichtern die Verständigung zwischen Entwicklern, Kunden und Stakeholdern.
- **Strukturierung**: Helfen, Anforderungen systematisch zu dokumentieren.

### Fazit
Ein Use Case Diagramm ist ein wertvolles Werkzeug für die Planung und Dokumentation von Systemanforderungen. Es erlaubt einen klaren Überblick darüber, wie ein System benutzt werden kann und welche Rollen und Funktionen beteiligt sind.