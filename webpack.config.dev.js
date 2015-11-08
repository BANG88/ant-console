var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		chunkFilename: '[chunkhash].js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
		new ExtractTextPlugin('[name].css', {
			disable: false,
			allChunks: true
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	],

	externals: {
		jquery: 'window.jQuery'
	},
	resolve:{
		alias:{
		}
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract(
				'css?sourceMap&-restructuring!' +
				'autoprefixer-loader'
			)
		}, {
			test: /\.less$/,
			loader: ExtractTextPlugin.extract(
				'css?sourceMap!' +
				'autoprefixer-loader!' +
				'less?{"sourceMap":true,"modifyVars":' + JSON.stringify({}) + '}'
			)
		}, {
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&minetype=application/font-woff'
		}, {
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&minetype=application/font-woff'
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&minetype=application/octet-stream'
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file'
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&minetype=image/svg+xml'
		}, {
			test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
			loader: 'url?limit=10000'
		}]
	}
};
