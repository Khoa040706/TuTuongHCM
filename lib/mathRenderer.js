/**
 * Utility for rendering LaTeX math formulas and formatted text in StudyMaster
 * Supports inline math ($...$) and block display math ($$...$$)
 */

export function renderLatexFormula(formula) {
  if (!formula || typeof formula !== "string") return "";

  let f = formula
    // Spacing
    .replace(/\\[,;:! ]/g, "\u2009")
    // Literal braces: \{ and \}
    .replace(/\\\{/g, "{")
    .replace(/\\\}/g, "}")
    // Text and font formatting commands
    .replace(/\\text\{([^{}]*)\}/g, "$1")
    .replace(/\\mathbf\{([^{}]*)\}/g, "$1")
    .replace(/\\mathrm\{([^{}]*)\}/g, "$1")
    .replace(/\\mathit\{([^{}]*)\}/g, "$1")
    .replace(/\\mathbb\{([^{}]*)\}/g, "$1")
    // Fractions: \frac{A}{B}
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1)/($2)")
    // Greek letters & math symbols (use (?![a-zA-Z]) so it works before _, ^, {, (, etc.)
    .replace(/\\pi(?![a-zA-Z])/g, "π")
    .replace(/\\Pi(?![a-zA-Z])/g, "Π")
    .replace(/\\sigma(?![a-zA-Z])/g, "σ")
    .replace(/\\Sigma(?![a-zA-Z])/g, "Σ")
    .replace(/\\theta(?![a-zA-Z])/g, "θ")
    .replace(/\\Theta(?![a-zA-Z])/g, "Θ")
    .replace(/\\alpha(?![a-zA-Z])/g, "α")
    .replace(/\\beta(?![a-zA-Z])/g, "β")
    .replace(/\\gamma(?![a-zA-Z])/g, "γ")
    .replace(/\\delta(?![a-zA-Z])/g, "δ")
    .replace(/\\Delta(?![a-zA-Z])/g, "Δ")
    .replace(/\\lambda(?![a-zA-Z])/g, "λ")
    .replace(/\\mu(?![a-zA-Z])/g, "μ")
    .replace(/\\phi(?![a-zA-Z])/g, "φ")
    .replace(/\\psi(?![a-zA-Z])/g, "ψ")
    .replace(/\\omega(?![a-zA-Z])/g, "ω")
    .replace(/\\Omega(?![a-zA-Z])/g, "Ω")
    // Operators & Relations
    .replace(/\\times(?![a-zA-Z])/g, "×")
    .replace(/\\div(?![a-zA-Z])/g, "÷")
    .replace(/\\pm(?![a-zA-Z])/g, "±")
    .replace(/\\log(?![a-zA-Z])/g, "log")
    .replace(/\\ln(?![a-zA-Z])/g, "ln")
    .replace(/\\infty(?![a-zA-Z])/g, "∞")
    .replace(/\\dots(?![a-zA-Z])/g, "…")
    .replace(/\\cdots(?![a-zA-Z])/g, "⋯")
    .replace(/\\ldots(?![a-zA-Z])/g, "…")
    // Arrows
    .replace(/\\to(?![a-zA-Z])/g, "→")
    .replace(/\\rightarrow(?![a-zA-Z])/g, "→")
    .replace(/\\leftarrow(?![a-zA-Z])/g, "←")
    .replace(/\\Rightarrow(?![a-zA-Z])/g, "⇒")
    .replace(/\\Leftarrow(?![a-zA-Z])/g, "⇐")
    .replace(/\\leftrightarrow(?![a-zA-Z])/g, "↔")
    .replace(/\\Leftrightarrow(?![a-zA-Z])/g, "⟺")
    .replace(/\\implies(?![a-zA-Z])/g, "⟹")
    // Set theory
    .replace(/\\emptyset(?![a-zA-Z])/g, "∅")
    .replace(/\\varnothing(?![a-zA-Z])/g, "∅")
    .replace(/\\subseteq(?![a-zA-Z])/g, "⊆")
    .replace(/\\supseteq(?![a-zA-Z])/g, "⊇")
    .replace(/\\subset(?![a-zA-Z])/g, "⊂")
    .replace(/\\supset(?![a-zA-Z])/g, "⊃")
    .replace(/\\notin(?![a-zA-Z])/g, "∉")
    .replace(/\\in(?![a-zA-Z])/g, "∈")
    .replace(/\\cup(?![a-zA-Z])/g, "∪")
    .replace(/\\cap(?![a-zA-Z])/g, "∩")
    .replace(/\\setminus(?![a-zA-Z])/g, "∖")
    // Logic
    .replace(/\\forall(?![a-zA-Z])/g, "∀")
    .replace(/\\exists(?![a-zA-Z])/g, "∃")
    .replace(/\\land(?![a-zA-Z])/g, "∧")
    .replace(/\\lor(?![a-zA-Z])/g, "∨")
    .replace(/\\neg(?![a-zA-Z])/g, "¬")
    .replace(/\\lnot(?![a-zA-Z])/g, "¬")
    .replace(/\\wedge(?![a-zA-Z])/g, "∧")
    .replace(/\\vee(?![a-zA-Z])/g, "∨")
    // Comparisons
    .replace(/\\leq(?![a-zA-Z])/g, "≤")
    .replace(/\\geq(?![a-zA-Z])/g, "≥")
    .replace(/\\le(?![a-zA-Z])/g, "≤")
    .replace(/\\ge(?![a-zA-Z])/g, "≥")
    .replace(/\\neq(?![a-zA-Z])/g, "≠")
    .replace(/\\ne(?![a-zA-Z])/g, "≠")
    .replace(/\\approx(?![a-zA-Z])/g, "≈")
    .replace(/\\equiv(?![a-zA-Z])/g, "≡")
    // Relational algebra
    .replace(/\\bowtie(?![a-zA-Z])/g, "⋈")
    .replace(/\\mid(?![a-zA-Z])/g, "∣");

  // Subscript notation with braces: _{...} -> <sub>...</sub>
  f = f.replace(/_\{([^}]+)\}/g, "<sub>$1</sub>");
  // Subscript notation single char: _X or _1 (handles English and Greek letters)
  f = f.replace(/_([a-zA-Z0-9\u0370-\u03ff])/g, "<sub>$1</sub>");

  // Superscript notation with braces: ^{...} -> <sup>...</sup>
  f = f.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
  f = f.replace(/\^\(([^)]+)\)/g, "<sup>$1</sup>");
  f = f.replace(/\^([a-zA-Z0-9\-+*α-ωΑ-Ω\u0370-\u03ff])/g, "<sup>$1</sup>");

  // Format single math variables for distinct editorial typography
  const variables = ["lo", "hi", "pivot", "arr", "key", "swap", "val", "max", "min", "temp", "p", "A", "a", "i", "j", "n", "k", "T", "O", "log", "x", "y"];
  variables.forEach(v => {
    const regex = new RegExp(`\\b${v}\\b`, 'g');
    f = f.replace(regex, `<span class="font-serif italic font-semibold text-stone-850 dark:text-stone-200">${v}</span>`);
  });

  return f;
}

export function formatMathText(text) {
  if (!text || typeof text !== "string") return text;
  
  let formatted = text;

  // 1. Format markdown bold **...**
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-stone-900 dark:text-stone-100">$1</strong>');

  // 2. Format markdown italic *...* (tránh nhầm với dấu nhân toán học)
  formatted = formatted.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em class="italic text-stone-800 dark:text-stone-200">$1</em>');

  // 3. Format inline code `...`
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-stone-100 dark:bg-stone-800 text-[#569cd6] dark:text-[#4ec9b0] px-1.5 py-0.5 rounded font-mono text-xs font-semibold border border-stone-200 dark:border-stone-700">$1</code>');

  // 4. Handle display math $$...$$ — render as a styled block card
  formatted = formatted.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
    const rendered = renderLatexFormula(formula.trim());
    return `<div class="math-display my-3 py-2.5 px-4 bg-stone-100/70 dark:bg-stone-850/60 border border-stone-200 dark:border-stone-750 rounded-xl overflow-x-auto font-mono text-sm text-stone-850 dark:text-stone-100 font-bold text-center tracking-wide">${rendered}</div>`;
  });

  // 5. Replace $...$ inline blocks with formatted HTML
  formatted = formatted.replace(/\$([^\$]*?)\$/g, (match, formula) => {
    const mathFormatted = renderLatexFormula(formula);
    return `<span class="inline-flex items-center gap-0.5 font-semibold text-stone-850 dark:text-stone-200">${mathFormatted}</span>`;
  });

  return formatted;
}
