# Overall Code Conventions

## Scope

Apply these conventions to code in this repository unless a language-specific skill defines a narrower rule.

## Complexity

- Keep cyclomatic complexity at 10 or below per function or method.
- Prefer functions under 20 lines of executable code.
- Extract branching, validation, transformation, and orchestration into named functions when a function becomes difficult to understand.
- Prefer early returns and guard clauses to deeply nested control flow.
- Do not split a function merely to satisfy a line limit if the result is less cohesive.

## SOLID

- **Single Responsibility:** each type and function should have one clear reason to change.
- **Open/Closed:** extend behavior through existing abstractions instead of modifying stable implementations.
- **Liskov Substitution:** derived types must preserve the behavior and contracts of their base types.
- **Interface Segregation:** keep interfaces small and specific to their consumers.
- **Dependency Inversion:** depend on abstractions for meaningful boundaries, infrastructure, and external services.

## Names and Readability

- Prefer descriptive names that communicate purpose and domain meaning.
- Avoid abbreviations and shortened identifiers unless they are universally established in the codebase or domain.
- Prefer full names such as `customer`, `configuration`, and `response` over `cust`, `cfg`, and `res`.
- Avoid names that describe implementation rather than intent.
- Prefer symmetry and consistent vocabulary across the surrounding module.
- Do not use comments to explain unclear names; rename or extract the unclear code.

## Constants and Magic Numbers

- Do not use unexplained literals for meaningful limits, durations, indexes, status values, permissions, or configuration.
- Define domain constants or named configuration values.
- Preserve literal values that are inherent and clear, such as `0`, `1`, empty strings, or a loop terminator.

## Documentation

- Add documentation blocks to public methods and public types when their purpose, parameters, return value, or exceptions are not obvious from the signature and name.
- Keep documentation accurate and concise.
- Document contracts, units, side effects, and error behavior when relevant.
- Prefer descriptive names and small functions over inline comments.
- Add inline comments only for non-obvious invariants, platform constraints, or tradeoffs that cannot be expressed clearly in code.

## Testing and Changes

- Add or update focused tests for behavior changes and new edge cases.
- Keep code changes small and surgical.
- Separate unrelated refactors from behavioral fixes.
- Make existing conventions explicit in code rather than relying on reviewer memory.
