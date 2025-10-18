---
layout: single
title: "Verzweigungen"
date: 2025-10-17 00:01
permalink: /Programmierung/Verzweigungen_easy/
categories:
 - Programmierung
tags:
 - Verzweigungen
 - Kontrollstrukturen
difficulty: easy
published: true
header:
  teaser: "assets/images/verzweigungen_easy.png"
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/verzweigungen_easy.png
toc: true
toc_label: "Contents"
---

Programme werden erst dann spannend, wenn sie auf unterschiedliche Situationen reagieren können. Genau dafür gibt es **Verzweigungen**!

## Was ist eine Verzweigung?

Eine Verzweigung ist eine Entscheidung im Programm:

- Hat der Spieler genug Münzen?
- Ist das Level freigeschaltet?

Der Computer prüft eine **Bedingung** und macht dann etwas Bestimmtes.

---

## if - Die einfache Verzweigung

Mit **if** (deutsch: "wenn") kann der Computer prüfen, ob etwas wahr ist.

**So schreibt man es:**
```java
if (Bedingung) {
    // Code der ausgeführt wird
}
```

**Beispiel:**
```java
int muenzen = 100;

if (muenzen > 99) {
    System.out.println("Du hast genug für das Schwert!");
}
```

Wenn du 100 Münzen hast, wird der Text ausgegeben. Wenn du weniger hast, passiert nichts.

---

## if-else - Zwei Möglichkeiten

Manchmal möchten wir, dass **immer** etwas passiert - egal ob die Bedingung wahr oder falsch ist. Dafür gibt es **else** (deutsch: "sonst").

**So schreibt man es:**
```java
if (Bedingung) {
    // Code wenn WAHR
} else {
    // Code wenn FALSCH
}
```

**Beispiel:**
```java
int level = 11;

if (level < 10) {
    System.out.println("Du bist zu schwach...");
} else {
    System.out.println("Du bist stark genug!");
}
```

Jetzt wird **immer** eine der beiden Möglichkeiten ausgeführt.

---

## Vergleichen mit ==, > und <

Um Bedingungen zu schreiben, brauchen wir Vergleichszeichen:

| Zeichen | Bedeutung | Beispiel |
|---------|-----------|----------|
| `==` | ist gleich | `level == 10` |
| `>` | größer als | `level > 10` |
| `<` | kleiner als | `level < 10` |

**Beispiel:**
```java
int energie = 50;

if (energie > 30) {
    System.out.println("Genug Energie!");
}
```

{: .notice--warning}
**Wichtig:** Für Vergleiche braucht man **zwei** Gleichheitszeichen `==`! Ein einzelnes `=` ist zum Speichern von Werten da.

---

## Texte vergleichen mit equals()

Bei Texten (Strings) funktioniert `==` nicht! Stattdessen schreibt man `.equals()`.

**Beispiel:**
```java
String waffe = "Schwert";

if (waffe.equals("Schwert")) {
    System.out.println("Du trägst ein Schwert");
}
```

**Merke dir:** 
- Zahlen: `==`
- Texte: `.equals()`

---

## 🎮 Übung: Programmablaufpläne zuordnen

Teste dein Wissen! Ziehe die Code-Beispiele zu den passenden Programmablaufplänen.

<div style="margin: 2em 0; border: 2px solid #4a90e2; border-radius: 8px; overflow: hidden;">
  <iframe 
    src="/assets/h5p/verzweigungen-pap-dragdrop.html" 
    width="100%" 
    height="650" 
    frameborder="0"
    style="display: block;">
  </iframe>
</div>

