const path = require( 'path' );

module.exports = {

    //Bundling mode
    mode: 'production',

    //Entry files
    entry: './src/main.ts',

    //Output bundles
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'index.js',
    },

    //File resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    //Loaders
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }
};
