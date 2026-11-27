#!/usr/bin/env pwsh
# Install and initialize pre-commit framework for the server

Write-Host "Installing pre-commit framework..." -ForegroundColor Green

# Check if Python is available
if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Python is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Python from https://www.python.org/downloads/" -ForegroundColor Yellow
    exit 1
}

# Install pre-commit
pip install pre-commit

# Initialize pre-commit
pre-commit install

Write-Host "Pre-commit framework initialized successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Pre-commit hooks configured to run:" -ForegroundColor Cyan
Write-Host "  - dotnet build (enforces code style)" -ForegroundColor Gray
Write-Host "  - dotnet test (runs unit tests)" -ForegroundColor Gray
Write-Host ""
Write-Host "Hooks will run automatically before each commit." -ForegroundColor Cyan
