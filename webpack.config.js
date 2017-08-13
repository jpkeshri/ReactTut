var config = {
   entry: './main.js',
	
   output: {
      path:'/',
      filename: 'index.js'
   },
	
   devServer: {
      inline: true,
      port: 7777
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
          {
      test : /\.css$/,
      exclude : /(node_modules)/,
      loader :'style-loader!css-loader',
      }

      ]
   }
}

module.exports = config;