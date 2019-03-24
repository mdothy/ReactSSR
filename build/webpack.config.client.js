const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    entry:path.join(__dirname,'../View/app'),
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'[name].[hash].js',
        publicPath:'/public'
    },
    resolve:{
        extensions:['.js','jsx']
    },
    module:{
        rules:[
            {
                test:/.js$/,
                use:'babel-loader',
                exclude:path.resolve(__dirname,'../node_modules')
            },
            {
                test:/.jsx$/,
                use:'babel-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'../View/template.html')
        })
    ]
}

if(isDev){
    config.entry = {
        app:[
            'react-hot-loader/patch',
            path.join(__dirname,'../View/app')
        ]
    },
    config.devServer = {
        host:'0.0.0.0',
        port:8888,
        contentBase:path.join(__dirname,'../dist'),
        hot:true,
        overlay:{
            errors:true
        },
        publicPath:'/public',
        historyApiFallback:{
            index:'/public/index.html'
        }
    },
    config.plugins.push(new webpack.HotModuleReplacementPlugin())

}

module.exports = config