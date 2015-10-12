//TODO: change LESS to libSASS

var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp');

function watchAndRecompile() {
    gulp.watch('./src/**/*', ['browserify']);
    gulp.watch(['./public/index.html', './index.js', './images/*'], ['through']);
    gulp.watch('./sass/**/*', ['less']);
}

gulp.task('watch', ['browserify', 'through', 'less'], watchAndRecompile);
gulp.task('build', ['browserify', 'through', 'less'], function () {
    console.log('Build completed');
});

var webserver = require('gulp-webserver');

gulp.task('default', ['browserify', 'through', 'less'], function () {
    gulp.src('./compile')
        .pipe(webserver({}));
});
