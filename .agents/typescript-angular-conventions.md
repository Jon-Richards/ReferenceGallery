# TypeScript/Angular Conventions

## Scope

Apply these conventions to the Angular client in `client/`.

## Formatting

- Prettier is the source of truth for formatting:
  - print width: 100 columns
  - single quotes
  - Angular parser for HTML files
- Run formatting through the lint scripts rather than introducing a separate style.
- Preserve the existing `*.component.ts`, `*.service.ts`, `*.pipe.ts`, and `*.directive.ts` naming patterns.

## TypeScript Configuration

- TypeScript targets ES2022 and preserves modules.
- `strict` is enabled.
- `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, `skipLibCheck`, `isolatedModules`, and `importHelpers` are enabled.
- `noUnusedLocals`, `noUnusedParameters`, and template strictness outside the configured Angular compiler settings are not enabled explicitly.
- Keep explicit types for public APIs and function boundaries where they improve correctness.
- Do not add `any` solely to bypass the compiler or ESLint.

## ESLint

The configuration is `client/eslint.config.mjs`.

- JavaScript uses the recommended JavaScript rules.
- TypeScript uses `typescript-eslint` recommended rules.
- Prettier violations are warnings through `eslint-plugin-prettier`.
- `eslint-config-prettier` disables formatting conflicts.
- Node/CommonJS globals are configured for JavaScript files; add a targeted exception rather than weakening the TypeScript configuration.
- TypeScript modules and function limits are configured:
  - modules: at most 200 lines
  - functions: at most 20 lines
  - cyclomatic complexity: at most 10
- Test files matching `*.spec.ts`, `*.test.ts`, or files under `tests/` are excluded from line and function-length limits.

Run from `client/`:

```bash
npm run lint
npm run lint:fix
```

Do not introduce lint ignores unless the rule conflicts with framework-generated or build-tool code.

## StyleLint

The configuration is `client/.stylelintrc`.

- `stylelint-config-standard` supplies the CSS conventions.
- `stylelint-prettier/recommended` applies Prettier-compatible style rules.
- `::ng-deep` is the only explicitly allowed non-standard pseudo-element.

From `client/`, use:

```bash
npm run lint
npm run lint:fix
```

The combined lint scripts check both TypeScript and CSS/SCSS. StyleLint is not installed as a separate command name.

## Angular

- Use standalone components when consistent with the Angular version and existing code.
- Keep public library exports through the project barrel files.
- Prefer dependency injection and RxJS/async APIs already used in the codebase.
- Use Angular templates and strict Angular compiler settings already configured in `angular.json` and `tsconfig.json`.
- Keep Core dependencies below Features and Views: Core should not depend on Features or server code.

## Testing

- Vitest is the test runner used by Angular.
- Test files use `*.spec.ts`.
- Run tests from `client/`:

```bash
npm test
npm run test
```

Do not claim separate watch or StyleLint scripts exist unless they are added to `package.json`.

## Pre-commit

Husky and lint-staged run on staged files:

- `*.ts`: ESLint with `--fix`
- `*.css` and `*.scss`: StyleLint with `--fix`

Fixing is allowed in the staged file set. Use `git commit --no-verify` only for an exceptional, documented reason.
