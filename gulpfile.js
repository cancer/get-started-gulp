gulp   = require('gulp');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
sass   = require('gulp-sass');


gulp.task('js', function(){
  return gulp.src('src/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({ bundleExec: true }))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('default', ['js', 'sass']);

