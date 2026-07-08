# FanAtlas Decisions

Version: 0.2
Status: Active
Owner: FanAtlas Team
Last Updated: 2026-07-07

---

# Product Principles

These principles guide every product and engineering decision.

1. Delight the fan.
2. Keep It Simple (KIS).
3. Power of Concision.
4. Ship visible value.
5. Preserve memories, not data.
6. The map is the hero.

---

# Decisions

## D-001

English is the first supported language.

---

## D-002

The first Atlas is dedicated to Manchester City supporters.

---

## D-003

Supporters are displayed using Manchester City blue circles.

Pins shall not be used.

---

## D-004

GPS coordinates are selected by clicking on the map.

Manual coordinate entry is not supported.

---

## D-005

No user accounts.

The application is publicly accessible.

---

## D-006

Each fan has a permanent public URL.

---

## D-007

Fan IDs are human-readable.

Example:

Carlos-127

---

## D-008

Each fan profile contains:

- Name
- City
- Country
- GPS Coordinates
- One Photo
- One Story

---

## D-009

The public profile does not display the meeting date.

---

## D-010

The application is entirely browser-based.

No backend is required for the MVP.

---

## D-011

The project shall remain free to operate for small datasets.

---

## D-012

Requirements.md and Decisions.md are the single source of truth.

---

## D-013

Development follows small, testable increments.

Each session should produce a visible improvement.

---

## D-014

The local VS Code folder is the development workshop.

GitHub is the publishing platform.

---

## D-015

The map is always the primary interface.

Lists, cards and forms complement the map rather than replace it.

---

## D-016

The right-side panel is the primary editing interface.

Dialogs and pop-ups should be avoided whenever possible.

---

## D-017

The application consistently uses the term "Fan".

The term "Supporter" shall not be used in the user interface or codebase.

---

## D-018

The Escape key closes the Fan Panel.

Keyboard shortcuts should follow common desktop conventions.

---

## D-019

Every feature shall be evaluated from the fan's perspective.

Technical elegance is secondary to user delight.

---

## D-020

Minimize friction.

Examples:

- GPS captured automatically.
- Fan Panel opens automatically.
- Cursor automatically placed in the first field.
- Escape closes the panel.
- Minimize clicks and typing.

---

## D-021

UI component names shall be domain-specific.

Examples:

- fanPanel
- fanCard
- fanList
- fanMarker

Avoid generic names such as:

- panel
- content
- header

---

## D-022

Every development session should end with a visible improvement.

Visible progress is preferred over infrastructure work whenever possible.

---

## D-023

When several implementations satisfy the requirements, choose the one that creates the most memorable experience for the fan.

User delight is a primary design criterion.

---
