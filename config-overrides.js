const {
  addBabelPlugins,
  override,
  addWebpackModuleRule,
  addExternalBabelPlugins,
} = require("customize-cra");

// module.exports = function override(webpackConfig) {
//   webpackConfig.module.rules.push({
//     test: /\.mjs$/,
//     include: /node_modules/,
//     type: "javascript/auto",
//   });
//   return webpackConfig;
// };

module.exports = override(
  ...addExternalBabelPlugins(
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-shorthand-properties"
  ),
  addWebpackModuleRule({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  })
);
