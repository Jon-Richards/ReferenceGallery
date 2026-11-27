# ReferenceGallery Server

A Blazor Web App built with .NET 10, featuring Interactive Server rendering and
local user authentication via ASP.NET Core Identity with support for passkeys.

## Project Structure

* `src/Website` — Main Blazor Web App
  * `Components/` — Razor components for pages, layouts, and account management
    * `Account/` — Authentication and identity management components (login, registration, passkey management, 2FA)
    * `Layout/` — Main layout, navigation menu, and reconnection modal
    * `Pages/` — Application pages (Auth, Counter, Home, Weather, etc.)
  * `Data/` — Entity Framework Core data access layer
    * `ApplicationDbContext.cs` — Database context
    * `ApplicationUser.cs` — User model
    * `Migrations/` — EF Core migrations
    * `app.db` — SQLite database file
  * `Properties/` — Launch settings and configuration
  * `wwwroot/` — Static web assets (CSS, favicon, Bootstrap libraries)
  * `Program.cs` — Application entry point and service configuration
  * `appsettings.json` — Configuration settings
  * `appsettings.Development.json` — Development-specific settings
  * `Website.csproj` — Project file (targets .NET 10.0)

* `tests/Website.Tests` — xUnit test suite
  * Unit tests and integration tests for the application

## Prerequisites

* [.NET 10 SDK](https://dotnet.microsoft.com/download)
* [Python 3.8+](https://www.python.org/downloads/) (for pre-commit hooks)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd server
   ```

2. **Apply database migrations (if needed):**
   ```bash
   dotnet ef database update --project src/Website
   ```

3. **Initialize pre-commit hooks** (one-time setup):
   ```powershell
   .\setup-hooks.ps1
   ```
   Or if you have `pre-commit` already installed:
   ```bash
   pre-commit install
   ```

4. **Run the application:**
   ```bash
   dotnet run --project src/Website
   ```

   The application will be available at `https://localhost:5001`

## Running Tests

Execute the xUnit test suite from the server directory:

```bash
dotnet test
```

## Code Linting

The project uses StyleCop and Roslynator analyzers to enforce C# code style and best practices. Linting runs automatically during the build process.

### Running Analysis

Build the solution (automatically runs linting):
```bash
dotnet build
```

Force a clean rebuild with fresh analysis:
```bash
dotnet build --no-incremental
```

Clean build artifacts:
```bash
dotnet clean
```

### Configuration

Code style rules are defined in `.editorconfig` and enforced by:
- **StyleCop.Analyzers** — C# code style conventions
- **Roslynator.Analyzers** — Advanced code quality and best practices

Both analyzers run automatically during compilation and report issues as warnings or suggestions based on the configured severity levels.

### Pre-commit Hooks

Linting and testing run automatically before each commit via the pre-commit framework. Commits are blocked if:
- Build fails (code style violations)
- Tests fail

**Setup** (after cloning):
```powershell
.\setup-hooks.ps1
```

This installs the pre-commit framework and initializes hooks to run `dotnet build` and `dotnet test` on each commit.

**Bypass hooks** (use with caution):
```bash
git commit --no-verify
```
