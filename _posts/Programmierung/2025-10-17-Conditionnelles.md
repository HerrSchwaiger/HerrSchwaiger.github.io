---
layout: single
title: "Structures conditionnelles"
date: 2025-10-17 00:02
permalink: /Programmierung/Verzweigungen_french/
categories:
 - Programmierung
tags:
 - Verzweigungen
 - Kontrollstrukturen
difficulty: french
published: false
header:
  teaser: "assets/images/verzweigungen.png"
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/verzweigungen.png
toc: true
toc_label: "Contenu"
---

Imagine un jeu où la même chose se passe toujours - peu importe ce que tu fais. Ennuyeux, n'est-ce pas ? Les programmes et les jeux ne deviennent intéressants que lorsqu'ils peuvent **réagir différemment** à des situations différentes.

- Le joueur a-t-il assez de pièces pour acheter un objet ?
- Le niveau est-il déjà débloqué ?
- Quelle arme le joueur porte-t-il actuellement ?

Pour de telles décisions, nous avons besoin de **structures conditionnelles** (*Verzweigungen*). Elles permettent à l'ordinateur de vérifier des conditions et d'effectuer différentes actions selon le résultat.

---

## La structure conditionnelle simple : if

La forme la plus simple d'une structure conditionnelle est le **if** (en français : "si"). L'ordinateur vérifie une condition - si elle est vraie, le code est exécuté.

**Voici à quoi cela ressemble :**
```java
if (Bedingung) {  // Bedingung = condition
    // Dieser Code wird ausgeführt, wenn die Bedingung true ist
}
```

**Exemple :**
```java
boolean muenzen = 100;

if (muenzen > 99) {
    System.out.println("Du hast genug für das neue Schwert!");
    // Kaufen...
}
```

Si la condition est **vraie**, le code entre les accolades `{ }` est exécuté. Si elle est **fausse**, rien ne se passe - le programme continue simplement avec le code suivant.

---

## La structure conditionnelle à deux branches : if-else

Souvent, nous voulons que quelque chose se passe dans **les deux cas** - que la condition soit vraie ou fausse. Pour cela, il y a **else** (en français : "sinon").

**Voici à quoi cela ressemble :**
```java
if (Bedingung) {  // Bedingung = condition
    // Code wenn Bedingung true
} else {
    // Code wenn Bedingung false
}
```

**Exemple :**
```java
int level = 11;

if (level < 10) {
    System.out.println("du bist leider zu schwach...");
} else {
    System.out.println("Du bist stark genug.");
    // Dungeon beginnt...
}
```

**Toujours** l'un des deux blocs est exécuté - soit le bloc if, soit le bloc else. Les deux en même temps, ce n'est pas possible !

---

## Plusieurs possibilités : else-if

Parfois, il y a **plus de deux possibilités**. Un objet peut être "Légendaire", "Rare" ou "Normal". Une quête peut avoir différents niveaux de difficulté. Pour cela, nous combinons **if**, **else if** et **else**.

**Voici à quoi cela ressemble :**
```java
if (Bedingung1) {  // Bedingung = condition
    // Code wenn Bedingung1 wahr
} else if (Bedingung2) {
    // Code wenn Bedingung2 wahr
} else if (Bedingung3) {
    // Code wenn Bedingung3 wahr
} else {
    // Code wenn alle Bedingungen falsch
}
```

**Exemple :**
```java
int level = 25;

if (level < 10) {
    System.out.println("trop faible, donjon impossible");
} else if (level < 15) {
    System.out.println("très difficile");
} else if (level < 20) {
    System.out.println("tu es prêt");
} else {
    System.out.println("suréquipé, donjon très facile");
}
```

**Important :** L'ordinateur vérifie les conditions **de haut en bas**. Dès qu'une condition est **vraie**, seul ce bloc est exécuté et le reste est ignoré !

Teste ta compréhension : Fais glisser les valeurs de niveau vers les sorties correspondantes.

<div style="position: relative; padding-bottom: 80%; height: 0; margin: 2em 0; border: 2px solid #4a90e2; border-radius: 8px; overflow: hidden;">
  <iframe 
    src="/assets/h5p/verzweigungen-pap-dragdrop.html" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    frameborder="0">
  </iframe>
</div>

---

## Opérateurs de comparaison pour les nombres

Pour formuler des conditions, nous avons besoin d'**opérateurs de comparaison** (*Vergleichsoperatoren*):

| Operator | Bedeutung | Exemple true|  Exemple false |
|----------|-----------|----------|----------|
| `==` | ist gleich (est égal à) | `5 == 5` | `5 == 6 `|
| `!=` | ist nicht gleich (ce n'est pas pareil) | `5 != 6` | `5 != 5` |
| `>` | größer als (plus grand que) | `7 > 3` | `3 > 7` |
| `>=` | größer gleich als (plus grand ou égal à) | `3 >= 3` | `2 >= 3`|
| `<` | kleiner als (plus petit que) | `2 < 8` | |`8 < 2`|
| `<=` | kleiner gleich als (plus petit ou égal à) | `5 <= 8` | `9 <= 8 `| 

**Exemples :**
```java
int energie = 75;

if (energie == 75) {
    System.out.println("L'énergie est exactement 75");
}

if (energie > 50) {
    System.out.println("Assez d'énergie pour une attaque spéciale !");
}

if (energie < 100) {
    System.out.println("L'énergie n'est pas pleine");
}
```

{: .notice--warning}
**Attention :** Pour une comparaison, on utilise **deux** signes égal `==`, pas un seul ! Un seul `=` est l'affectation (*Zuweisung*) d'une valeur à une variable, comme tu le sais déjà grâce au cours sur les [types de données](/Programmierung/NumerischeDatentypen_medium/).

## Comparer des Strings avec equals()

Pour les **Strings** (chaînes de caractères), `==` ne fonctionne pas comme prévu, car il ne compare pas directement le contenu. C'est pourquoi il existe la méthode `.equals()`.

```java
String waffe = "Schwert";

if (waffe.equals("Schwert")) {  // C'est ainsi que c'est correct !
    System.out.println("Tu portes une épée");
}
```