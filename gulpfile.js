
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var gulp         = require('gulp');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var sass         = require('gulp-sass');
var watch        = require('gulp-watch');


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

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: './',
      directory: true,
    },
  });
});

gulp.task( 'watch', function() {
  gulp.watch( [ './src/js/**/*.js' ], [ 'js', reload ] );
  gulp.watch( [ './src/scss/**/*.scss' ], [ 'sass', reload ] );
  gulp.watch( [ '**/*.html' ], reload );
} );

gulp.task('default', ['js', 'sass', 'watch', 'browser-sync']);

