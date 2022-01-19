module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/nine/" : "/",
  outputDir: "docs",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
    about: "src/main.js",
  },
};
