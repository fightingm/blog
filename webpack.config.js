
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtracTextPlugin = require("extract-text-webpack-plugin");
var extractCSS=new ExtracTextPlugin('[name].css');
module.exports = {
    entry: {
        bundle:'./src/controllers/_entry.js'
    },
    output: {
        path:'./dist/js/',
        filename: '[name].js'
        //publicPath:'./dist/js/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.css']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/(node_modules)/],
            //loader: 'babel',
            loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],

            //query: {
            //        presets: ['es2015','stage-2','react']
            //    }
        },{
        	test: /\.css$/,
			//loader: 'style-loader!css-loader!postcss-loader'和下面的效果一样
            //loaders:["style","css","postcss"],
            loader:extractCSS.extract(["css","postcss"]),
            exclude:"/node_modules/"//排除node_modules文件夹下的文件
        },{
            test: /\.jpg$/,
            loader: 'url-loader?prefix=img/&limit=5000',
            exclude:"/node_modules/"
        },{
            test: /\.ttf$/,
            loader : "file",
            exclude:"/node_modules/"
        },{
            test: /\.otf$/,
            loader : "file",
            exclude:"/node_modules/"
        },{
            test:/\.json$/,
            loader:'json'
        }]
    },
    postcss:function (){
    	return [precss,autoprefixer];
    },
    plugins:[
        extractCSS
        //new ExtracTextPlugin("bundle.css") //打包css文件
        //new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js")
    ]
};