const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//使用node的模块
module.exports = {
    //这就是我们项目编译的入口文件
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.ts', 'tsx', '.js'],
    },
    //使用exclude来排除一些文件
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    //这个参数就可以在webpack中获取到了
    devtool:
        process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        //这个本地开发环境运行时是基于哪个文件夹作为根目录
        contentBase: './dist',
        //当你有错误的时候在控制台打出
        stats: 'errors-only',
        //不启动压缩
        compress: false,
        host: 'localhost',
        port: 8081,
    },
    //这里就是一些插件
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
        }),
    ],
};
