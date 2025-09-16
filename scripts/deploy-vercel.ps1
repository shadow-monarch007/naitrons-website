param(
  [string]$ProdDomain = "",
  [string]$SiteUrl = "",
  [switch]$Promote
)

# Requires: npm i -g vercel (and `vercel login` already done once interactively)

if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
  Write-Error "Vercel CLI not found. Install with: npm i -g vercel"
  exit 1
}

if ($SiteUrl -and -not $Env:NEXT_PUBLIC_SITE_URL) {
  $Env:NEXT_PUBLIC_SITE_URL = $SiteUrl
}

Write-Host "== Building production bundle ==" -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Build failed"; exit 1 }

Write-Host "== Deploying to Vercel (preview) ==" -ForegroundColor Cyan
$deployOutput = vercel --prod:$false --confirm
if ($LASTEXITCODE -ne 0) { Write-Error "Vercel deploy failed"; exit 1 }

Write-Host $deployOutput

if ($Promote) {
  Write-Host "-- Promoting preview to production --" -ForegroundColor Cyan
  vercel deploy --prod --confirm
}

if ($ProdDomain) {
  Write-Host "== Ensuring domain added ==" -ForegroundColor Cyan
  vercel domains add $ProdDomain 2>$null | Out-Null
  Write-Host "Domain checked: $ProdDomain" -ForegroundColor Green
}

Write-Host "Done." -ForegroundColor Green
