param(
  [Parameter(Mandatory = $true)][string]$BeforeDirectory,
  [Parameter(Mandatory = $true)][string]$AfterDirectory,
  [Parameter(Mandatory = $true)][string]$OutputPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$rows = @(
  @{ Label = 'B5A ACCEPTED SHAPE - TECHNICAL GRAY'; Directory = $BeforeDirectory; Files = @('01-front-closed-gray.png', '02-three-quarter-open-gray.png') },
  @{ Label = 'B5B FINAL CANDIDATE - SATIN GOLD / MATTE CHARCOAL'; Directory = $AfterDirectory; Files = @('01-front-closed-final.png', '02-three-quarter-open-final.png') }
)
$columnLabels = @('FRONT / CLOSED', 'THREE-QUARTER / OPEN')
$tile = 560
$gutter = 28
$margin = 24
$titleHeight = 72
$rowLabelHeight = 42
$columnLabelHeight = 32
$rowHeight = $rowLabelHeight + $tile + $columnLabelHeight + $gutter
$width = (2 * $tile) + (3 * $gutter)
$height = $titleHeight + (2 * $rowHeight) + $margin
$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$titleFont = [System.Drawing.Font]::new('Arial', 18, [System.Drawing.FontStyle]::Bold)
$rowFont = [System.Drawing.Font]::new('Arial', 11, [System.Drawing.FontStyle]::Bold)
$columnFont = [System.Drawing.Font]::new('Arial', 10, [System.Drawing.FontStyle]::Bold)
$textBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(44, 42, 38))
$mutedBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(106, 94, 78))
$borderPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(190, 174, 150), 1)

try {
  $graphics.Clear([System.Drawing.Color]::FromArgb(250, 248, 244))
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.DrawString('STUDYMASTER CANCER - B5A / B5B FINISH COMPARISON', $titleFont, $textBrush, $margin, 22)
  for ($rowIndex = 0; $rowIndex -lt $rows.Count; $rowIndex += 1) {
    $row = $rows[$rowIndex]
    $rowTop = $titleHeight + ($rowIndex * $rowHeight)
    $graphics.DrawString($row.Label, $rowFont, $mutedBrush, $margin, $rowTop)
    for ($column = 0; $column -lt 2; $column += 1) {
      $x = $gutter + ($column * ($tile + $gutter))
      $y = $rowTop + $rowLabelHeight
      $sourcePath = Join-Path $row.Directory $row.Files[$column]
      if (-not (Test-Path -LiteralPath $sourcePath)) { throw "Missing comparison source: $sourcePath" }
      $source = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $sourcePath))
      try {
        $target = [System.Drawing.Rectangle]::new($x, $y, $tile, $tile)
        $graphics.DrawImage($source, $target)
        $graphics.DrawRectangle($borderPen, $target)
      }
      finally { $source.Dispose() }
      $graphics.DrawString($columnLabels[$column], $columnFont, $textBrush, $x, $y + $tile + 8)
    }
  }
  $resolvedOutput = [System.IO.Path]::GetFullPath($OutputPath)
  [System.IO.Directory]::CreateDirectory([System.IO.Path]::GetDirectoryName($resolvedOutput)) | Out-Null
  $bitmap.Save($resolvedOutput, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output $resolvedOutput
}
finally {
  $borderPen.Dispose(); $mutedBrush.Dispose(); $textBrush.Dispose()
  $columnFont.Dispose(); $rowFont.Dispose(); $titleFont.Dispose()
  $graphics.Dispose(); $bitmap.Dispose()
}
