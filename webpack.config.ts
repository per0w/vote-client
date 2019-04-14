import path from 'path';
import webpack from 'webpack';


module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.tsx',
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
