var gulp = require('gulp');
var sass = require('gulp-sass');
var mocha = require('gulp-mocha');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
// var browserSync = require('browser-sync').create();


// now this will run styles and then default which is hello
gulp.task('default', ["test", "styles", "scripts"], function() {
    // place code for your default task here
    console.log("hello");
});

gulp.task('scripts', function () {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(babel({presets:["es2015"]}))
        .pipe(uglify().on("error", (e) => console.log(e)))
        .pipe(gulp.dest('./dest'))
});

// to run this, gulp styles in terminal
gulp.task('styles', function() {
    console.log("compiling sass to css");
    // pull in these files ** any level of directories
    return gulp.src('./src/styles/**/*.scss')
        // take the files we source and pipe them
        .pipe(sass().on('error', sass.logError))
        // minified css text
        .pipe(cssnano())
        // then pipe them to destination file
        .pipe(gulp.dest('./dest'));
});

gulp.task('test', () =>
    gulp.src('./test/**/*-test.js', {read: false})
    // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}))
);

gulp.task('watch', function () {
    gulp.watch('./src/styles/**/*.scss', ['styles']);
    gulp.watch('./src/scripts/**/*.scss', ['scripts']);
    gulp.watch('./test/**/*-test.js', ['test']);
});



