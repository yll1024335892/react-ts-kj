const webpack = require("webpack");
const CopyWebpackPlugin=require('copy-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "bundle.js",
        publicPath:'/dist/',
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre",
                 test: /\.js$/, 
                 loader: "source-map-loader"
            },
            {//css文件处理
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
              },
              {//sass文件处理
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ['css-loader','sass-loader']
                })
              },
              {//图片资源的加载
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name:'resource/[name].[ext]'
                    },
                  },
                ],
              }
        ]
    },
    plugins:[
        new CopyWebpackPlugin([
            {from:'./src/fonts',to:'./fonts'},
            {from:'./src/js',to:'./js'},
            {from:'./src/resource',to:'./resource'}
        ]),
        new htmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("css/[name].css"),
    ],
    optimization: {
        splitChunks: {
          name: 'common',
          filename:'js/base.js'
        }
     },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};