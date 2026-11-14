# Client

> While care has been taken to keep the docs up to date, the sources of truth
> are `package.json`, `angular.json`, and `tsconfig.json`.

## Overview

The client side application is divided into three layers:
- Core Libraries ("Core")
- Features
- Pages

Core Libraries are units of base functionality.  Core Libraries may be types
definitions, pipes, services, utilities, and granular presentational components.
Core Libraries may only inherit from third party dependencies, e.g. Lodash.
Core Libraries should never communicate with the server layer directly.

Features are cohesive units of complex functionality.  Features may import Core
Libraries.  Features may have their own internal state. Features may NOTcommunicate directly with the server layer.  Features are often shared across two or more Pages.

Pages can be thought of as "screens" or "views".  To keep bundle sizes down,
each Page is a unique Angular application.  Pages may compose multiple Features
into a cohesive client side web application, and are responsible for managing
communication back to the server.  Pages may also control global state.  They
may inherit from Core libraries and Features alike.

## Building The Project

### 1: Build the Core Libraries

```bash
npx ng build core

# Watch mode:
npx ng build core --watch
```

### 2: Build the Features

```bash
npx ng build features

# Watch mode:
npx ng build features --watch
```

### 3: Build the desired Page
```bash
npx ng build my-page

# Watch mode:
npx ng build my-page --watch
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Code scaffolding

Use Angular's CLI for scaffolding new Core libraries, Features, and Pages.

To generate a Page:

```bash
npx ng generate my-page -o ./projects/pages/my-page --routing=false --ssr=false --standalone=true
```

To generate a component:

```bash
npx ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
npx ng generate --help
```


## Building

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
npx ng test
```


## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
npx ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
