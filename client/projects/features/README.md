# Features

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.0.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build features
```

Or use environment-specific configurations:

```bash
# Development build (outputs to dist/features)
ng build features --project ./ng-package.dev.json

# Production build (outputs to server/src/Website/wwwroot/bundle/features)
ng build features --project ./ng-package.json
```

Build artifacts are placed in `dist/features` for development or `server/src/Website/wwwroot/bundle/features` for production, depending on which configuration is used.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the build output directory:

   ```bash
   cd server/src/Website/wwwroot/bundle/features
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
