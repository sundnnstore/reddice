import path from 'path'
import webpack from 'webpack';

export default {
     devtool: 'inline-source-map',
     entry:path.join(__dirname,'/client/index.js'),
    output: {
    path: path.join(__dirname, 'server'),
    filename: 'bundle.js'
  },
 resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module:{
    loaders: [
        {
           test:/\.js$/,
           include: path.join(__dirname,'client'),
           exclude: /node_modules/,
           loaders: [ 'babel-loader' ]
        }
    ]
},
}