"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

// Server Action to read, pre-process, and serialize MDX files from disk
export async function getSubsectionMdx(subjectId, chapterId, sectionId, subsectionId) {
  try {
    const contentDir = path.join(process.cwd(), "content");
    const filePath = path.join(contentDir, subjectId, chapterId, sectionId, `${subsectionId}.mdx`);

    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");

    // Parse frontmatter
    const { data: frontmatter, content } = matter(fileContent);

    // Preprocess custom directive blocks like :::summary to JSX wrappers
    let processedContent = content;

    processedContent = processedContent
      .replace(/:::summary\s*\n([\s\S]*?)\n\s*:::/g, '<SummaryBox>\n$1\n</SummaryBox>')
      .replace(/:::mnemonic\s*\n([\s\S]*?)\n\s*:::/g, '<MnemonicBox>\n$1\n</MnemonicBox>')
      .replace(/:::quote\s*\n([\s\S]*?)\n\s*:::/g, '<QuoteBox>\n$1\n</QuoteBox>')
      .replace(/:::highlight\s*\n([\s\S]*?)\n\s*:::/g, '<HighlightBox>\n$1\n</HighlightBox>')
      .replace(/:::definition\s*\n([\s\S]*?)\n\s*:::/g, '<DefinitionBox>\n$1\n</DefinitionBox>');

    // Serialize MDX content for client-side hydration
    const mdxSource = await serialize(processedContent, {
      scope: frontmatter,
      mdxOptions: {
        development: process.env.NODE_ENV !== "production"
      }
    });

    return {
      frontmatter,
      mdxSource
    };
  } catch (error) {
    console.error("Error in getSubsectionMdx:", error);
    throw new Error(`Failed to load MDX content: ${error.message}`);
  }
}
