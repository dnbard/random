var gulp = require('gulp');

gulp.task('through', function () {
    gulp.src(['./images/*'])
        .pipe(gulp.dest('./compile/images'));


    return gulp.src(['./public/index.html', './index.js'])
        .pipe(gulp.dest('./compile'));
});
