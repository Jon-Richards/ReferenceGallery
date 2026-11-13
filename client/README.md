# Client

> While care has been taken to keep the docs up to date, the sources of truth
> are `package.json`, `angular.json`, and `tsconfig.json`.

## Overview

The client side application is comprised of two projects: Site and Style Guide.

Site is the main client side web application that the user interacts with.
Style Guide is a library of presentational components that can be by other
projects for building a consistent UI.

## Building The Project

### 1: Build the Style Guide

```bash
npx ng build style-guide

# Watch mode:
npx ng build style-guide --watch
```

### 2: Build the Site

```bash
npx ng build site

# Watch mode:
npx ng build-site --watch
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

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
