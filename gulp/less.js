var gulp = require('gulp');
var less = require('gulp-less');

function onStreamError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('less', function () {
    return gulp.src('./sass/styles.less')
        .pipe(less())
        .on('error', onStreamError)
        .pipe(gulp.dest('./compile'));
});
