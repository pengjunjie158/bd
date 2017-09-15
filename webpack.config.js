var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var json=[
        {
          "tex":"音乐",
          "color":"pink",
        },
        {
          "tex":"历史",
          "color":"skyblue",
        },
        {
          "tex":"情感生活",
          "color":"red",
        },
        {
          "tex":"人文",
          "color":"skyblue",
        },
        {
          "tex":"付费精品",
          "color":"pink",
        },
        {
          "tex":"脱口秀",
          "color":"orange",
        },
        {
          "tex":"娱乐",
          "color":"red",
        },
        {
          "img":"icon-hot",
          "tex":"英语",
          "color":"pink",
        },
        {
          "tex":"教育培训",
          "color":"yellow",
        },
            {
          "tex":"音乐",
          "color":"pink",
        },
        {
          "tex":"历史",
          "color":"skyblue",
        },
        {
          "tex":"情感生活",
          "color":"red"
        },
        {
          "tex":"人文",
          "color":"skyblue"
        },
        {
          "tex":"付费精品",
          "color":"pink"
        },
        {
          "tex":"脱口秀",
          "color":"orange"
        },
        {
          "tex":"娱乐",
          "color":"red"
        },
        {
          "tex":"英语",
          "color":"pink"
        },
        {
          "tex":"教育培训",
          "color":"yellow"
        },
        {
          "tex":"音乐",
          "color":"pink"
        },
        {
          "tex":"历史",
          "color":"skyblue"
        }
  ]
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.jpg| .png$/,
                use: ["url-loader"]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ]
    },
    devServer:{
        host:"127.0.0.1",
        port:"9999",
        hot:true,
        contentBase:__dirname+"/src/static",
        watchContentBase:true,
        setup(app){
            app.get("/fenlei",function(req,res){
                res.setHeader('Access-Control-Allow-Origion','*');
               res.setHeader('content-type','application/json;charset=utf-8');
                if(req.url==='/fenlei'){
                    res.json(json)
                }
            })
        }

    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.js"
        }
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common"
        }),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]


}