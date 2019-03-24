const path = require('path')

module.exports = {
    target:'node',
    entry:path.join(__dirname,'../View/server-entry'),
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'server-entry.js',
        publicPath:'/public',
        libraryTarget:'commonjs2'
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
    
}