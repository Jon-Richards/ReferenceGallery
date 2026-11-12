# Reference Gallery

A web based tool for managing artistic references.


## Motivation

This project is a relatively simple application for managing (categorizing,
adding, removing, and viewing) large amounts of artistic references.

> There are plenty of other options that solve this problem, this one is mine.


## Goals

- Provide a web application that enables a human user to manage large amounts
  of artistic references across multiple devices.  These may include but are not
  limited to:
  - Still images
  - Animated Gifs
  - Videos
- It must support both SFW ("safe or work") and NSFW ("not safe for work")
  content.  This means NSFW content must be gated behind appropriate guardrails.
- It must provide appropriate guardrails for work under copyright, e.g. assets
  under license to use as references but not under license for redistribution.
- Provide additional tooling that facilitates using references in a constructive
  manner, e.g. by providing color and composition breakdowns, support for timed
  exercises, etc.


## Architecture

### Client

The client side application is built in Angular 22, Tailwind, and a Vite based
build system.

### Server Side App

The server side application is built in .Net 10.

### Storage

SQLite was chosen as a persistent storage solution for its simplicity and
portability.
