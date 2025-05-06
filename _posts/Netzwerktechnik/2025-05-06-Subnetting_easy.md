---
layout: single
title: "Subnetting"
date: 2025-05-06 00:00:01
permalink: /Netzwerktechnik/Subnetting_easy/
categories:
  - Netzwerktechnik
tags:
  - Subnetting
difficulty: easy
published: true
header:
    teaser: "assets/images/subnetting_easy.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/subnetting_easy.jpg

toc: true
toc_label: "Inhalt"
---

Subnetting ist ein wichtiges Konzept in der Netzwerktechnik. Es hilft dabei, ein großes Netzwerk in kleinere Teile, sogenannte Subnetze, zu teilen. Das macht das Netzwerk effizienter und sicherer. In diesem Blogpost erklären wir, was Subnetting ist und zeigen einfache Beispiele.

<script>
    window.jekyllData = {
        difficulty: "{{ page.difficulty | escape }}",
    };
</script>

<script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

## Was ist Subnetting?

<style>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
<figure>
    <img src="/assets/images/IP_address.png" width="400"/>
    <figcaption>Fig1: Aufbau der Subnetzmaske</figcaption>
</figure>

Subnetting teilt ein IP-Netzwerk in kleinere Netze, indem die Subnetzmaske geändert wird. Die Subnetzmaske bestimmt, welcher Teil der IP-Adresse das Netzwerk und welcher Teil die Geräte (Hosts) darstellt. Wenn wir den Netzwerkteil vergrößern, entstehen mehr kleine Netze.

<figure>
    <img src="/assets/images/IP_address_2.png" width="400"/>
    <figcaption>Fig2: Vergrößern des Netzwerkanteils</figcaption>
</figure>

Wenn der Netzwerkteil um zwei Bits vergrößert wird, entstehen vier neue Netze:

<figure>
    <img src="/assets/images/Subnetting.png" width="400"/>
    <figcaption>Fig3: Subnetting mit zwei zusätzlichen Netzbits</figcaption>
</figure>

Ein Hostanteil aus **nur Nullen** ist immer die Netzadresse, und ein Hostanteil aus **nur Einsen** ist die Broadcast-Adresse. Die Anzahl der **nutzbaren IP-Adressen** in einem Subnetz ist dann $$ 2^{32-L'}-2 $$, wobei $$L'$$ die neue Präfixlänge ist.

## Interaktives Tool

Möchten Sie ein Gefühl für das Subnetting bekommen? Probieren Sie unser interaktives Tool aus! Mit diesem Tool können Sie die Präfixlänge zwischen 24 und 30 Bits verändern und sehen, wie sich die Subnetze entsprechend anpassen. Der Ausgangspunkt ist ein Netzwerk mit einer Präfixlänge von 24. Die farbigen Boxen darunter zeigen die entstehenden Subnetze an.

<label id="sliderValue" for="subnetSlider">Präfixlänge (Bits):</label>

<input type="range" id="subnetSlider" class="slider" min="24" max="30" value="24">
<div class="result" id="result"></div>

<script src="/assets/js/subnetCalculator.js"></script>

{: .notice--info}
**Vertiefungsfrage:**
Warum ist der maximale Wert für die Präfixlänge 30?

## Beispiel

Wir teilen den Adressbereich **172.16.0.0/16** in **15** Subnetze auf.
1. Für 15 Netze erhöhen wir die Präfixlänge um 4 Bits, da $$ 2^4 = 16 $$. Die **neue Präfixlänge** ist damit: $$L'= 16+4 = 20$$.
2. Bei einer Präfixlänge von 20 gibt es $$ 2^{32-20} - 2 = 4094 $$ **nutzbare Adressen pro Subnetz**.
3. Die **Netzwerk-Adressen** und **Broadcast-Adressen** sind:

    | Subnetz Nr. | Netzwerk-Adresse | Broadcast-Adresse |
    | ----------- | ---------------- | ----------------- |
    | 1           | 172.16.0.0       | 172.16.15.255     |
    | 2           | 172.16.16.0      | 172.16.31.255     |
    | 3           | 172.16.32.0      | 172.16.47.255     |
    | ...         | ...              | ...               |
    | 15          | 172.16.224.0     | 172.16.239.255    |

Der Unterschied zwischen zwei Netzwerkadressen beträgt hier genau **16**. Das liegt daran, dass der zusätzliche Netzwerkteil in der binären Darstellung in 16er-Schritten zählt.

## Fazit

Subnetting hilft dabei, Netzwerke besser zu organisieren. Es macht sie effizienter und sicherer. Mit ein wenig Übung kann jeder das Konzept verstehen und anwenden.
