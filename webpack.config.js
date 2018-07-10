const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = function (env) {

	if (env.production)
		env.mode = 'production';
	else if (env.development)
		env.mode = 'development';
	else if (process.env.NODE_ENV)
		env.mode = process.env.NODE_ENV;

	return {
		mode: env.mode,
		watch: (env.mode == 'development'),
		devtool: (env.mode == 'development' ? 'eval-source-map' : 'source-map'),
		entry: {
			main: './assets/main.entry.js'
		},
		output: {
			filename: '[name].min.js',
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
      			},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.s[a|c]ss$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				}
			]
		},
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'~': path.resolve('./assets/'),
				'vue$': 'vue/dist/vue.esm.js'
			}
		},
		plugins: [
			new VueLoaderPlugin(),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			})
        ]
	}
};