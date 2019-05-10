const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlPlugin = new HtmlWebpackPlugin({
    template:"./src/index.html",
    filename: "index.html"
})

module.exports = {
    mode: "development",
    plugins:[htmlPlugin],
    module:{
        rules:[
            {test: /\.js|.jsx$/,use: "babel-loader", exclude: /\node_modules/}
        ]
    }
}