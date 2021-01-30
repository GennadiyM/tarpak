'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var del = require('del');
var server = require('browser-sync').create();

// css
var sourcemap = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sassGlob = require('gulp-sass-glob');
var csso = require('gulp-csso');

// image
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var svgstore = require('gulp-svgstore');

// html
var posthtml = require('gulp-posthtml');
var include = require('posthtml-include');
var htmlmin = require('gulp-htmlmin');

// js
var webpack = require('webpack-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var isDev = true;

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('path', function () {
  return gulp.src([
    'source/pages/**/*.*'
  ], {
    base: 'source/pages/'
  })
  .pipe(gulp.dest('build/'));
});

gulp.task('copy', function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/favicon/**'
    ], {
      base: 'source'
    })
  .pipe(gulp.dest('build'));
});

gulp.task('js', function () {
  return gulp.src('source/js/app.js')
    .pipe(webpack({
      output: {
        filename: 'app.js',
      },
      mode: isDev ? 'development' : 'production',
      devtool: isDev ? 'eval-source-map' : 'none',
      module: {
        rules: [
          {
            exclude: '/node-modules/',
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              }
            },
          }
        ]
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(server.stream());
});

gulp.task('vendor', function() {
  return gulp.src('source/js/vendor/*.js')
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('calc', function () {
  return gulp.src('source/js/calc/calc.js')
    .pipe(webpack({
      output: {
        filename: 'calc.js',
      },
      mode: isDev ? 'development' : 'production',
      devtool: isDev ? 'eval-source-map' : 'none',
      module: {
        rules: [
          {
            exclude: '/node-modules/',
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              }
            },
          }
        ]
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/calc'))
    .pipe(server.stream());
});

gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css'));
  gulp.watch('source/img/svg/icon-*.svg', gulp.series('sprite', 'path', 'html', 'refresh'));
  gulp.watch('source/pages/**/*.html', gulp.series('path', 'html','refresh'));
  gulp.watch('source/js/**/*.js', gulp.series('js'));
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('images', function() {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))

    .pipe(gulp.dest('source/img'));

});

gulp.task('webp', function () {
  return gulp.src('source/img/**/*.{png,jpg}')
    .pipe(webp({quality: 80}))
    .pipe(gulp.dest('source/img'));
});

gulp.task('sprite', function () {
  return gulp.src('source/img/svg/icon-*.svg')
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img/svg'));
});

gulp.task('html', function () {
  return gulp.src('build/**/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest('build'));
});

gulp.task('copy', function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/favicon/**'
    ], {
      base: 'source'
    })
  .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('minify', () => {
  return gulp.src('build/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series('clean', 'path', 'copy', 'css', 'sprite', 'js', 'vendor', 'calc', 'html', 'minify'));
gulp.task('start', gulp.series('build', 'server'));
