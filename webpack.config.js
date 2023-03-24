const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const PATHS = {
  source: path.join(__dirname, 'node_modules', 'katex', 'dist'),
  target: path.join(__dirname, 'assets', 'mods', 'katex')
}

module.exports = {
  mode: 'production',
  entry: {},
  plugins: [
    new CopyPlugin({
      patterns: [
        // css
        { from: path.join(PATHS.source, 'katex.min.css'), to: path.join(PATHS.target, 'katex.min.css') },
        // js
        { from: path.join(PATHS.source, 'katex.min.js'), to: path.join(PATHS.target, 'katex.min.js') },
        { from: path.join(PATHS.source, 'contrib/auto-render.min.js'), to: path.join(PATHS.target, 'contrib/auto-render.min.js') },
      ],
    }),
  ]
};
