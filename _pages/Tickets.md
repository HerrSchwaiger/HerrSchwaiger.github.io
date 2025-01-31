---
layout: archive
title: "Tickets"
excerpt: "Alle offenen Kunden-Anfragen die zu bearbeiten sind."
permalink: /Tickets/  # Die URL der Seite
taxonomy: Tickets
header:
    teaser:  "assets/images/tickets.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/tickets.png # Hintergrundbild
---

{% assign open_tickets = site.categories.Tickets | where: "open", true %}
{% assign closed_tickets = site.categories.Tickets | where: "open", false %}

<h2>Offene Tickets ({{ open_tickets | size }})</h2>
<ul>
  {% for ticket in open_tickets %}
    <li><a style="color:#0092ca;" href="{{ ticket.url }}">{{ ticket.title }}</a></li>
  {% endfor %}
</ul>

<h2>Geschlossene Tickets ({{ closed_tickets | size }})</h2>
<ul>
  {% for ticket in closed_tickets %}
    <li style="color:gray;"><a href="{{ ticket.url }}">{{ ticket.title }}</a></li>
  {% endfor %}
</ul>