param(
  [Parameter(Mandatory = $true)][string]$ConceptPath,
  [Parameter(Mandatory = $true)][string]$CurrentDirectory,
  [Parameter(Mandatory = $true)][string]$RevisionDirectory,
  [Parameter(Mandatory = $true)][string]$OutputPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$conceptCrops = @(
  [System.Drawing.Rectangle]::new(0, 0, 590, 570),
  [System.Drawing.Rectangle]::new(590, 0, 545, 570)
)
$currentFiles = @('01-front-closed.png', '02-three-quarter-open.png')
$revisionFiles = @('01-front-closed-gray.png', '02-three-quarter-open-gray.png')
$viewLabels = @('FRONT / CLOSED', 'THREE-QUARTER / OPEN')
$rowLabels = @('APPROVED COLOR CONCEPT', 'CURRENT B5A CANDIDATE', 'FOCUSED SHAPE REVISION')

$tile = 450
$gutter = 24
$leftMargin = 18
$topMargin = 74
$labelHeight = 66
$rowHeight = $tile + $labelHeight + $gutter
$canvasWidth = $leftMargin + (2 * ($tile + $gutter)) + $gutter
$canvasHeight = $topMargin + (3 * $rowHeight) + $gutter
$bitmap = [System.Drawing.Bitmap]::new($canvasWidth, $canvasHeight)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$titleFont = [System.Drawing.Font]::new('Arial', 18, [System.Drawing.FontStyle]::Bold)
$labelFont = [System.Drawing.Font]::new('Arial', 10, [System.Drawing.FontStyle]::Bold)
$rowFont = [System.Drawing.Font]::new('Arial', 11, [System.Drawing.FontStyle]::Bold)
$textBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(44, 42, 38))
$mutedBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(103, 94, 82))
$borderPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(185, 174, 157), 1)
$concept = $null

try {
  $graphics.Clear([System.Drawing.Color]::FromArgb(250, 248, 244))
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawString('STUDYMASTER CANCER - B5A FOCUSED SHAPE REVIEW', $titleFont, $textBrush, 18, 18)
  $concept = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $ConceptPath))

  for ($row = 0; $row -lt 3; $row += 1) {
    $rowY = $topMargin + ($row * $rowHeight)
    $y = $rowY + 28
    $graphics.DrawString($rowLabels[$row], $rowFont, $mutedBrush, $leftMargin, $rowY)
    for ($column = 0; $column -lt 2; $column += 1) {
      $x = $leftMargin + ($column * ($tile + $gutter))
      $target = [System.Drawing.Rectangle]::new($x, $y, $tile, $tile)
      if ($row -eq 0) {
        $graphics.DrawImage($concept, $target, $conceptCrops[$column], [System.Drawing.GraphicsUnit]::Pixel)
      }
      else {
        $directory = if ($row -eq 1) { $CurrentDirectory } else { $RevisionDirectory }
        $files = if ($row -eq 1) { $currentFiles } else { $revisionFiles }
        $sourcePath = Join-Path $directory $files[$column]
        if (-not (Test-Path -LiteralPath $sourcePath)) { throw "Missing contact-sheet source: $sourcePath" }
        $source = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $sourcePath))
        try { $graphics.DrawImage($source, $target) } finally { $source.Dispose() }
      }
      $graphics.DrawRectangle($borderPen, $target)
      $graphics.DrawString($viewLabels[$column], $labelFont, $textBrush, $x, $y + $tile + 9)
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
