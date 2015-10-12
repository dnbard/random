var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp');

function watchAndRecompile() {
    gulp.watch('./src/**/*', ['browserify']);
    gulp.watch(['./public/index.html', './index.js', './images/*'], ['through']);
    gulp.watch('./sass/**/*', ['sass']);
}

gulp.task('watch', ['browserify', 'through', 'sass'], watchAndRecompile);
gulp.task('build', ['browserify', 'through', 'sass'], function () {
    console.log('Build completed');
});

var webserver = require('gulp-webserver');

gulp.task('default', ['browserify', 'through', 'sass', 'watch'], function () {
    gulp.src('./compile')
        .pipe(webserver({}));
});
