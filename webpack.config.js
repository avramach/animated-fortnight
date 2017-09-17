var debug = process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "aws";
var webpack = require('webpack');
var path = require('path');

var apiHost;
var setupAPI = function (){
  console.log("setupAPI");
  switch (process.env.NODE_ENV){
    case 'aws':
      console.log("setupAPI AWS");
      apiHost = "http://web-lb-902679710.us-west-2.elb.amazonaws.com/reactx/api"
    break;
    default:
      console.log("setupAPI DEFAULT");
      apiHost = "http://192.168.0.103:8080/reactx/api"
    break
  }
}
setupAPI();

function getPlugins(){
   var plugins = [];
   console.log("GET PLUGINS");
   plugins.push(new webpack.DefinePlugin({__API__: JSON.stringify(apiHost)}));
   if (!debug) {
      console.log("GET PLUGINS PRODUCTION");
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.OccurenceOrderPlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }));
   }
   return plugins;
}

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: getPlugins(),
};
