const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  // TODO: Explain Source Map
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [new Dotenv()],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
};
