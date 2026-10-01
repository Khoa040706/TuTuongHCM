function renderLatexFormula(formula) {
  let f = formula
    // Spacing
    .replace(/\\[,;:! ]/g, "\u2009")
    // Literal braces
    .replace(/\\\{/g, "{")
    .replace(/\\\}/g, "}")
    // Text / Font commands
    .replace(/\\text\{([^{}]*)\}/g, "$1")
    .replace(/\\mathbf\{([^{}]*)\}/g, "$1")
    .replace(/\\mathrm\{([^{}]*)\}/g, "$1")
    .replace(/\\mathit\{([^{}]*)\}/g, "$1")
    .replace(/\\mathbb\{([^{}]*)\}/g, "$1")
    // Fractions
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1)/($2)")
    // Greek letters & Math symbols (use (?![a-zA-Z]) so it works before _, ^, {, (, etc.)
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
  // Subscript notation single char: _X or _1
  f = f.replace(/_([a-zA-Z0-9\u0370-\u03ff])/g, "<sub>$1</sub>");

  // Superscript notation with braces: ^{...} -> <sup>...</sup>
  f = f.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
  f = f.replace(/\^\(([^)]+)\)/g, "<sup>$1</sup>");
  f = f.replace(/\^([a-zA-Z0-9\-+*α-ωΑ-Ω\u0370-\u03ff])/g, "<sup>$1</sup>");

  // Format variables like A, a, i, j, n, lo, hi, p, key, pivot
  const variables = ["lo", "hi", "pivot", "arr", "key", "swap", "val", "max", "min", "temp", "p", "A", "a", "i", "j", "n", "k", "T", "O", "log", "x", "y"];
  variables.forEach(v => {
    const regex = new RegExp(`\\b${v}\\b`, 'g');
    f = f.replace(regex, `<span class="font-serif italic font-semibold text-stone-850">${v}</span>`);
  });

  return f;
}

const samples = [
  "\\pi_X(r) = \\{t[X] \\mid t \\in r\\}",
  "U = \\{\\text{maSoSV, hoTenSV, ngaySinh, diemTB, mucHbg}\\}",
  "\\sigma_{C_1}(\\sigma_{C_2}(R)) = \\sigma_{C_2}(\\sigma_{C_1}(R))",
  "r \\bowtie_{(A_i \\ \\theta \\ B_j)} s = \\{(t, u) \\mid t \\in r, u \\in s \\text{ và } t[A_i] \\ \\theta \\ u[B_j]\\}",
  "r \\div s = \\{t \\mid \\forall t_s \\in s \\implies (t, t_s) \\in r\\}",
  "r \\times s = \\{t \\mid t = (t_1, t_2), t_1 \\in r, t_2 \\in s\\}",
  "\\pi_{A, B}(r)",
  "\\text{dom}(A_i)"
];

for (const s of samples) {
  console.log('---');
  console.log('Input: ', s);
  console.log('Output:', renderLatexFormula(s));
}
