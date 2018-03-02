const gulp = require('gulp');

//转译JavaScript
gulp.task('webpack', () => {
    const webpack = require('webpack-stream');
    const config = require('./webpack.config.js');
    gulp.src('./src/**/*.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('./www/js'));
});

//编译less
gulp.task('less', () => {
    const less = require('gulp-less');
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./www/css'));
});

gulp.task('default', ['webpack', 'less']);

