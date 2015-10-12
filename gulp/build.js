var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

function onStreamError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('browserify', function () {
    var bundler = browserify({
        entries: ['./src/app.js'],
        transform: [reactify]
    });
    return bundler.bundle()
        .on('error', onStreamError)
        .pipe(source('app.js'))
        .pipe(gulp.dest('./compile'));
});
