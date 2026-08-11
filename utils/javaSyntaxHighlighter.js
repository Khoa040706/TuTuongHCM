/**
 * High-quality VS Code One Dark Pro Java Syntax Highlighter
 * 100% Single-Pass Tokenizer (Bulletproof - Zero Regex/HTML Collision)
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

  // Token Sets
  const KEYWORDS = new Set([
    "public", "private", "protected", "static", "final", "class",
    "interface", "implements", "extends", "void", "int", "double",
    "boolean", "return", "if", "else", "while", "for", "new",
    "this", "instanceof", "import", "package", "try", "catch", "throw", "throws"
  ]);

  const TYPES = new Set([
    "Complex", "ComplexCart", "ComplexPolar", "Shape", "Comparable",
    "FractionI", "Fraction", "FractionArr", "String", "Math", "Scanner",
    "Object", "System", "T", "Override", "ListInterface", "ListUsingArray",
    "NoSuchElementException", "IndexOutOfBoundsException", "ListNode", "Integer",
    "LinkedList", "BasicLinkedList", "EnhancedLinkedList", "TailedLinkedList",
    "EnhancedListInterface"
  ]);

  const METHODS = new Set([
    "realpart", "imagpart", "angle", "mag", "add", "minus", "times",
    "simplify", "gcd", "toString", "equals", "compareTo", "main",
    "println", "print", "nextInt", "sqrt", "atan", "cos", "sin", "abs",
    "getNumer", "getDenom", "setNumer", "setDenom", "area", "circumference",
    "isEmpty", "size", "getFirst", "contains", "addFirst", "removeFirst",
    "getNext", "getElement", "setNext", "getHead", "getTail", "addAfter",
    "removeAfter", "remove", "addLast"
  ]);

  const CONSTANTS = new Set(["EPSILON", "PI", "MAX_NUMBER", "MAXSIZE"]);

  // Token Regex: matches placeholders, words, numbers, or special chars
  const tokenRegex = /(___COMMENT_PH_\d+___|___STRING_PH_\d+___|\b[a-zA-Z_$][a-zA-Z0-9_$]*\b|\b\d+(\.\d+)?(E[+-]?\d+)?\b|&|<|>|[^a-zA-Z0-9_$\s])/g;

  // Single-pass replacement - ZERO double replacement possible
  return text.replace(tokenRegex, (token) => {
    // Comment Placeholder
    if (token.startsWith("___COMMENT_PH_")) {
      const idx = parseInt(token.replace("___COMMENT_PH_", "").replace("___", ""), 10);
      const commentText = comments[idx] || "";
      const escapedComment = commentText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `<span style="color: #7f848e; font-style: italic;">${escapedComment}</span>`;
    }

    // String Placeholder
    if (token.startsWith("___STRING_PH_")) {
      const idx = parseInt(token.replace("___STRING_PH_", "").replace("___", ""), 10);
      const stringText = strings[idx] || "";
      const escapedString = stringText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `<span style="color: #ce9178;">${escapedString}</span>`;
    }

    // Keywords (One Dark Pro Pink/Purple: #c678dd)
    if (KEYWORDS.has(token)) {
      return `<span style="color: #c678dd; font-weight: 600;">${token}</span>`;
    }

    // Types (One Dark Pro Gold: #e5c07b)
    if (TYPES.has(token)) {
      return `<span style="color: #e5c07b; font-weight: 600;">${token}</span>`;
    }

    // Methods (One Dark Pro Blue: #61afef)
    if (METHODS.has(token)) {
      return `<span style="color: #61afef;">${token}</span>`;
    }

    // Constants (One Dark Pro Coral: #e06c75)
    if (CONSTANTS.has(token)) {
      return `<span style="color: #e06c75; font-weight: bold;">${token}</span>`;
    }

    // Numbers (One Dark Pro Orange: #d19a66)
    if (/^\d+(\.\d+)?(E[+-]?\d+)?$/.test(token)) {
      return `<span style="color: #d19a66;">${token}</span>`;
    }

    // Escape HTML special characters for other symbols
    if (token === "&") return "&amp;";
    if (token === "<") return "&lt;";
    if (token === ">") return "&gt;";

    return token;
  });
}
