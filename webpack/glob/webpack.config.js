const glob = require("glob");
const path = require("path");

var entries = {}
glob.sync("./src/public/assets/js_origin/user/**/**/terminal.js").map(function(file) {
  entries[file] = file
})

module.exports = {
  mode: "development",//デバッグ時はdevelopment、本番はproduction
  devtool: 'inline-source-map',
  //watch: true,//watchをつけると、PC再起動までwatchを停止できないので現状入れないでいる
  entry: entries,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]'
  }
}