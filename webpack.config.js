const path = require(`path`)
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`)

module.exports = {
	entry: {
		"main-bundle": `./src/main.js`,
		"i18n-contents": `./src/modules/i18n-contents.js`,
	},
	output: {
		path: path.resolve(__dirname, `server/public/javascripts`),
		filename: `[name].js`,
		publicPath: `/src/`,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: `babel-loader`,
					options: {
						presets: [`@babel/preset-env`],
					},
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [`eslint-loader`],
			},
			{
				test: /\.css$/,
				use: [
					`style-loader`,
					`css-loader`,					
				],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader:`file-loader`,
				options: {
					publicPath: `/src/`,
					name: `[name].[ext]?[hash]`,
				},
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader:`url-loader`,
				options: {
					publicPath: `/src/`,
					name: `[name].[ext]?[hash]`,
					limit: 10000,
				},
			},
		],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js(\?.*)?$/i,
			}),
		],
	},
	devServer: {
		contentBase: path.join(__dirname, `/`),
		compress: true,
		port: 9000,
		historyApiFallback: true,
	},
}
