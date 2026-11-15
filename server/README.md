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

3. **Run the application:**
   ```bash
   dotnet run --project src/Website
   ```

   The application will be available at `https://localhost:5001`

## Running Tests

Execute the xUnit test suite from the server directory:

```bash
dotnet test
```
