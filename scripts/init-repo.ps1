param(
  [string]$RepoName = "globalvision",
  [string]$GitUser = $(git config user.name),
  [string]$GitEmail = $(git config user.email),
  [switch]$Private = $true,
  [switch]$CreateRemote,
  [switch]$UseSSH = $true
)

Write-Host "== Git Initialization ==" -ForegroundColor Cyan
if (-not (Test-Path .git)) {
  git init
  Write-Host "Initialized git repository"
}

if ($GitUser) { git config user.name $GitUser }
if ($GitEmail) { git config user.email $GitEmail }

# Create initial commit if none exists
$hasCommit = git rev-parse --verify HEAD 2>$null
if (-not $hasCommit) {
  git add .
  git commit -m "chore: initial project import"
}

git branch -M main

if ($CreateRemote) {
  Write-Host "== Creating GitHub repo ($RepoName) ==" -ForegroundColor Cyan
  $visibility = if ($Private) { "private" } else { "public" }
  gh repo create $RepoName --$visibility --source . --push
} else {
  Write-Host "Skipping remote creation (pass -CreateRemote to enable)" -ForegroundColor Yellow
}

Write-Host "== Status ==" -ForegroundColor Cyan
git remote -v

git log --oneline -1

Write-Host "Done." -ForegroundColor Green
