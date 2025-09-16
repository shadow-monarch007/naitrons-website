param(
  [Parameter(Mandatory=$true)][string]$Domain,
  [switch]$SetRedirectWWW
)

if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
  Write-Error "Vercel CLI not found. Install with: npm i -g vercel"
  exit 1
}

Write-Host "== Adding domain to project ==" -ForegroundColor Cyan
vercel domains add $Domain

if ($SetRedirectWWW) {
  $www = "www.$Domain"
  Write-Host "== Adding www + redirect ==" -ForegroundColor Cyan
  vercel domains add $www
  vercel redirect add https://$www https://$Domain 308 2>$null | Out-Null
  Write-Host "Redirect enforced $www -> $Domain" -ForegroundColor Green
}

Write-Host "DNS Info (query)" -ForegroundColor Cyan
vercel dns ls $Domain

Write-Host "Done." -ForegroundColor Green
