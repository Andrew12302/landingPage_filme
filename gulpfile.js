const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// SCSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// JS
function scripts() {
    return gulp.src('./main.js')      // main.js na raiz
        .pipe(gulp.dest('./dist/js')); // copia para dist/js
}

// Task padrão: roda SCSS + imagens + JS
exports.default = gulp.parallel(styles, images, scripts);

// Watch: observa mudanças em SCSS e JS
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./main.js', gulp.parallel(scripts));
}

