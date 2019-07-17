const path = require("path");

const entryPath = "dev/";
const entryFile = "app.js";

module.exports = {
    entry: ['whatwg-fetch', `./${entryPath}/js/${entryFile}`], // ścieżka dostępu złożona z ^ powyższych zmiennych
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`)
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/build/",
        compress: true,
        port: 3001 // adres http://localhost:3001/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
