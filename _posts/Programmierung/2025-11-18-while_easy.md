---
layout: single
title: "Die while-Schleife"
date: 2025-11-18 00:01
permalink: /Programmierung/While_easy/
categories:
 - Programmierung
tags:
 - While
 - Schleifen
difficulty: easy
published: true
header:
  teaser: "assets/images/While_easy.png"
  overlay_filter: "0.2"
  overlay_image: /assets/images/While_easy.png
toc: true
toc_label: "Inhalt"
---

Manchmal möchtest du, dass dein Programm etwas mehrmals macht. Dafür gibt es Schleifen. In diesem Beitrag lernst du die `while`-Schleife kennen. Es werden dabei zwei Arten unterschieden.

## Die kopfgesteuerte While-Schleife

Das Wort "while" bedeutet auf Deutsch "solange". Die while-Schleife läuft also "solange" die Bedingung stimmt.
Die klassische `while`-Schleife prüft die Bedingung am Anfang, also im "Kopf" der Schleife.

### So sieht es aus
```java
while (bedingung) {
    // Dieser Code wird wiederholt solange bedingung wahr ist‚
}
```

## Ein Countdown-Beispiel
```java
int countdown = 3;
while (countdown > 0) {
    System.out.println(countdown);
    countdown = countdown - 1;
}
System.out.println("Start!");
```

**Ausgabe:**
```bash
3
2
1
Start!
```

{: .notice--info}
**Tipp:**\\
Die Schleife prüft die Bedingung am Anfang. Wenn die Bedingung von Anfang an falsch ist, läuft die Schleife gar nicht.

## Die fußgesteuerte Do-While-Schleife

Es gibt noch eine zweite Art von While-Schleife: die `do-while`-Schleife.

### Der Unterschied

- **while**: Prüft die Bedingung **zuerst** im "Kopf" der Schleife
- **do-while**: Führt den Code **zuerst** aus und prüft dann im "Fuß" der Schleife

### So sieht es aus
```java
do {
    // Dieser Code wird mindestens einmal ausgeführt
} while (bedingung);
```

{: .notice--warning}
**Wichtig:**\\
Vergiss nicht das Semikolon `;` am Ende!

### Ein Beispiel
```java
int x = 10;
do {
    System.out.println("Hallo");
} while (x < 5);
```

Hier wird **einmal** "Hallo" ausgegeben, weil der Code vor der Prüfung läuft.

{: .notice--primary}
Mit einer kopfgesteuerten `while`-Schleife wäre hier nichts ausgegeben worden.