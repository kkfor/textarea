// const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './src/index.ts',
  devtool: isDev && 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}
