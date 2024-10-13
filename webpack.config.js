const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx', // Входная точка вашего приложения
    output: {
        path: path.resolve(__dirname, 'dist'), // Папка, куда будет собран ваш проект
        filename: 'bundle.js', // Имя выходного файла
        clean: true, // Очищает выходную папку при каждой сборке
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Поддержка этих расширений
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Обработка файлов TypeScript
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/, // Обработка файлов JavaScript
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module\.css$/,  // Обрабатываем только файлы с расширением .module.css
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.css$/,  // Правило для обычных CSS файлов
                use: ['style-loader', 'css-loader'],
                exclude: /\.module\.css$/,  // Исключаем CSS-модули из этого правила
              },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Обработка изображений
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', 
            filename: 'index.html',
        }),
    ],
    devtool: 'source-map', 
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        open: true, 
    },
    mode: 'development',
};
