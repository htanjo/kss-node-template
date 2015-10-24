"use strict";

var gulp = require('gulp'),
    wiredep = require('wiredep').stream;

gulp.task('bower', function () {
  gulp.src('./.templates/index.html')
    .pipe(wiredep({ignorePath: '../template/'}))
    .pipe(gulp.dest('./template'));
});

gulp.task('default', ['bower']);
