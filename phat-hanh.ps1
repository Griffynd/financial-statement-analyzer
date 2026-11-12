# Phat hanh web: build, kiem tra, commit, push, merge sang main.
# Tao boi: Ngo Ba Hung - Ngay: 2026-11-11
# Chay:  .\phat-hanh.ps1 -NoiDung "Mo ta thay doi"            (commit + push + merge sang main)
#        .\phat-hanh.ps1 -NoiDung "Mo ta thay doi" -Tag v38   (them git tag phien ban)
#        .\phat-hanh.ps1 -NoiDung "..." -KhongDay              (chi commit o may, chua push)
param(
  [Parameter(Mandatory = $true)][string]$NoiDung,
  [string]$Tag = "",
  [switch]$KhongDay
)
# Khong dung "Stop": git ghi tien trinh ra stderr, PowerShell 5.1 se coi la loi. Loi duoc bat bang $LASTEXITCODE.
$ErrorActionPreference = "Continue"
Set-Location $PSScriptRoot

function Chay([string]$moTa, [scriptblock]$lenh) {
  Write-Host "== $moTa" -ForegroundColor Cyan
  & $lenh
  if ($LASTEXITCODE -ne 0) { Write-Host "DUNG: $moTa that bai." -ForegroundColor Red; exit 1 }
}

Chay "Build tu src/" { python -I build.py }
Chay "Kiem tra truoc khi phat hanh" { python -I kiem-tra.py }

$nhanh = (git branch --show-current).Trim()
Chay "Them file vao commit" { git add -- src build.py kiem-tra.py phat-hanh.ps1 CHANGELOG.md CLAUDE.md .gitignore hoc-hop-nhat.html index.html }
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) { Write-Host "Khong co thay doi nao de commit." -ForegroundColor Yellow }
else { Chay "Commit tren nhanh $nhanh" { git commit -m $NoiDung } }
if ($Tag) { Chay "Gan tag $Tag" { git tag -a $Tag -m $NoiDung } }
if ($KhongDay) { Write-Host "Da commit o may, chua push (-KhongDay)." -ForegroundColor Green; exit 0 }

Chay "Push nhanh $nhanh" { git push --follow-tags origin $nhanh }
if ($nhanh -ne "main") {
  Chay "Chuyen sang main" { git checkout main }
  Chay "Lay main moi nhat" { git pull --ff-only origin main }
  Chay "Merge $nhanh vao main" { git merge --no-edit $nhanh -m "Merge nhanh $nhanh" }
  Chay "Push main" { git push --follow-tags origin main }
  Chay "Quay lai nhanh $nhanh" { git checkout $nhanh }
}
Write-Host "Xong. GitHub Pages cap nhat sau vai phut." -ForegroundColor Green
