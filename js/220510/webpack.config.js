const HtmlPlugin = require("html-webpack-plugin");
const CopuPlugin = require("copy-webpack-plugin");
module.exports = {
  // entry 가 여러개일땐 객체형태로 사용가능
  entry: "./main.js",

  output: {
    // 기본값
    // path: `${__dirname}/dist`
    // filename: '[name].js' //entry 포인트의 js의 이름이 들어감
    clean: true,
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopuPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
};
