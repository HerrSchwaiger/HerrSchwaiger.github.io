---
layout: single
title: "Use Case Diagramm"
date: 2025-01-14 00:00:02
permalink: /Datenbanken/use-case-medium/
difficulty: "medium"
categories:
    - Anwendungsentwicklung
tags:
    - UML
    - Use-Case-Diagramm
header:
    teaser:  "assets/images/use-case.png"
    overlay_color: "#000" # Hintergrund-Overlay-Farbe
    overlay_filter: "0.7" # Transparenz des Overlays
    overlay_image: /assets/images/use-case.png # Hintergrundbild
---

Ein Use Case Diagramm, auch als Anwendungsfalldiagramm oder Nutzfalldiagramm bekannt, ist eine grafische Darstellung von Anwendungsfällen und deren Beziehungen zu Akteuren und anderen Anwendungsfällen. Es beschreibt auf abstrakte Weise, welche Funktionen und Dienste ein System für seine Benutzer bereitstellt. Dabei fokussiert es sich auf die Zusammenhänge zwischen Use Cases und Akteuren, ohne die Abläufe, Reihenfolgen oder Details der Funktionen zu definieren.

Dank dieser hohen Abstraktion ist das Use Case Diagramm ein ideales Werkzeug für die Anforderungsanalyse, da es hilft, Anforderungen zu ermitteln und zu verfeinern. Für detaillierte Abläufe und Reihenfolgen der Systemfunktionen werden hingegen andere UML-Diagramme wie Aktivitäts-, Zustands- oder Sequenzdiagramme genutzt.

## Online Buchungssystem

![image-center](/assets/images/buchung_hard.png){: .align-center}

### Akteure

Zuerst bestimmen wir die Akteure unseres Buchungssystems. Akteure können Personen sowie abstrakte Systeme sein. In unserem Fall benötigen wir die Akteure `Kunde` und `Zahlungssystem`. Das Zahlungssystem ist ein externer Service, der sich um die Zahlung kümmert und befindet sich damit, so wie alle Akteure, außerhalb unseres Systems. Die Akteure werden als Strichmännchen dargestellt oder alternativ können Sie auch in einem Rechteck mit der Beschriftung `<<actor>>` dargestellt werden. 

### System

Das System ist kein logisches Modellelement, sondern grenzt den Kontext ab. Dieser Kontext wird im Diagramm durch einen Rahmen dargestellt.

### Anwendungsfälle

Die eigentlichen Use Cases bzw. Anwendungsfälle werden innerhalb des Systems und als Ellipsen dargestellt. Für das Buchungssystem benötigen wir die folgenden Anwendungsfälle:
    - Zimmer suchen
    - Zimmer buchen
    - Zahlung durchführen
    - Anmelden

### Assoziationsbeziehung

Wenn ein Akteur mit einem Anwendungsfall kommuniziert, wird dies als Kommunikationsbeziehung oder Assoziation bezeichnet. In unserem Fall kann ein Kunde die Anwendungsfälle `Zimmer suchen` und `Zimmer buchen` ausführen. Assoziationen werden als Linie zwischen Akteur und Anwendungsfall dargestellt.


### Include-Beziehung

Die **Include**-Beziehung besteht immer zwischen Anwendungsfällen. Sie verbindet einen Use Case (Basis-Use Case) mit einem oder mehreren inkludierten Use Cases. Übersetzt heißt das: Ein Anwendungsfall braucht einen anderen Anwendungsfall, den inkludierten Use Case, um seine Funktionalität im System bereitstellen zu können. Der inkludierte Use Case kann aber separat ausgeführt werden.  Diese ist in einem Use Case-Diagramm durch einen gestrichelten Pfeil und der Beschriftung include dargestellt. Der Pfeil zeigt immer auf den inkludierten Use Case.

Im Online-Buchungssystem soll immer der er Anwendungsfall `Zahlung durchführen` ausgeführt werden, wenn `Zimmer buchen` ausgeführt wird:

### Extend-Beziehung

Werden Teile eines Anwendungsfalls nur unter definierten Bedingungen ausgeführt, bietet sich die Verwendung der Extend-Beziehung an. Die **Extend**-Beziehung erweitert also den Basis-Use Case um eine Funktionalität. Eine Extend-Beziehung wird durch einen gestrichelten Pfeil mit der Beschriftung extend visualisiert. Der Pfeil zeigt immer auf den Basis-Use Case. Mithilfe eines Rechtecks kann die Kondition, an welche die **Extend**-Beziehung gebunden ist, zusätzlich dargestellt werden.

Im Online-Buchungssystem wird eine **Extend**-Beziehung benötigt, um die Möglichkeit Massagen zusätzlich zum Zimmer zu buchen. Diese Erweiterung ist an die Bedingung gebunden, dass ein Termin für die Massage frei ist.


### Generalisierungs-Beziehung

Eine **Generalisierungs**-Beziehung kann zwischen Akteuren und zwischen Anwendungsfällen bestehen.
Die Generalisierung erinnert stark an die Vererbung im UML-Klassendiagramm. 
In unserem Beispiel "erbt" ein `Kunde` alle Use Cases des `Benutzer`.

Eine **Generalisierungs**-Beziehung zwischen Use Cases herrscht, wenn Sie einen allgemeinen Anwendungsfall definieren, der durch einen oder mehrere Anwendungsfälle spezifiziert wird.
Der allgemeine Anwendungsfall vererbt seine Kommunikationsbeziehung(en) an den spezifizierten Anwendungsfall. Der spezialisierte Use Case benötigt den Allgemeinen, kann ihn überschreiben oder ergänzen und erbt all seine Beziehungen.

Unser Beispiel kann man mit solch einer Beziehung erweitern, indem man mit `Suite suchen` den Use Case `Zimmer suchen` spezialisiert:


![image-center](/assets/images/buchung_hard2.png){: .align-center}

### Fazit
Ein Use Case Diagramm ist ein wertvolles Werkzeug für die Planung und Dokumentation von Systemanforderungen. Es erlaubt einen klaren Überblick darüber, wie ein System benutzt werden kann und welche Rollen und Funktionen beteiligt sind.