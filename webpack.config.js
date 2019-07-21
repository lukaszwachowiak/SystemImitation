const path = require("path");
const entryPath = "dev/";
const entryFile = "app.js";

module.exports = {
    entry: {
        bundle: [`whatwg-fetch`, `./${entryPath}/js/${entryFile}`, `./dev/sass/main.scss`]
    },
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`),
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/build/",
        compress: true,
        port: 3001,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};
