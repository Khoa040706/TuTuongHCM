function renderLatexFormula(formula) {
  let f = formula
    .replace(/\\le\b/g, "≤")
    .replace(/\\ge\b/g, "≥")
    .replace(/\\leq/g, "≤")
    .replace(/\\geq/g, "≥")
    .replace(/\\dots/g, "…")
    .replace(/\\cdots/g, "⋯")
    .replace(/\\ldots/g, "…")
    .replace(/\\Omega/g, "Ω")
    .replace(/\\theta/g, "θ")
    .replace(/\\Theta/g, "Θ")
    .replace(/\\alpha/g, "α")
    .replace(/\\beta/g, "β")
    .replace(/\\gamma/g, "γ")
    .replace(/\\delta/g, "δ")
    .replace(/\\Delta/g, "Δ")
    .replace(/\\lambda/g, "λ")
    .replace(/\\mu/g, "μ")
    .replace(/\\sigma/g, "σ")
    .replace(/\\Sigma/g, "Σ")
    .replace(/\\pi\b/g, "π")
    .replace(/\\Pi\b/g, "Π")
    .replace(/\\phi/g, "φ")
    .replace(/\\psi/g, "ψ")
    .replace(/\\omega/g, "ω")
    .replace(/\\times/g, "×")
    .replace(/\\div/g, "÷")
    .replace(/\\pm/g, "±")
    .replace(/\\log/g, "log")
    .replace(/\\ln/g, "ln")
    .replace(/\\to\b/g, "→")
    .replace(/\\rightarrow/g, "→")
    .replace(/\\leftarrow/g, "←")
    .replace(/\\Rightarrow/g, "⇒")
    .replace(/\\Leftarrow/g, "⇐")
    .replace(/\\leftrightarrow/g, "↔")
    .replace(/\\Leftrightarrow/g, "⟺")
    .replace(/\\implies/g, "⟹")
    .replace(/\\infty/g, "∞")
    .replace(/\\emptyset/g, "∅")
    .replace(/\\varnothing/g, "∅")
    .replace(/\\subseteq/g, "⊆")
    .replace(/\\supseteq/g, "⊇")
    .replace(/\\subset/g, "⊂")
    .replace(/\\supset/g, "⊃")
    .replace(/\\in\b/g, "∈")
    .replace(/\\notin\b/g, "∉")
    .replace(/\\cup/g, "∪")
    .replace(/\\cap/g, "∩")
    .replace(/\\setminus/g, "∖")
    .replace(/\\forall/g, "∀")
    .replace(/\\exists/g, "∃")
    .replace(/\\land\b/g, "∧")
    .replace(/\\lor\b/g, "∨")
    .replace(/\\neg\b/g, "¬")
    .replace(/\\lnot\b/g, "¬")
    .replace(/\\wedge/g, "∧")
    .replace(/\\vee/g, "∨")
    .replace(/\\neq/g, "≠")
    .replace(/\\ne\b/g, "≠")
    .replace(/\\approx/g, "≈")
    .replace(/\\equiv/g, "≡")
    .replace(/\\bowtie/g, "⋈")
    .replace(/\\mid\b/g, "∣")
    .replace(/\\text\{([^}]*)\}/g, "$1")
    .replace(/\\\{/g, "{")
    .replace(/\\\}/g, "}")
    .replace(/\\[,;:! ]/g, "\u2009");

  f = f.replace(/([a-zA-Z_0-9])_\{([^}]+)\}/g, "$1<sub>$2</sub>");
  f = f.replace(/([a-zA-Z_0-9])_([0-9a-zA-Z_])/g, "$1<sub>$2</sub>");
  f = f.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
  f = f.replace(/\^\(([^)]+)\)/g, "<sup>$1</sup>");
  f = f.replace(/\^([a-zA-Z0-9\-+]+)/g, "<sup>$1</sup>");

  const variables = ["lo", "hi", "pivot", "arr", "key", "swap", "val", "max", "min", "temp", "p", "A", "a", "i", "j", "n", "k", "T", "O", "log", "x", "y"];
  variables.forEach(v => {
    const regex = new RegExp(`\\b${v}\\b`, 'g');
    f = f.replace(regex, `<span class="font-serif italic font-semibold text-stone-850">${v}</span>`);
  });
  return f;
}

function formatMathText(text) {
  if (typeof text !== "string") return text;
  
  let formatted = text;

  // 1. Format markdown bold **...**
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-stone-900 dark:text-stone-100">$1</strong>');

  // 2. Format markdown italic *...* (tránh nhầm với dấu nhân toán học)
  formatted = formatted.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em class="italic text-stone-800 dark:text-stone-200">$1</em>');

  // 3. Format inline code `...`
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-stone-100 dark:bg-stone-800 text-[#569cd6] dark:text-[#4ec9b0] px-1.5 py-0.5 rounded font-mono text-xs font-semibold border border-stone-200 dark:border-stone-700">$1</code>');

  // 3.5 Handle display math $$...$$ — render as a styled block
  formatted = formatted.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
    const rendered = renderLatexFormula(formula.trim());
    return `<div class="math-display my-3 py-2 px-4 bg-stone-50 border border-stone-200 rounded-lg overflow-x-auto font-mono text-sm text-stone-800 font-semibold text-center">${rendered}</div>`;
  });

  // 3.6 Handle literal \n in strings (convert to <br>)
  formatted = formatted.replace(/\\n/g, "<br/>");

  // 4. Replace $...$ inline blocks with formatted HTML
  return formatted.replace(/\$([^\$]*?)\$/g, (match, formula) => {
    const mathFormatted = renderLatexFormula(formula);
    return `<span class="inline-flex items-center gap-0.5 font-semibold text-stone-850">${mathFormatted}</span>`;
  });
}


export { renderLatexFormula, formatMathText };