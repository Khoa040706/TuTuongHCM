import fs from "node:fs";
import path from "node:path";
import webpack from "webpack";

const packageRoot = path.resolve(process.argv[2]);
const outputDir = path.resolve(process.argv[3]);
const sourceDir = path.resolve("qa/b7-r3f-teardown");
fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(path.join(sourceDir, "index.html"), path.join(outputDir, "index.html"));

const compiler = webpack({
  mode: "production",
  devtool: false,
  entry: path.join(sourceDir, "client.js"),
  output: { path: outputDir, filename: "qa.js", clean: false },
  resolve: {
    alias: {
      "@react-three/fiber$": path.join(packageRoot, "dist", "react-three-fiber.esm.js"),
    },
  },
});

compiler.run((error, stats) => {
  compiler.close(() => {});
  if (error) throw error;
  if (stats.hasErrors()) throw new Error(stats.toString({ colors: false, errors: true, warnings: true }));
  console.log(JSON.stringify({ packageRoot, outputDir, bundleBytes: fs.statSync(path.join(outputDir, "qa.js")).size }, null, 2));
});
