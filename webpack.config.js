const path = require( 'path' );

module.exports = (env, argv) => {
  return config;
};

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    publicPath: 'dist/',
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve( __dirname, 'src/js' )
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader']
      }
    ]
  },
};
