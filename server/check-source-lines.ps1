$limit = 200
$sourceRoot = Join-Path $PSScriptRoot "src"
$failures = @()

Get-ChildItem -Path $sourceRoot -Recurse -File -Include "*.cs" |
    Where-Object {
        $_.FullName -notmatch "[\\/](obj|bin|Migrations)[\\/]"
    } |
    ForEach-Object {
        $lineCount = (Get-Content -LiteralPath $_.FullName -ReadCount 0).Count
        if ($lineCount -gt $limit) {
            $failures += "{0}:{1}" -f (Resolve-Path -Relative $_.FullName), $lineCount
        }
    }

if ($failures.Count -gt 0) {
    Write-Error "C# source files exceed $limit lines:`n$($failures -join "`n")"
    exit 1
}
