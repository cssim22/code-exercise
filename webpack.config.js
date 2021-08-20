const path = require('path');

module.exports = {
  // added regenerator runtimes
  entry: ['regenerator-runtime/runtime.js', './client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    host: '0.0.0.0',
    publicPath: '/build',
    port: 8080,
    contentBase: path.join(__dirname, './client'),
    proxy: {
      '*': 'http://localhost:3000',
      secure: false,
      changeOrigin: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/, /client\/stylesheets\/modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(css|scss)$/,
        include: [/client\/stylesheets\/modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            },
          },
          'sass-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
      'path': require.resolve('path-browserify')
    }
  },
  mode: process.env.NODE_ENV,
};
