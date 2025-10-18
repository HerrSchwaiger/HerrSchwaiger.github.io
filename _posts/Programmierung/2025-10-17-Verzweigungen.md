---
layout: single
title: "Verzweigungen"
date: 2025-10-17 00:02
permalink: /Programmierung/Verzweigungen_medium/
categories:
 - Programmierung
tags:
 - Verzweigungen
 - Kontrollstrukturen
difficulty: medium
published: true
header:
  teaser: "assets/images/verzweigungen.png"
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/verzweigungen.png
toc: true
toc_label: "Contents"
---

Stell dir ein Spiel vor, in dem immer das Gleiche passiert - egal was du tust. Langweilig, oder? Programme und Spiele werden erst dann interessant, wenn sie auf unterschiedliche Situationen **unterschiedlich reagieren** können.

- Hat der Spieler genug Münzen, um ein Item zu kaufen?
- Ist das Level bereits freigeschaltet?
- Welche Waffe trägt der Spieler gerade?

Für solche Entscheidungen brauchen wir **Verzweigungen**. Sie ermöglichen es dem Computer, Bedingungen zu prüfen und je nach Ergebnis verschiedene Dinge zu tun.

---

## Die einfache Verzweigung: if

Die einfachste Form einer Verzweigung ist das **if** (deutsch: "wenn"). Der Computer prüft eine Bedingung - wenn sie wahr ist, wird der Code ausgeführt.

**So sieht es aus:**
```java
if (Bedingung) {
    // Dieser Code wird ausgeführt, wenn die Bedingung WAHR ist
}
```

**Beispiel:**
```java
boolean muenzen = 100;

if (muenzen > 99) {
    System.out.println("Du hast genug für das neue Schwert!");
    // Kaufen...
}
```

Wenn die Bedingung **wahr** ist, wird der Code in den geschweiften Klammern `{ }` ausgeführt. Wenn sie **falsch** ist, passiert nichts - das Programm macht einfach weiter mit dem nächsten Code.

---

## Die zweiseitige Verzweigung: if-else

Oft möchten wir, dass in **beiden Fällen** etwas passiert - egal ob die Bedingung wahr oder falsch ist. Dafür gibt es **else** (deutsch: "sonst").

**So sieht es aus:**
```java
if (Bedingung) {
    // Code wenn Bedingung WAHR
} else {
    // Code wenn Bedingung FALSCH
}
```

**Beispiel:**
```java
int level = 11;

if (level < 10) {
    System.out.println("du bist leider zu schwach...");
} else {
    System.out.println("Du bist stark genug.");
    // Dungeon beginnt...
}
```

Es wird **immer** einer der beiden Blöcke ausgeführt - entweder der if-Block oder der else-Block. Beide gleichzeitig gibt es nicht!

---

## Mehrere Möglichkeiten: else-if

Manchmal gibt es **mehr als zwei Möglichkeiten**. Ein Item kann "Legendär", "Selten" oder "Normal" sein. Eine Quest kann verschiedene Schwierigkeitsstufen haben. Dafür kombinieren wir **if**, **else if** und **else**.

**So sieht es aus:**
```java
if (Bedingung1) {
    // Code wenn Bedingung1 wahr
} else if (Bedingung2) {
    // Code wenn Bedingung2 wahr
} else if (Bedingung3) {
    // Code wenn Bedingung3 wahr
} else {
    // Code wenn alle Bedingungen falsch
}
```

**Beispiel:**
```java
int level = 25;

if (level < 10) {
    System.out.println("zu schwach, dungeon unmöglich");
} else if (level < 15) {
    System.out.println("sehr schwer");
} else if (level < 20) {
    System.out.println("du bist bereit");
} else {
    System.out.println("overleveled, dungeon sehr leicht");
}
```

**Wichtig:** Der Computer prüft die Bedingungen **von oben nach unten**. Sobald eine Bedingung **wahr** ist, wird nur dieser Block ausgeführt und der Rest wird übersprungen!

Teste dein Verständnis, Ziehe die level Werte zu den passenden Ausgabe-Werten.

<div style="position: relative; padding-bottom: 80%; height: 0; margin: 2em 0; border: 2px solid #4a90e2; border-radius: 8px; overflow: hidden;">
  <iframe 
    src="/assets/h5p/verzweigungen-pap-dragdrop.html" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    frameborder="0">
  </iframe>
</div>

---

## Vergleichsoperatoren für Zahlen

Um Bedingungen zu formulieren, brauchen wir **Vergleichsoperatoren**. Hier sind die wichtigsten drei:

| Operator | Bedeutung | Beispiel |
|----------|-----------|----------|
| `==` | ist gleich | `5 == 5` |
| `>` | größer als | `7 > 3` |
| `>=` | größer gleich als | `3 >= 3` |
| `<` | kleiner als | `2 < 8` |
| `<=` | kleiner gleich als | `5 <= 8` |

**Beispiele:**
```java
int energie = 75;

if (energie == 75) {
    System.out.println("Energie ist genau 75");
}

if (energie > 50) {
    System.out.println("Genug Energie für einen Spezialangriff!");
}

if (energie < 100) {
    System.out.println("Energie ist nicht voll");
}
```

{: .notice--warning}
**Achtung:** Für einen Vergleich verwendet man **zwei** Gleichheitszeichen `==`, nicht nur eins! Ein einzelnes `=` ist die Zuweisung eines Wertes an eine Variable, wie du ja bereits aus [Datentypen](/Programmierung/NumerischeDatentypen_medium/) weißt.

## Strings vergleichen mit equals()

Bei **Strings** funktioniert `==` nicht wie erwartet, weil es nicht direkt den Inhalt vergleicht. Deshalb gibt es die Methode `.equals()`.

```java
String waffe = "Schwert";

if (waffe.equals("Schwert")) {  // So ist es korrekt!
    System.out.println("Du trägst ein Schwert");
}
```