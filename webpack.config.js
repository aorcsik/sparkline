const libraryTarget = process.env.LIBRARY_TARGET;
const names = {
  var: "sparkline",
  commonjs2: "sparkline.commonjs2"
};

module.exports = {
  entry: `${__dirname}/src/sparkline.js`,
  devtool: "source-map",
  target: "web",
  mode: "production",

  output: {
    path: `${__dirname}/dist/`,
    filename: `${names[libraryTarget]}.js`,
    library: {
      name: "sparkline",
      type: libraryTarget,
      export: "sparkline"
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: [`${__dirname}/src/`],
      }
    ]
  }
};
