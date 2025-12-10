import esbuild from "esbuild";

esbuild
  .build({
    bundle: true,
    entryPoints: ["./src/index.js"],
    sourcemap: true,
    minify: true,
    format: "esm",
    logLevel: "error",
    outfile: "dist/index.bundle.js",
    loader: {
      ".js": "jsx",
    },
    platform: "browser",
    // watch: {
    //   onRebuild(error) {
    //     if (error) {
    //       console.error("watch build failed:", error);
    //     } else {
    //       console.log("esbuild watch succeeded: created assets/dest/js");
    //     }
    //   },
    // },
  })
  .then(() => {
    console.log("esbuild initial build succeeded: created");
  })
  .catch(() => process.exit(1));
