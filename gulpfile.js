let gulp = require('gulp');
// let babel = require('gulp-babel');
let concat = require('gulp-concat');
let cssnano = require('gulp-cssnano');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');

function fnJS(){
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
}

function fnImg(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

function fnSass(){
    return gulp.src('./src/sass/*.scss')
        //编译
        .pipe(sass({outputStyle :'expanded'}))
        //压缩
        // .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'))
}

function fnWatch(){
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/img/*',fnImg);
    gulp.watch('./src/sass/*.scss',fnSass);
}

exports.Js = fnJS;
exports.Img = fnImg;
exports.Sass = fnSass;
exports.default = fnWatch;