import fs from "node:fs";
import path from "node:path";
import webpack from "webpack";

const repoRoot = process.cwd();
const sourceDir = path.join(repoRoot, "qa", "b7-minimal-repro");
const outputDir = path.join(repoRoot, "artifacts", "homepage-3d", "b7", "minimal-repro", "dist");
fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(path.join(sourceDir, "index.html"), path.join(outputDir, "index.html"));

const compiler = webpack({
  mode: "production",
  devtool: false,
  entry: path.join(sourceDir, "client.jsx"),
  output: { path: outputDir, filename: "repro.js", clean: false },
  resolve: { extensions: [".js", ".jsx"] },
});

compiler.run((error, stats) => {
  compiler.close(() => {});
  if (error) throw error;
  if (stats.hasErrors()) throw new Error(stats.toString({ colors: false, errors: true, warnings: true }));
  const htmlPath = path.join(outputDir, "index.html");
  const html = fs.readFileSync(htmlPath, "utf8").replace("</body>", "<script src=\"/repro.js\"></script></body>");
  fs.writeFileSync(htmlPath, html);
  console.log(JSON.stringify({ outputDir, bundleBytes: fs.statSync(path.join(outputDir, "repro.js")).size }, null, 2));
});
