param(
  [Parameter(Mandatory = $true)][string]$ConceptPath,
  [Parameter(Mandatory = $true)][string]$V2Directory,
  [Parameter(Mandatory = $true)][string]$CandidateDirectory,
  [Parameter(Mandatory = $true)][string]$OutputPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$viewFiles = @('01-front-closed.png', '02-three-quarter-open.png', '03-side-closed.png')
$viewLabels = @('FRONT / CLOSED', 'THREE-QUARTER / OPEN', 'SIDE / CLOSED')
$conceptCrops = @(
  [System.Drawing.Rectangle]::new(0, 0, 590, 570),
  [System.Drawing.Rectangle]::new(590, 0, 545, 570),
  [System.Drawing.Rectangle]::new(1135, 0, 401, 570)
)

$tileWidth = 420
$tileHeight = 360
$gutter = 18
$labelHeight = 42
$leftMargin = 118
$topMargin = 62
$rowHeight = $tileHeight + $labelHeight + $gutter
$canvasWidth = $leftMargin + (3 * ($tileWidth + $gutter)) + $gutter
$canvasHeight = $topMargin + (3 * $rowHeight) + $gutter
$bitmap = [System.Drawing.Bitmap]::new($canvasWidth, $canvasHeight)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$titleFont = [System.Drawing.Font]::new('Arial', 18, [System.Drawing.FontStyle]::Bold)
$labelFont = [System.Drawing.Font]::new('Arial', 10, [System.Drawing.FontStyle]::Bold)
$rowFont = [System.Drawing.Font]::new('Arial', 13, [System.Drawing.FontStyle]::Bold)
$textBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(44, 42, 38))
$mutedBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(95, 89, 80))
$borderPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(185, 174, 157), 1)
$concept = $null

try {
  $graphics.Clear([System.Drawing.Color]::FromArgb(250, 248, 244))
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawString('STUDYMASTER CANCER - CONCEPT / V2 / B5A CANDIDATE', $titleFont, $textBrush, 18, 16)
  $concept = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $ConceptPath))

  for ($rowIndex = 0; $rowIndex -lt 3; $rowIndex += 1) {
    $imageY = $topMargin + ($rowIndex * $rowHeight)
    $rowLabel = @('CONCEPT', 'V2', 'B5A')[ $rowIndex ]
    $graphics.DrawString($rowLabel, $rowFont, $mutedBrush, 18, $imageY + ($tileHeight / 2) - 10)
    for ($columnIndex = 0; $columnIndex -lt 3; $columnIndex += 1) {
      $imageX = $leftMargin + ($columnIndex * ($tileWidth + $gutter))
      $target = [System.Drawing.Rectangle]::new($imageX, $imageY, $tileWidth, $tileHeight)
      if ($rowIndex -eq 0) {
        $graphics.DrawImage($concept, $target, $conceptCrops[$columnIndex], [System.Drawing.GraphicsUnit]::Pixel)
      }
      else {
        $sourceDirectory = if ($rowIndex -eq 1) { $V2Directory } else { $CandidateDirectory }
        $sourcePath = Join-Path $sourceDirectory $viewFiles[$columnIndex]
        if (-not (Test-Path -LiteralPath $sourcePath)) { throw "Missing contact-sheet source: $sourcePath" }
        $source = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $sourcePath))
        try { $graphics.DrawImage($source, $target) } finally { $source.Dispose() }
      }
      $graphics.DrawRectangle($borderPen, $target)
      $graphics.DrawString($viewLabels[$columnIndex], $labelFont, $textBrush, $imageX, $imageY + $tileHeight + 8)
    }
  }

  $resolvedOutput = [System.IO.Path]::GetFullPath($OutputPath)
  [System.IO.Directory]::CreateDirectory([System.IO.Path]::GetDirectoryName($resolvedOutput)) | Out-Null
  $bitmap.Save($resolvedOutput, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output $resolvedOutput
}
finally {
  if ($concept) { $concept.Dispose() }
  $borderPen.Dispose(); $mutedBrush.Dispose(); $textBrush.Dispose()
  $rowFont.Dispose(); $labelFont.Dispose(); $titleFont.Dispose()
  $graphics.Dispose(); $bitmap.Dispose()
}
