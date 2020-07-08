param ($file='./tests/ProxyTest.ts')
try {
     Write-Host "Executing script with deno" -ForegroundColor Yellow
     deno.exe run -A --unstable $file
} catch {
     Write-Host "Error: Deno not found (or other)" -ForegroundColor Red
     timeout.exe /t 5 /nobreak
}