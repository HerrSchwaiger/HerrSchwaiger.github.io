---
layout: single
title: "Routing"
date: 2025-04-28 00:00:02
permalink: /Netzwerktechnik/Routing_easy/
categories:
  - Netzwerktechnik
tags:
  - Routing
difficulty: easy
published: true
header:
    teaser: "assets/images/Routing_easy.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/Routing_easy.jpg

toc: true
toc_label: "Inhalt"
---

In unserer vernetzten Welt helfen Routing-Tabellen dabei, Daten von einem Netzwerk zum anderen zu schicken. Diese Tabellen sind in Routern gespeichert und sagen ihnen, wohin sie Datenpakete schicken sollen. Jede Zeile in der Tabelle zeigt, wie man zu einem bestimmten Zielnetzwerk kommt.

## Aufbau

Eine Routing-Tabelle hat mehrere Spalten:

1. **Zielnetzwerk:** Die Adresse des Netzwerks, zu dem die Daten geschickt werden sollen.
2. **Subnetzmaske:** Zeigt den Bereich des Zielnetzwerks an.
3. **Next Hop / Gateway:** Die Adresse des nächsten Routers, an den die Daten weitergeleitet werden.
4. **Interface:** Der Ausgang des Routers, durch den die Daten geschickt werden.

## Funktion

Wenn ein Datenpaket bei einem Router ankommt, schaut dieser in die Routing-Tabelle, um zu sehen, wohin die Daten als Nächstes geschickt werden sollen. Dieser Vorgang wiederholt sich, bis die Daten ihr Ziel erreichen.

### Beispiel

<style>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>

<figure>
    <img src="/assets/images/Router_bsp.png" width="400"/>
    <figcaption>Fig1: Beispiel Netzwerkplan</figcaption>
</figure>

Hier ist die Routing-Tabelle für Router 1:

| Zielnetzwerk   | Subnetzmaske  | Next Hop / Gateway | Interface |
|----------------|---------------|--------------------|-----------|
| 192.168.23.0   | 255.255.255.0 | -                  | 192.168.23.1 |
| 150.32.0.0     | 255.255.0.0   | -                  | 150.32.0.1  |
| 188.2.0.0      | 255.255.0.0   | 150.32.255.254     | -          |

### Vorgehen

So füllt man die Tabelle für Router 2 aus:

1. **Direkt verbundene Netzwerke:** Trage zuerst alle Netzwerke ein, die direkt mit dem Router verbunden sind. Diese brauchen keinen Gateway-Eintrag.

    | Zielnetzwerk   | Subnetzmaske  | Next Hop / Gateway | Interface |
    |----------------|---------------|--------------------|-----------|
    | 150.32.0.0     | 255.255.0.0   | -                  | 150.32.255.254 |
    | 188.2.0.0      | 255.255.0.0   | -                  | 188.2.0.1  |

2. **Indirekt verbundene Netzwerke:** Trage die restlichen Netzwerke ein, die nur über einen anderen Router erreichbar sind. Diese brauchen keinen Interface-Eintrag, aber die Adresse des nächsten Routers.

    | Zielnetzwerk   | Subnetzmaske  | Next Hop / Gateway | Interface |
    |----------------|---------------|--------------------|-----------|
    | 150.32.0.0     | 255.255.0.0   | -                  | 150.32.255.254 |
    | 188.2.0.0      | 255.255.0.0   | -                  | 188.2.0.1  |
    | 192.168.23.0   | 255.255.255.0 | 150.32.0.1         | -          |

## **Arten von Routing-Tabellen**

Es gibt zwei Hauptarten von Routing-Tabellen:

1. **Statische Routing-Tabellen:** Diese werden von Hand eingestellt und ändern sich nicht automatisch. Sie sind einfach, aber weniger flexibel.
2. **Dynamische Routing-Tabellen:** Diese passen sich automatisch an Änderungen im Netzwerk an. Sie sind flexibler und besser für größere Netzwerke geeignet.

## **Fazit**

Routing-Tabellen sind sehr wichtig für die moderne Netzwerkkommunikation. Sie helfen Routern, Daten schnell und zuverlässig zu ihren Zielen zu schicken.