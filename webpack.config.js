const path = require('path');

module.exports = {
    mode: 'developement',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    // -- Assets --
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        ],
    },
    // -- Plugins --
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
};