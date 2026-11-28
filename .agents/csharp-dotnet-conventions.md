# C#/.NET Conventions

## Scope

Apply these conventions to the .NET solution in `server/`. The authoritative source for code style is `server/.editorconfig`.

## Source Length

- C# source files under `server/src/` must not exceed 200 lines, excluding generated EF Core migrations.
- Test projects, CSS, HTML, and Razor files are excluded from this source-length check.
- The check runs during `dotnet build` through `server/check-source-lines.ps1`.

## Formatting

The `.editorconfig` specifies:

- spaces, not tabs
- four-space indentation
- CRLF line endings
- UTF-8 BOM
- trimmed trailing whitespace
- final newline

Use:

```csharp
if (condition)
{
    DoSomething();
}
```

Keep open braces on a new line, except where generated or framework code already establishes a local exception.

## Type System

Both projects enable:

- nullable reference types
- implicit usings

Prefer null-safe APIs and correct nullable annotations. Do not add a nullable suppression unless the nullability contract is known and the warning is otherwise unavoidable.

## C# Code Style

Follow the settings in `.editorconfig`:

- built-in types do not prefer `var`
- `var` is preferred when the type is apparent
- `var` is not preferred elsewhere
- expression-bodied properties, indexers, and accessors are preferred
- expression-bodied methods and constructors are not preferred
- braces are preferred
- pattern matching is preferred over `is` plus casting or `as` plus null checks
- throw expressions and conditional delegate calls are preferred
- static local functions are preferred
- unused parameters are suggestions

Use the `.editorconfig` file rather than adding a rule to this guide when the two differ.

## Naming

- classes, methods, properties, constants, enums, and enum members use PascalCase
- parameters and local variables use camelCase
- private fields conventionally use `_camelCase`
- interfaces commonly use the `I` prefix
- keep async method names suffixed with `Async`

Private field naming is a convention, not a StyleCop rule enforced by the current configuration.

## Analyzer Configuration

The project references StyleCop.Analyzers and Roslynator.Analyzers and enforces code style during builds through `EnforceCodeStyleInBuild`.

`.editorconfig` currently disables or relaxes:

- `SA1101`: local calls do not need `this`
- `SA1309` and `SA1310`: underscore field names are allowed
- `SA1402`: a file may contain more than one type
- `SA1600`, `SA1601`, and `SA1633`: XML documentation and file headers are not required
- `RCS1018`: default access modifiers do not need to be added

`RCS1090` is a suggestion to use `ConfigureAwait(false)` where appropriate.

Do not report these relaxed rules as build-blocking requirements.

## ASP.NET Core and Blazor

- The server targets .NET 10.
- The website uses Blazor, ASP.NET Core Identity, and Entity Framework Core with SQLite.
- Follow existing dependency-injection and service-registration patterns in `Program.cs`.
- Keep application data access in the data/context classes rather than embedding it into unrelated components.
- Preserve existing Identity and passkey behavior when modifying account components.
- Use framework lifecycle and rendering APIs appropriate to the current component type.

## Testing

The test project is `server/tests/Website.Tests/Website.Tests.csproj` and uses xUnit.

- run the solution tests with `dotnet test`
- place tests alongside the existing test project conventions
- only depend on packages already declared in the test project unless adding a dependency is intentional

Do not assume coverage collection or mocking libraries are configured.

## Build and Analysis

Run from `server/`:

```bash
dotnet build
dotnet test
dotnet clean
```

`dotnet build` runs the configured analyzers. Treat warnings according to the project configuration rather than raising every analyzer rule to an error.

## Pre-commit

The repository-level pre-commit configuration runs, for C# changes:

```text
dotnet build --no-restore
dotnet test --no-build --verbosity quiet
```

Keep commits from introducing build or test failures. `git commit --no-verify` is an exceptional bypass only.
