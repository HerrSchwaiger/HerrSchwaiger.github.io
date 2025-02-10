---
layout: single
title: "Use Case Diagram"
date: 2025-01-14 00:00:03
permalink: /Anwendungsentwicklung/use-case-hard/
difficulty: "hard"
categories:
    - Anwendungsentwicklung
tags:
    - UML
    - Use Case Diagramm
header:
    teaser:  "assets/images/useCaseHard.png"
    overlay_color: "#000" # Background overlay color
    overlay_filter: "0.7" # Overlay transparency
    overlay_image: /assets/images/useCaseHard.png # Background image
---

A **Use Case Diagram** is a graphical representation of use cases and their relationships with actors and other use cases. It abstractly illustrates what functions and services a system provides to its users, focusing on the interactions between use cases and actors without detailing workflows, sequences, or function specifics.

Due to this high level of abstraction, a Use Case Diagram is an ideal tool for **requirements analysis**, helping to identify and refine system requirements. However, for more detailed workflows and functional sequences, other UML diagrams such as Activity Diagrams, State Diagrams, or Sequence Diagrams are used.

## Online Booking System

![image-center](/assets/images/buchung_hard.png){: .align-center}

### Actors

The first step in creating a Use Case Diagram is identifying the **actors** involved in the system. Actors can be both **humans and external systems**. In our online booking system, we define two key actors:
- `Kunde`
- `Zahlungssystem`

The `Zahlungssystem` is an external service handling transactions, existing **outside** our system. Actors are typically represented as **stick figures** but can also be enclosed in a rectangle labeled `<<actor>>`.

### System Boundary

The system itself is not a logical model element but rather defines the **context** of the diagram. The **system boundary** is illustrated as a rectangle encapsulating the system’s use cases.

### Use Cases

Use cases represent the **core functionalities** of the system. They are placed **inside the system boundary** and depicted as ellipses. For the online booking system, the essential use cases are:
- Zimmer suchen
- Zimmer buchen
- Zahlung durchführen
- Anmelden

### Association Relationship

When an **actor interacts with a use case**, this interaction is called an **association relationship**. In our example, the `Kunde` can perform the use cases `Zimmer suchen` and `Zimmer buchen`. Associations are visually represented by **a simple line** connecting an actor and a use case.

### Include Relationship

An **include relationship** exists exclusively between use cases. It links a base use case to one or more included use cases. The meaning: a use case **requires** another use case to function, but the included use case can also be executed independently. In a Use Case Diagram, this is visualized by a **dashed arrow labeled `<<include>>`**, pointing towards the included use case.

In our **online booking system**, the `Zahlung durchführen` use case is always executed when a `Zimmer buchen` use case is triggered:

### Extend Relationship

If certain parts of a use case should be executed **only under specific conditions**, an **extend relationship** is used. The **extend relationship** enhances a base use case with additional functionality. It is depicted as a **dashed arrow labeled `<<extend>>`**, pointing **toward the base use case**. An optional rectangle can specify the condition that triggers the extension.

In the online booking system, we need an **extend relationship** to enable optional services like `Massage buchen` along with the room. This extension is only available **if a massage slot is available**.

### Generalization Relationship

A **generalization relationship** can exist **between actors and between use cases**.

- **Between Actors**: The generalization concept is similar to **inheritance** in UML class diagrams. In our example, a `Kunde` inherits all use cases from a `Nutzer`.
- **Between Use Cases**: A generalization relationship exists when a **general use case** is refined by one or more **specific use cases**. The general use case passes down its association relationships to its specialized use cases. The specialized use case **inherits, overrides, or extends** the behavior of the general use case.

In our example, we can introduce generalization by **specializing** `Zimmer suchen` into `Suite suchen`:

![image-center](/assets/images/buchung_hard2.png){: .align-center}

### Conclusion
A **Use Case Diagram** is a powerful tool for **system planning and documentation**. It provides a **clear overview** of how a system is used and which roles and functions are involved. While it does not describe detailed workflows, it helps identify core **functionalities and interactions** within a system, making it a crucial part of software design and requirements engineering.

