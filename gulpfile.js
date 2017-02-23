var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require("gulp-concat");

gulp.task('styles', function() {
    gulp.src('assets/scss/**/*.scss')
        .pipe(concat('style.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('scripts', function() {
  return gulp.src('assets/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./public/assets/js'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/scss/**/*.scss',['styles']);    
    gulp.watch('assets/js/**/*.js',['scripts']);
});
