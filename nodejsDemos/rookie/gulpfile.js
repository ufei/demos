/**
 * Created by ufeimiya on 16-5-6.
 */
var gulp = require('gulp');
var less=require('gulp-less');
var cssmin=require('gulp-minify-css');

gulp.task('changeLess',function(){
    gulp.src(['public/less/*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('public/css'));
});

gulp.task('lessWatch',function(){
    gulp.watch('public/less/*.less',['changeLess']);
});
