param(
  [Parameter(Mandatory = $true)][string]$V1Directory,
  [Parameter(Mandatory = $true)][string]$V2Directory,
  [Parameter(Mandatory = $true)][string]$OutputPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$viewFiles = @(
  '01-front-closed.png',
  '02-three-quarter-open.png',
  '03-side-closed.png',
  '04-front-open.png',
  '05-front-compact.png'
)
$viewLabels = @(
  'FRONT / CLOSED',
  'THREE-QUARTER / OPEN',
  'SIDE / CLOSED',
  'FRONT / OPEN',
  'FRONT / COMPACT'
)

$tileSize = 320
$gutter = 14
$labelHeight = 46
$leftMargin = 78
$topMargin = 54
$canvasWidth = $leftMargin + ($viewFiles.Count * ($tileSize + $gutter)) + $gutter
$canvasHeight = $topMargin + (2 * ($tileSize + $labelHeight + $gutter)) + $gutter
$bitmap = [System.Drawing.Bitmap]::new($canvasWidth, $canvasHeight)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$titleFont = [System.Drawing.Font]::new('Arial', 18, [System.Drawing.FontStyle]::Bold)
$labelFont = [System.Drawing.Font]::new('Arial', 10, [System.Drawing.FontStyle]::Bold)
$rowFont = [System.Drawing.Font]::new('Arial', 13, [System.Drawing.FontStyle]::Bold)
$textBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(44, 42, 38))
$mutedBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(95, 89, 80))
$borderPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(185, 174, 157), 1)

try {
  $graphics.Clear([System.Drawing.Color]::FromArgb(250, 248, 244))
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawString('STUDYMASTER CANCER BLOCKOUT - V1 / V2', $titleFont, $textBrush, 18, 14)

  $rows = @(
    @{ Label = 'V1'; Directory = $V1Directory },
    @{ Label = 'V2'; Directory = $V2Directory }
  )
  for ($rowIndex = 0; $rowIndex -lt $rows.Count; $rowIndex += 1) {
    $row = $rows[$rowIndex]
    $imageY = $topMargin + ($rowIndex * ($tileSize + $labelHeight + $gutter))
    $graphics.DrawString($row.Label, $rowFont, $mutedBrush, 18, $imageY + ($tileSize / 2) - 10)
    for ($columnIndex = 0; $columnIndex -lt $viewFiles.Count; $columnIndex += 1) {
      $sourcePath = Join-Path $row.Directory $viewFiles[$columnIndex]
      if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Missing contact-sheet source: $sourcePath"
      }
      $imageX = $leftMargin + ($columnIndex * ($tileSize + $gutter))
      $source = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $sourcePath))
      try {
        $target = [System.Drawing.Rectangle]::new($imageX, $imageY, $tileSize, $tileSize)
        $graphics.DrawImage($source, $target)
        $graphics.DrawRectangle($borderPen, $target)
        $graphics.DrawString($viewLabels[$columnIndex], $labelFont, $textBrush, $imageX, $imageY + $tileSize + 8)
      }
      finally {
        $source.Dispose()
      }
    }
  }

  $resolvedOutput = if ([System.IO.Path]::IsPathRooted($OutputPath)) {
    [System.IO.Path]::GetFullPath($OutputPath)
  }
  else {
    [System.IO.Path]::GetFullPath((Join-Path (Get-Location).Path $OutputPath))
  }
  $outputDirectory = [System.IO.Path]::GetDirectoryName($resolvedOutput)
  [System.IO.Directory]::CreateDirectory($outputDirectory) | Out-Null
  $bitmap.Save($resolvedOutput, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output $resolvedOutput
}
finally {
  $borderPen.Dispose()
  $mutedBrush.Dispose()
  $textBrush.Dispose()
  $rowFont.Dispose()
  $labelFont.Dispose()
  $titleFont.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}
