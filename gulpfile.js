var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp');

function watchAndRecompile() {
    gulp.watch('./src/**/*', ['webpack']);
    gulp.watch(['./public/index.html', './index.js', './images/*'], ['through']);
    gulp.watch('./sass/*.scss', ['sass']);
}

gulp.task('watch', ['webpack', 'through', 'sass'], watchAndRecompile);
gulp.task('build', ['webpack', 'through', 'sass'], function () {
    console.log('Build completed');
});

var webserver = require('gulp-webserver');

gulp.task('default', ['webpack', 'through', 'sass', 'watch'], function () {
    gulp.src('./compile')
        .pipe(webserver({}));
});
