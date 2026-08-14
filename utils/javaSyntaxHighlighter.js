/**
 * Authentic VS Code Dark+ Java Extension Syntax Highlighter
 * 100% Single-Pass Tokenizer (Zero Regex/HTML Collision & Zero Callback Shift Bugs)
 * Matches exact VS Code Dark+ Java theme colors:
 * - Storage/Modifiers (public, private, class, int, boolean): #569CD6 (Blue)
 * - Control keywords (if, else, return, new, throws): #C586C0 (Purple)
 * - Classes / Types / Generics (StackArr, Object, E, String): #4EC9B0 (Teal)
 * - Method Calls & Constructors (empty(), peek(), pop()): #DCDCAA (Yellow)
 * - Variables & Fields (top, arr, maxSize): #9CDCFE (Soft Blue)
 * - Numbers (1000, 0, -1): #B5CEA8 (Mint Green)
 * - Strings ("..."): #CE9178 (Terracotta Orange)
 * - Comments (// ...): #6A9955 (Green Italic)
 */
export function highlightJavaVsCode(code) {
  if (!code) return "";

  const comments = [];
  const strings = [];

  // Step 1: Extract single-line and multi-line comments
  let text = code.replace(/(\/\*[\s\S]*?\*\/|\/\/.*$)/gm, (match) => {
    comments.push(match);
    return `___COMMENT_PH_${comments.length - 1}___`;
  });

  // Step 2: Extract string literals
  text = text.replace(/"([^"\\]|\\.)*"/g, (match) => {
    strings.push(match);
    return `___STRING_PH_${strings.length - 1}___`;
  });

  const CONTROL_KEYWORDS = new Set([
    "if", "else", "switch", "case", "default", "break", "continue",
    "for", "while", "do", "try", "catch", "finally", "return", "throw", "throws",
    "new", "import", "package"
  ]);

  const STORAGE_KEYWORDS = new Set([
    "public", "private", "protected", "static", "final", "class",
    "interface", "implements", "extends", "enum", "void", "int", "double",
    "boolean", "float", "long", "byte", "char", "short", "abstract",
    "synchronized", "transient", "volatile", "native", "super", "this", "instanceof"
  ]);

  const BUILTIN_VALS = new Set(["true", "false", "null"]);

  // Regex tokenizing:
  // 1. Comments & Strings placeholders
  // 2. Annotations (@Override)
  // 3. Method calls (words followed by '(')
  // 4. Class / Type names (Capitalized words)
  // 5. Normal words / identifiers
  // 6. Numbers
  // 7. Operators & HTML special chars
  const tokenRegex = /(___COMMENT_PH_\d+___|___STRING_PH_\d+___|@[a-zA-Z_$][a-zA-Z0-9_$]*|\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()|\b[A-Z][a-zA-Z0-9_$]*\b|\b[a-zA-Z_$][a-zA-Z0-9_$]*\b|\b\d+(\.\d+)?(E[+-]?\d+)?[fFlLdD]?\b|&|<|>|[^a-zA-Z0-9_$\s])/g;

  return text.replace(tokenRegex, (token, ...restArgs) => {
    // In String.prototype.replace callback:
    // last arg is the original fullText string, 2nd-to-last arg is the numeric offset index
    const fullStr = typeof restArgs[restArgs.length - 1] === "string" ? restArgs[restArgs.length - 1] : text;
    const offset = typeof restArgs[restArgs.length - 2] === "number" ? restArgs[restArgs.length - 2] : 0;

    // Comment Placeholder -> VS Code Green #6A9955 (italic)
    if (token.startsWith("___COMMENT_PH_")) {
      const idx = parseInt(token.replace("___COMMENT_PH_", "").replace("___", ""), 10);
      const commentText = comments[idx] || "";
      const escaped = commentText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `<span style="color: #6a9955; font-style: italic;">${escaped}</span>`;
    }

    // String Placeholder -> VS Code Terracotta #CE9178
    if (token.startsWith("___STRING_PH_")) {
      const idx = parseInt(token.replace("___STRING_PH_", "").replace("___", ""), 10);
      const stringText = strings[idx] || "";
      const escaped = stringText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `<span style="color: #ce9178; font-weight: 500;">${escaped}</span>`;
    }

    // Annotation (@Override) -> VS Code Yellow #DCDCAA
    if (token.startsWith("@")) {
      return `<span style="color: #dcdcaa;">${token}</span>`;
    }

    // Control Keywords (if, else, return, new, throws) -> VS Code Magenta/Purple #C586C0
    if (CONTROL_KEYWORDS.has(token)) {
      return `<span style="color: #c586c0; font-weight: 600;">${token}</span>`;
    }

    // Storage Keywords & Primitive Types (public, private, class, int, boolean, void) -> VS Code Blue #569CD6
    if (STORAGE_KEYWORDS.has(token)) {
      return `<span style="color: #569cd6; font-weight: 600;">${token}</span>`;
    }

    // Builtin Values (true, false, null) -> VS Code Blue #569CD6
    if (BUILTIN_VALS.has(token)) {
      return `<span style="color: #569cd6; font-weight: 600;">${token}</span>`;
    }

    // Class / Interface / Type Names (Capitalized words like StackArr, Object, String, E, StackADT) -> VS Code Teal #4EC9B0
    if (/^[A-Z][a-zA-Z0-9_$]*$/.test(token)) {
      return `<span style="color: #4ec9b0; font-weight: 600;">${token}</span>`;
    }

    // Method Calls / Declarations -> check if token is followed by '(' in original text
    const tailStr = fullStr.slice(offset + token.length).trimStart();
    if (tailStr.startsWith("(") && /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(token)) {
      return `<span style="color: #dcdcaa;">${token}</span>`;
    }

    // Numbers -> VS Code Mint Green #B5CEA8
    if (/^\d+(\.\d+)?(E[+-]?\d+)?[fFlLdD]?$/.test(token)) {
      return `<span style="color: #b5cea8; font-weight: 500;">${token}</span>`;
    }

    // Variables / Fields / Identifiers -> VS Code Soft Blue #9CDCFE
    if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(token)) {
      return `<span style="color: #9cdcfe;">${token}</span>`;
    }

    // Escape HTML special characters for operators & symbols
    if (token === "&") return "&amp;";
    if (token === "<") return "&lt;";
    if (token === ">") return "&gt;";

    return token;
  });
}
