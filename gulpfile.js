const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const del = require('del')

gulp.task('copy', () => {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
})

gulp.task('compile', () => {
  return gulp.src('src/*.es6')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('build/lib'))
})

gulp.task('browserify', () => {
  return browserify('build/lib/main.js').bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build'))
})

gulp.task('clean', () => {
  return del('build')
})

gulp.task('build', ['copy', 'compile', 'browserify'])
