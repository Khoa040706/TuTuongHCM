import fs from "fs";
import path from "path";
import { subjects } from "../data/index.js";

const contentDir = path.join(process.cwd(), "content");

// Ensure directory exists
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// Convert table block to markdown table
function convertTable(block) {
  let md = "";
  md += "| " + block.headers.join(" | ") + " |\n";
  md += "| " + block.headers.map(() => "---").join(" | ") + " |\n";
  block.rows.forEach(row => {
    md += "| " + row.map(cell => String(cell).replace(/\n/g, "<br>")).join(" | ") + " |\n";
  });
  return md;
}

// Convert single content block to markdown string
function convertBlockToMarkdown(block) {
  switch (block.type) {
    case "label":
      return `**${block.text.trim()}**\n`;

    case "paragraph":
      return `${block.text.trim()}\n`;

    case "bullets":
      return block.items.map(item => `* ${item.trim()}`).join("\n") + "\n";

    case "sub-bullets":
      return block.items.map(item => `  * ${item.trim()}`).join("\n") + "\n";

    case "numbered-list":
      return block.items.map((item, idx) => `${idx + 1}. ${item.trim()}`).join("\n") + "\n";

    case "highlight":
      return `:::highlight\n${block.text.trim()}\n:::\n`;

    case "quote":
      if (block.source) {
        return `:::quote\n${block.text.trim()}\n— ${block.source.trim()}\n:::\n`;
      }
      return `:::quote\n${block.text.trim()}\n:::\n`;

    case "definition":
      return `:::definition\n${block.text.trim()}\n:::\n`;

    case "key-point":
      return `→ *${block.text.trim()}*\n`;

    case "code":
      return `\`\`\`${block.language || "javascript"}\n${block.code.trim()}\n\`\`\`\n`;

    case "table":
      return convertTable(block) + "\n";

    case "conclusion":
      let concl = ":::conclusion\n";
      if (block.title) concl += `### ${block.title.trim()}\n\n`;
      if (block.text) concl += `${block.text.trim()}\n\n`;
      if (block.items) {
        concl += block.items.map(item => `* ${item.trim()}`).join("\n") + "\n";
      }
      concl += ":::\n";
      return concl;

    case "numbered-group":
      return block.items.map(item => {
        let itemStr = `${item.number}. **${item.title.trim()}**\n`;
        if (item.bullets) {
          itemStr += item.bullets.map(b => `   * ${b.trim()}`).join("\n") + "\n";
        }
        return itemStr;
      }).join("\n") + "\n";

    // Dynamic JSX Visualizer elements
    case "bubble-sort-visualizer":
      return `<BubbleSortVisualizer />\n`;
    case "quick-sort-visualizer":
      return `<QuickSortVisualizer mode="${block.mode || 'pivot'}" />\n`;
    case "quick-sort-flowchart":
      return `<QuickSortFlowchart />\n`;
    case "big-o-curve-chart":
      return `<BigOCurveChart />\n`;
    case "big-o-simulator":
      return `<BigOSimulator />\n`;
    case "big-o-code-tabs":
      return `<BigOCodeTabs />\n`;
    case "pass-by-value-ref-visualizer":
      return `<MemoryVisualizer />\n`;
    case "pass-by-value-ref-code-tabs":
      return `<PassByRefCodeTabs />\n`;
    case "pass-by-value-ref-quiz":
      return `<ConceptQuiz />\n`;
    case "java-casting-playground":
    case "casting-playground":
      return `<CastingPlayground />\n`;
    case "java-printf-formatter":
    case "printf-formatter":
      return `<PrintfFormatter />\n`;
    case "java-run-cycle-visualizer":
    case "java-cycle-visualizer":
      return `<JavaRunCycleVisualizer />\n`;
    case "dsa-complex-visualizer":
    case "complex-visualizer":
      return `<ComplexVisualizer />\n`;
    case "dsa-fraction-visualizer":
      return `<FractionVisualizer />\n`;

    // Subject specific elements
    default:
      if (block.type.startsWith("hcm-") || block.type.startsWith("lsd-")) {
        const componentName = block.type
          .split("-")
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join("");
        return `<${componentName} />\n`;
      }
      console.warn(`[Warning] Unknown block type: ${block.type}`);
      return `<!-- Unknown block type: ${block.type} -->\n`;
  }
}

// Convert a single subsection content to MDX
function convertSubsectionToMdx(sub) {
  let mdx = "";

  // 1. Frontmatter
  mdx += "---\n";
  mdx += `id: "${sub.id}"\n`;
  if (sub.number) mdx += `number: "${sub.number}"\n`;
  mdx += `title: "${sub.title.replace(/"/g, '\\"')}"\n`;
  
  if (sub.parts && sub.parts.length > 0) {
    mdx += "parts:\n";
    sub.parts.forEach(part => {
      mdx += `  - id: "${part.id}"\n`;
      if (part.label) mdx += `    label: "${part.label}"\n`;
      if (part.title) mdx += `    title: "${part.title.replace(/"/g, '\\"')}"\n`;
    });
  }
  mdx += "---\n\n";

  // 2. Body content split by parts
  if (sub.parts && sub.parts.length > 0) {
    sub.parts.forEach(part => {
      mdx += `<Part id="${part.id}">\n\n`;
      if (part.content && part.content.length > 0) {
        part.content.forEach(block => {
          mdx += convertBlockToMarkdown(block) + "\n";
        });
      }
      mdx += `</Part>\n\n`;
    });
  }

  return mdx;
}

// Execute migration
function runMigration() {
  console.log("Starting MDX migration for all subjects...");

  Object.values(subjects).forEach(subject => {
    if (subject.isCustom) {
      console.log(`Skipping custom subject: ${subject.title}`);
      return;
    }

    console.log(`Processing subject: ${subject.title} (${subject.id})`);

    const chapters = subject.chapters || [];
    chapters.forEach(chapter => {
      const sections = chapter.sections || [];
      sections.forEach(section => {
        const subsections = section.subsections || [];
        subsections.forEach(subsection => {
          const mdxContent = convertSubsectionToMdx(subsection);
          const targetPath = path.join(contentDir, subject.id, chapter.id, section.id, `${subsection.id}.mdx`);
          
          ensureDirectoryExistence(targetPath);
          fs.writeFileSync(targetPath, mdxContent, "utf8");
          console.log(`  ✓ Generated: ${subject.id}/${chapter.id}/${section.id}/${subsection.id}.mdx`);
        });
      });
    });
  });

  console.log("MDX migration successfully completed!");
}

runMigration();
