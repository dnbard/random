var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

gulp.task("webpack", function (callback) {
    webpack({
        target: 'web',
        debug: true,
        devtool: 'eval-cheap-module-source-map',
        cache: true,
        entry: "./src/app.js",
        output: {
            path: __dirname,
            filename: "../compile/app.js"
        },
        resolve: {
            root: '../',
            extensions: ['', '.js'],
            modulesDirectories: ['node_modules', 'src']
        },
        module: {
            loaders: [{
                test: /\.css$/,
                loader: "style!css"
            },{
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel?cacheDirectory'
            }]
        }
    }, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
        callback();
    });
});
