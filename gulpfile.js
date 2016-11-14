var gulp = require('gulp');
var sass = require('gulp-sass');
var mocha = require('gulp-mocha');


// now this will run styles and then default which is hello
gulp.task('default', ["styles"], function() {
    // place code for your default task here
    console.log("hello");
});

// to run this, gulp styles in terminal
gulp.task('styles', function() {
    // place code for your default task here
    console.log("compiling sass to css");
    // pull in these files ** any level of directories
    return gulp.src('./src/styles/**/*.scss')
        // take the files we source and pipe them
        .pipe(sass().on('error', sass.logError))
        // then pipe them to destination file
        .pipe(gulp.dest('./dest'));
});

gulp.task('watch', function () {
    gulp.watch('./src/styles/**/*.scss', ['styles']);
    gulp.watch('./test/**/*.scss', ['sass']);
});

gulp.task('test', () =>
    gulp.src('./test/**/*-example-test.js', {read: false})
    // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}))
);

