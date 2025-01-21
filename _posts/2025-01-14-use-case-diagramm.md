---
layout: single
title: "Use-Case-Diagramm  "
date: 2025-01-14
permalink: /Datenbanken/use-case
difficulty: "hard"
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

### Akteure

Zuerst bestimmen wir die Akteure unseres Buchungssystem. Akteure können Personen sowie abstrakte Systeme sein. In unserem Fall benötigen wir die Akteure "Kunde", "Mitarbeiter" und "Zahlungssystem". Das Zahlungssystem ist ein externer Service der sich um die Zahlung kümmert und befindet sich damit, so wie alle Akteure, außerhalb unseres Systems. Die Akteure werden als Strichmännchen dargestellt.

### System

Das System ist kein logisches Modellelement sondern grenzt den Kontext ab. Dieser Kontext wird im Diagramm durch einen Rahmen dargestellt.

### Anwendungsfälle

Die eigentlichen Use-Cases bzw. Anwendungsfälle werden innerhalb des Systems und als Ellipsen dargestellt. Für das Buchungssystem benötigen wir die folgenden Anwendungsfälle:
    - Zimmer suchen
    - Zimmer buchen
    - Zimmer verwalten
    - Buchung verwalten
    - Zahlung durchführen

### Assoziationsbeziehung

Wenn ein Akteur mit einem Anwendungsfall kommuniziert, wird dies als Kommunikationsbeziehung oder Assoziation bezeichnet. In unserem Fall kann ein Kunde die Anwendungsfälle "Zimmer suchen" und "Zimmer buchen" ausführen und ein Mitarbeiter die Anwendungsfälle "Zimmer verwalten" und "Buchung verwalten". Assoziationen werden als Linie zwischen Akteur und Anwendungsfall dargestellt.


![image-center](/assets/images/use_case_1.png){: .align-center}

### Include-Beziehung

Die **Include**-Beziehung besteht immer zwischen Anwendungsfällen. Sie verbindet einen Use Case (Basis-Use Case) mit einem oder mehreren inkludierten Use Cases. Übersetzt heißt das: Ein Anwendungsfall braucht einen anderen Anwendungsfall, dem inkludierten Use Case, um seine Funktionalität im System bereitstellen zu können. Der inkludierte Use Case kann aber separat ausgeführt werden.  Diese ist in einem Use Case-Diagramm durch einen gestrichelten Pfeil und der Beschriftung include dargestellt. Der Pfeil zeigt immer auf den inkludierten Use Case.

Im Online-Buchungssystem soll immer der er Anwendungsfall "Zahlung durchführen" ausgeführt werden wenn "Zimmer buchen" ausgeführt wird:

![image-center](/assets/images/use_case_2.png){: .align-center}

### Extend-Beziehung

Werden Teile eines Anwendungsfalls nur unter definierten Bedingungen ausgeführt, bietet sich die Verwendung der Extend-Beziehung an. Die **Extend**-Beziehung erweitert also den Basis-Use Case um eine Funktionalität. Eine Extend-Beziehung wird durch einen gestrichelten Pfeil mit der Beschriftung extend visualisiert. Der Pfeil zeigt immer auf den Basis-Use Case.

Im Online-Buchungssystem wird eine **Extend**-Beziehung benötigt um die Möglichkeit Massagen zusätzlich zum Zimmer zu buchen einzubauen:

![image-center](/assets/images/use_case_3.png){: .align-center}

### Generalisierungs-Beziehung

Eine **Generalisierungs**-Beziehung kann zwischen Akteuren und zwischen Anwendungsfällen bestehen.
Die Generalisierung erinnert stark an die Vererbung im UML-Klassendiagramm. Eine Generalisierungs-Beziehung zwischen Akteuren herrscht, wenn Sie unterschiedliche Akteure definieren, aber diese über gleiche Eigenschaften verfügen. Dann definieren Sie einen allgemeinen Akteur, auf den die beiden Akteure zeigen.
Die spezialisierten Akteure können mindestens die Rollen der allgemeinen Akteure übernehmen.

Im Online-Buchungstool müssen sowohl Kunden als auch Mitarbeiter sich vor der Benutzung anmelden. Da beide Akteure dieses Verhalten teilen definieren wir einen allgemeinen Akteur "Benutzer":

![image-center](/assets/images/use_case_4.png){: .align-center}

Eine Generalisierungs-Beziehung zwischen Use Cases herrscht, wenn Sie einen allgemeinen Anwendungsfall definieren, der durch einen oder mehreren Anwendungsfälle spezifiziert wird.
Der allgemeine Anwendungsfall vererbt seine Kommunikationsbeziehung(en) an den spezifizierten Anwendungsfall. Der spezialisierte Use Case benötigt den Allgemeinen, kann ihn überschreiben oder ergänzen und erbt all seine Beziehungen.

In unserem Beispiel spezialisieren wir den Anwendungsfall "Zimmer verwalten" mit den Anwendungsfällen "Preis ändern" und "Zeitraum blockieren":

![image-center](/assets/images/use_case_5.png){: .align-center}